const testSlider = new Swiper('.partners__container',{
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	breakpoints: {
			// 768: {
			// 		slidesPerView: 2,
			// 		spaceBetween: 20
			// },
			992:{
					slidesPerView: 5,
					spaceBetween: 42
			}
	}
})