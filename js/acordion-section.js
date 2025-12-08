const accordions = document.querySelectorAll('.accordion-ourImpact');

console.log(accordions);

accordions.forEach(el => {
	const header = el.querySelector('.accordion-header--ourImpact');
	const content = el.querySelector('.accordion-content');

	header.addEventListener('click', () => {
		const isOpen = header.classList.contains('active');



		if (!isOpen) {
			header.classList.add('active');
			content.style.maxHeight = content.scrollHeight + 'px';
		} else {
            header.classList.remove('active');
			content.style.maxHeight = 0;
        }
	});
});

// ANIMATION


