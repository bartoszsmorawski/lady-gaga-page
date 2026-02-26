import { articles } from './articlesList.js';

const container = document.querySelector('.articleListContainer');

const url = new URL(window.location.href);
const pharse = url.searchParams.get('s');

const result = articles.filter(article => article.title.toLowerCase().includes(pharse.toLowerCase()));

console.log(result);

if (result.length === 0) {
    // nie ma nic
    container.innerHTML = 'Brak dopasowań'
} else {
    result.forEach(article => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <p>${article.title}</p>
        `;

        container.appendChild(card)
    })
}
