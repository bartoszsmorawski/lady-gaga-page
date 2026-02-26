import { articles } from './articlesList.js';

const articlesPerPage = 4;
let currentPage = 1;
let animationFlag = false;

function setupPagination() {
	const pagination = document.querySelector('.pagination');
	pagination.innerHTML = '';
	const pageCount = Math.ceil(articles.length / articlesPerPage);
	const maxVisible = 4;
	let startPage = currentPage - Math.floor(maxVisible / 2);
	let endPage = startPage + maxVisible - 1;

	if (startPage < 1) {
		startPage = 1;
		endPage = maxVisible;
	}

	if (endPage > pageCount) {
		endPage = pageCount;
		startPage = pageCount - maxVisible + 1;
	}

	if (startPage < 1) {
		startPage = 1;
	}

	if (currentPage !== 1) {
		const prevBtn = document.createElement(`span`);
		prevBtn.classList.add(`prev`);
		prevBtn.innerText = 'PREV';

		prevBtn.addEventListener('click', () => {
			currentPage--;
			updatePage();
		});

		pagination.appendChild(prevBtn);
	}

	for (let i = startPage; i <= endPage; i++) {
		const btn = document.createElement('span');
		btn.classList.add('page');
		btn.innerText = i;
		if (i === currentPage) {
			btn.classList.add('active');
		}

		btn.addEventListener('click', () => {
			currentPage = i;
			console.log(currentPage);
			updatePage();
		});

		pagination.appendChild(btn);
	}

	if (currentPage !== endPage) {
		const nextBtn = document.createElement('span');
		nextBtn.classList.add('next');
		nextBtn.innerText = 'NEXT';

		nextBtn.addEventListener('click', () => {
			currentPage++;
			updatePage();
		});

		pagination.appendChild(nextBtn);
	}
}

function updatePage() {
	displayArtisles(currentPage, animationFlag);
	setupPagination();
}

updatePage();

const container = document.querySelector('.cards');

function displayArtisles(page, flag) {
	const container = document.querySelector('.cards');
	container.innerHTML = '';
	const start = (page - 1) * articlesPerPage;
	const end = start + articlesPerPage;

	const items = articles.slice(start, end);

	items.forEach(article => {
		const card = document.createElement('a');
		const card2 = document.createElement('div');
		card2.innerHTML = article.content;
		const cardText = card2.textContent.slice(0, 100).trim();
		card.className = `card ${!animationFlag ? 'animation-down' : ''}`;
		card.innerHTML = `<div class="card-top">
	
						<div class="card-text">
	${cardText}
						</div>
	
						<div class="card-icon">
							<img
								src="../picture/${article.icon}"
								alt="Ikona" />
							<!-- podmień wg potrzeb -->
						</div>
	
						<div class="overlay"></div>
					</div>
	
					<div class="card-title"> ${article.title} </div>	
			`;

		container.appendChild(card);
	});

	animationFlag = true;
}
