burgerBtn.onclick = function () {
	if (!this.classList.contains("open")) {
		this.classList.add("open");
		burgerMenu.classList.add("open");
	} else {
		this.classList.remove("open");
		burgerMenu.classList.remove("open");
	}
};
const partnerSlider = new Swiper(".partners__container", {
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	freeMode: true,
	breakpoints: {
		575.98: {
			slidesPerView: 3,
			spaceBetween: 40,
		},
		767.98: {
			slidesPerView: 5,
			spaceBetween: 40,
		},
	},
});
const commitsSlider = new Swiper(".sw-com-container", {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	navigation: {
		nextEl: ".commits__next",
		prevEl: ".commits__prev",
	},
	pagination: {
		el: ".commits-pagination",
		type: "bullets",
		clickable: true,
	},
	breakpoints: {
		575.98: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		991.98: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
});
