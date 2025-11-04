//PRZYCISK PLAY I STOP - filmik

// Pobranie elementów
const videoBtn = document.getElementById('videoBtn');
const video = document.querySelector('.video');
const videoImg = document.querySelector('.video-img');

// Znajdź najbliższy kontener (zakładam strukturę z position:relative)
const videoContainer = video ? video.closest('div[style*="position: relative"], .video-container') : null;

let hideTimeoutId = null;

const showButton = () => {
	// anuluj timeout ukrywania jeśli istnieje
	if (hideTimeoutId) {
		clearTimeout(hideTimeoutId);
		hideTimeoutId = null;
	}
	videoBtn.classList.remove('hidden');
	// upewnij się, że przycisk może otrzymać focus
	videoBtn.setAttribute('tabindex', '0');
};

const scheduleHideButton = (delay = 3000) => {
	// anuluj poprzedni
	if (hideTimeoutId) clearTimeout(hideTimeoutId);

	// zaplanuj ukrycie
	hideTimeoutId = setTimeout(() => {
		videoBtn.classList.add('hidden');
		hideTimeoutId = null;
	}, delay);
};

const toggle = () => {
	const isPlaying = videoBtn.classList.toggle('playing');

	if (isPlaying) {
		// play
		videoImg.style.display = 'none';
		video.play().catch(err => console.warn('Błąd play():', err));

		// zaplanuj ukrycie po 3s (ale jeżeli użytkownik najedzie - anulujemy)
		scheduleHideButton(3000);
	} else {
		// pause
		video.pause();
		// pokaż od razu
		showButton();
	}
};

// TODO: bombelkowanie js

// obsługa kliknięć
videoBtn.addEventListener('click', e => {
	e.stopPropagation(); // nie przechodzi w górę
	toggle();
});

// kliknięcie w wideo działa jak kliknięcie w przycisk
video.addEventListener('click', () => {
	// jeśli chcesz, żeby kliknięcie w obrazek (thumbnail) też działało, to zostaw
	toggle();
});

// obsługa klawiatury na przycisku
videoBtn.addEventListener('keydown', e => {
	if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
		e.preventDefault();
		toggle();
	}
});

// pokazuj przycisk przy najechaniu na kontener (również gdy najedziesz na przycisk)
videoContainer.addEventListener('mouseenter', () => {
	showButton();
});

// ukryj po opuszczeniu kontenera (tylko gdy film gra)
videoContainer.addEventListener('mouseleave', () => {
	if (videoBtn.classList.contains('playing')) {
		// małe opóźnienie, żeby nie skakał przy szybkim przejściu
		setTimeout(() => {
			// dopiero ukryj jeśli kursor naprawdę nie jest już nad kontenerem
			if (!videoContainer.matches(':hover')) {
				scheduleHideButton(0); // natychmiast
			}
		}, 150);
	}
});

// obsługa dotyku: tap na kontener pokaże przycisk (mobilne)
videoContainer.addEventListener(
	'touchstart',
	() => {
		showButton();
		// jeśli film gra, zaplanuj ukrycie
		if (videoBtn.classList.contains('playing')) scheduleHideButton(3000);
	},
	{ passive: true }
);

// opcjonalne: gdy wideo kończy się, pokaż przycisk
video.addEventListener('ended', () => {
	videoBtn.classList.remove('playing');
	showButton();
});

// debug: możesz odkomentować by widzieć w konsoli zdarzenia
// videoContainer.addEventListener('click', () => console.log('container click'));
// video.addEventListener('click', () => console.log('video click'));
// videoBtn.addEventListener('click', () => console.log('button click'));
// przyciemnianie video

window.addEventListener('scroll', () => {
	const overlay = document.querySelector('.overlay');

	if (!overlay) return;

	const scrollY = window.scrollY;
	const maxHeight = window.innerHeight;
	let opacity = scrollY / maxHeight;

	if (opacity > 1) opacity = 1;
	overlay.style.opacity = opacity;
});
