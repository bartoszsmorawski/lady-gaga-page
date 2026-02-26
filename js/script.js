



const body = document.body;

// MENU -HAMBURGER

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

			if (!mainMenuElement.classList.contains('active')) {
				body.classList.remove('no-scroll');
				hamburgerElement.classList.remove('active');
			}

			return;
		}

		body.classList.remove('no-scroll');
		mainMenuElement.classList.remove('active');
		hamburgerElement.classList.remove('active');
	} else {
		body.classList.add('no-scroll');
		hamburgerElement.classList.add('active');
		mainMenuElement.classList.add('active');
	}
}

hamburgerElement.addEventListener('click', toggleHamburgerState);

function toggleSearchLooprState() {
	body.classList.add('no-scroll');
	loopElement.classList.add('active');
	mainSearchElement.classList.add('active');
	hamburgerElement.classList.add('active');
	logoMobileElement.classList.toggle('active');
}

// MENU -LUPKA

loopElement.addEventListener('click', toggleSearchLooprState);

// -------------------------------------------------

// SEARCH INPUT
const input = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const form = document.querySelector('.search-form');

form.addEventListener('submit', event => {
	event.preventDefault();
	const value = input.value;

	const url = new URL(window.location.origin);
	window.location.href = url.toString();

	window.location.href = `${url.toString()}pages/searchArticlesResults.html?s=${value}`;
});



// -------------------------------------------------

//HOMEPAGE - SLIDER

const slides = document.querySelectorAll('.slide');
let current = 0;

const nextSlide = () => {
	const currentSlide = slides[current];
	currentSlide.classList.remove('active');
	currentSlide.classList.add('exit');

	current = (current + 1) % slides.length;
	const nextSlide = slides[current];
	nextSlide.classList.add('active');

	setTimeout(() => {
		currentSlide.classList.remove('exit');
	}, 700);
};

if ([...slides].length > 0) {
	setInterval(nextSlide, 2500);
}

//----------------------------------------- CO TO JEST ?

const coworkers = document.querySelectorAll('.co-worker--person');
const observer = new IntersectionObserver(
	(entries, obs) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				obs.unobserve(entry.target);
			}
		});
	},
	{
		root: null,
		threshold: 0.15,
		rootMargin: '0px 0px -10% 0px',
	}
);

coworkers.forEach(el => observer.observe(el));
