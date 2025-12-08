document.getElementById('userForm').addEventListener('submit', function (e) {
	e.preventDefault(); // blokujemy wysyłkę aby móc testować

	const first = document.getElementById('firstName').value.trim();
	const last = document.getElementById('lastName').value.trim();
	const email = document.getElementById('email').value.trim();
	const birthday = document.getElementById('birthday').value;
	const zip = document.getElementById('zip').value.trim();

	if (!first || !last || !email || !birthday || !zip) {
		alert('Please fill out all required fields.');
		return;
	}

	alert('Form sent successfully!');
});
