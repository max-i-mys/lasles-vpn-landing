const partnerSlider = new Swiper(".partners__container", {
	slidesPerView: 2,
	spaceBetween: 42,
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	freeMode: true,
	breakpoints: {
		575.98: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		767.98: {
			slidesPerView: 5,
			spaceBetween: 40,
		},
		// 1199.98:{
		// 		slidesPerView: 5,
		// 		spaceBetween: 42
		// }
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
});
