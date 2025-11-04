//FUNKCJA LOADERA STRONY Z OPÓŹNIENIEM DO ZOBACZENIA EFEKTU

window.addEventListener('load', () => {
	const loader = document.getElementById('loader');
	// const content = document.getElementById('mainContent');

	/* === OPÓŹNIENIE WYŚWIETLENIA LOADERA === */
	setTimeout(() => {
		// schowaj loader
		loader.classList.add('hidden');

		// pokaż stronę
		// content.classList.add('loaded');
	}, 1500); // <--- tutaj ustawiasz opóźnienie w milisekundach (1500ms = 1,5s)
});
