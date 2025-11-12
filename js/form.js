// Pokazuje pole honoree, jeśli zaznaczono checkbox
const honorCheckbox = document.getElementById('honor');
const honoreeField = document.getElementById('honoreeField');

honorCheckbox.addEventListener('change', () => {
	honoreeField.style.display = honorCheckbox.checked ? 'block' : 'none';
});
