const navLink = document.querySelectorAll('.navigation__link');
const checkbox = document.querySelector('.navigation__checkbox');
navLink.forEach((link) => {
	link.addEventListener('click', () => {
		checkbox.checked = false;
	});
});

// Detect all clicks on the document

document.addEventListener('click', function(event) {
	// If user clicks inside the element, do nothing

	if (event.target.closest('.popup__content') || event.target.closest('.section-contacts')) {
		return;
	}

	document.querySelector('.popup__close').click();
});
