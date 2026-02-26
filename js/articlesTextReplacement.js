import { articles } from "./articlesList.js";



const params = new URLSearchParams(window.location.search);
let index = parseInt(params.get('article'));

if (!Number.isNaN(index)) {
	const article = articles[index];

	const contentContainer = document.querySelector('.articleTemplate-description--position');
	const tittle = document.querySelector('.articleTemplate-tittle');
	const video = document.querySelector('.video-wrapper');
	const nextLink = document.querySelector('#btn-next');
	const prevLink = document.querySelector('#btn-previous');
	const articleName = document.querySelectorAll('.articleName');
	const articleDate = document.querySelectorAll('.articleDate');

	document.title = article.title;
	tittle.innerHTML = article.title;
	video.innerHTML = article.media;
	contentContainer.innerHTML = article.content;

	let nextIndex = index + 1;
	let prevIndex = index - 1;

	if (nextIndex >= articles.length - 1) {
		nextIndex = 0;
	}

	if (prevIndex < 0) {
		prevIndex = articles.length - 1;
	}

	nextLink.href = `articleTemplate.html?article=${nextIndex}`;
	prevLink.href = `articleTemplate.html?article=${prevIndex}`;

	articleName[0].innerHTML = articles[prevIndex].title;
	articleName[1].innerHTML = articles[nextIndex].title;

	// ----------------------------------------------
	// Randomowa data:

	function randomDatesArray(count) {
		const months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		];

		const dates = [];

		for (let i = 0; i < count; i++) {
			const year = Math.floor(Math.random() * 5) + 2020;
			const month = months[Math.floor(Math.random() * 12)];
			const day = Math.floor(Math.random() * 28) + 1;

			dates.push(`| ${month} ${day} ${year} |`);
		}

		return dates;
	}

	const randomDateFinish = randomDatesArray(articleDate.length);

	for (let i = 0; i < articleDate.length; i++) {
		articleDate[i].innerHTML = randomDateFinish[i];
	}

	// ----------------------------------------------
} else {
	const url = new URL(window.location.href);
	url.searchParams.set('article', '0');
	window.location.href = url.toString();
	console.log(url.toString());
}
