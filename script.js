const hamburgerElement = document.querySelector('.hamburger');
const mainMenuElement = document.querySelector('.main-menu');

const loopElement = document.querySelector('.searching-loop');
const mainSearchElement = document.querySelector('.main-search');

const logoMobileElement = document.querySelector('.main-logo-mobile');

function toggleHamburgerState() {
	logoMobileElement.classList.toggle('active');

	if (hamburgerElement.classList.contains('active')) {
		if (loopElement.classList.contains('active')) {
			loopElement.classList.remove('active');
			mainSearchElement.classList.remove('active');

			if (!mainMenuElement.classList.contains('active')) hamburgerElement.classList.remove('active');

			return;
		}

		mainMenuElement.classList.remove('active');
		hamburgerElement.classList.remove('active');
	} else {
		hamburgerElement.classList.add('active');
		mainMenuElement.classList.add('active');
	}
}

hamburgerElement.addEventListener('click', toggleHamburgerState);

function toggleSearchLooprState() {
	loopElement.classList.add('active');
	mainSearchElement.classList.add('active');
	hamburgerElement.classList.add('active');
	logoMobileElement.classList.toggle('active'); //Skalowanie logo (poprawić)
}

loopElement.addEventListener('click', toggleSearchLooprState);

//ANIMACJA WJAZDU Z DOŁU
//CAŁY KOD DO WYJAŚNIENIA !!!!!!!

const animationDown = document.querySelectorAll('.animation-down ');

const animationDownObserver = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			}
		});
	},
	{
		threshold: 0.2, // kiedy 20% sekcji jest widoczne
	}
);

animationDown.forEach(animationDown => {
	animationDownObserver.observe(animationDown);
});

//ANIMACJA ZNIKANIA TRÓJKĄTA
//CAŁY KOD DO WYJAŚNIENIA !!!!!!!

const triangleAnimation = document.querySelector('.triangle-animation');

const triangleAnimationObserver = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// kiedy wracasz do sekcji -> pokaż trójkąt
				triangleAnimation.classList.remove('hidden');
			} else {
				// kiedy zjedziesz niżej -> ukryj trójkąt
				triangleAnimation.classList.add('hidden');
			}
		});
	},
	{
		threshold: 0.4, // reaguje, gdy 50% sekcji jest w widoku
	}
);

triangleAnimationObserver.observe(triangleAnimation);

/* Animacja footer (efekt zapalania światła) */
//CAŁY KOD DO WYJAŚNIENIA !!!!!!!

document.addEventListener('DOMContentLoaded', () => {
	const target = document.querySelector('footer .fade-text');

	const observer = new IntersectionObserver(
		entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					target.classList.add('show');
				}
			});
		},
		{
			threshold: 0.2, // odpala gdy 20% stopki jest widoczne
		}
	);

	observer.observe(target);
});

//FUNKCJA LOADERA STRONY Z OPÓŹNIENIEM DO ZOBACZENIA EFEKTU

window.addEventListener('load', () => {
	const loader = document.getElementById('loader');
	const content = document.getElementById('mainContent');

	/* === OPÓŹNIENIE WYŚWIETLENIA LOADERA === */
	setTimeout(() => {
		// schowaj loader
		loader.classList.add('hidden');

		// pokaż stronę
		content.classList.add('loaded');
	}, 1500); // <--- tutaj ustawiasz opóźnienie w milisekundach (1500ms = 1,5s)
});
