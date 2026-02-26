//ANIMACJA WJAZDU Z DOŁU
//CAŁY KOD DO WYJAŚNIENIA !!!!!!!

const animationDown = document.querySelectorAll('.animation-down');

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
const logo = document.querySelector('.main-logo-mobile');
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
		threshold: 0.4, // reaguje, gdy 40% sekcji jest w widoku
	}
);

triangleAnimationObserver.observe(logo);

/* Animacja footer (efekt zapalania światła) */

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
