const navLink = document.querySelectorAll('.navigation__link');
const checkbox = document.querySelector('.navigation__checkbox');
navLink.forEach((link) => {
	link.addEventListener('click', () => {
		checkbox.checked = false;
	});
});
