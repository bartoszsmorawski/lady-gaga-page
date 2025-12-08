//Sprawdzić czy działa kod z Chatu

const pages = document.querySelectorAll('.page');

pages.forEach(page => {
	page.addEventListener('click', () => {
		document.querySelector('.page.active')?.classList.remove('active');
		page.classList.add('active');
	});
});
