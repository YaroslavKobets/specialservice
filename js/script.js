function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
};
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
// POPUP=========================================================
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '')
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup,.popupslider,.popupserv'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open,.popupslider.open,.popupserv.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content,.popupslider__content,.popupserv__content')) {
				popupClose(e.target.closest('.popup,.popupslider,.popupserv'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}


function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}
function bodyUnLock() {
	setTimeout(function () {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px'
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}
























$(document).ready(function () {
	$(".header").removeClass("scrole");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 150) {
			$(".header").addClass("_scrole").fadeIn('fast');
		} else {
			$(".header").removeClass("_scrole").fadeIn('fast');
		}
	});
	$(".header__burger").click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$("body").toggleClass('lockk');
	});
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 3000,
		pouseOnFocus: true,
		responsive: [
			{
				breakpoint: 1210,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					centerMode: true,
				}
			}
		]
	});
	$('.sliderbig').slick({
		arrows: true,
		fade: true,
		dots: false,
		adaptiveHeight: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2000,
		pouseOnFocus: true,
		asNavFor: ".slidermin"
	});
	$('.sliderbig').on('click', function () {
		$(this).slick('slickNext');
	});

	$('.slidermin').slick({
		arrows: false,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 2000,
		autoplay: false,
		autoplaySpeed: 3000,
		pouseOnFocus: true,
		focusOnSelect: true,
		variableWidth: true,
		asNavFor: ".sliderbig",
		responsive: [
			{
				breakpoint: 1019,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: true,
				}
			}
		],
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: true,
				}
			}
		],
	});
	$('.review__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 3000,
		pouseOnFocus: true,
		waitForAnimate: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: true,
				}
			}
		],
	});

	$('.popup__slider-big').slick({
		arrows: true,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 2000,
		autoplay: false,
		autoplaySpeed: 3000,
		pouseOnFocus: true,
		asNavFor: ".popup__slider-min",
		responsive: [
			{
				breakpoint: 750,
				settings: {
					arrows: false,
					
				}
			}
		],
	});
	$('.popup__slider-min').slick({
		arrows: false,
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 2000,
		autoplay: true,
		autoplaySpeed: 3000,
		pouseOnFocus: true,
		variableWidth: true,
		asNavFor: ".popup__slider-big",
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					
				}
			}
		],
	});

});