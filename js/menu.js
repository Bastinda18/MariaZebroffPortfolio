const navLink = document.querySelectorAll('.navigation__link');
const checkbox = document.querySelector('.navigation__checkbox');
navLink.forEach((link) => {
	link.addEventListener('click', () => {
		checkbox.checked = false;
	});
});

document.addEventListener('click', function(event) {
	// If user clicks inside the element, do nothing

	if (!event.target.closest('.popup__content') && event.target.closest('.popup')) {
		document.querySelector('.popup__close').click();
	}

	return;
});
