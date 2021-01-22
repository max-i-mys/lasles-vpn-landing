const partnerSlider = new Swiper('.partners__container',{
	slidesPerView: 5,
	spaceBetween: 42,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	// breakpoints: {
			// 768: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20
			// },
	// 		992:{
	// 				slidesPerView: 5,
	// 				spaceBetween: 42
	// 		}
	// }
})
const commitsSlider = new Swiper('.sw-com-container',{
	slidesPerView: 3,
	spaceBetween: 50,
	loop: true,
	navigation: {
		nextEl: '.commits__next',
		prevEl: '.commits__prev',
	},
	pagination: {
		el: '.commits-pagination',
		type: 'bullets',
		clickable: true,
	},
})