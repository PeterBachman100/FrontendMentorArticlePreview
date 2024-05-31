document.addEventListener('DOMContentLoaded', function() {
	const shareButton = document.getElementById('shareButton');
	const hiddenMenu = document.getElementById('shareMenu');

	shareButton.addEventListener('click', function() {
		hiddenMenu.classList.toggle('hidden');
		shareButton.classList.toggle('active');
	});
});