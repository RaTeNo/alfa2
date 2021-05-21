$(() => {
	// Основной слайдер на главной
	$('.main_slider').owlCarousel({
		items: 5,
		margin: 25,
		nav: true,
		navText: ["<img src='images/slider_prev.svg'>", "<img src='images/slider_next.svg'>"],
		dots: false,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		responsive: {
			0: {
				items: 1
			},
			479: {
				items: 2
			},
			767: {
				items: 3
			},
			1023: {
				items: 4
			},
			1119: {
				items: 5
			}
		}

	})



	var owl = $('.slider_advantage');
	owl.owlCarousel({
		items: 1,
		margin: 0,
		nav: false,
		dots: true,
		smartSpeed: 500,
		autoplayTimeout: 3000
	});
	
	$('.customNextBtn').click(function (e) {
		e.preventDefault();
		owl.trigger('next.owl.carousel');		
	})

	owl.on('changed.owl.carousel', function(event) {		
	    if(event.item.index==2)
	    {
	    	$(".customNextBtn span").text("Приступить к работе").addClass("finish");

	    	setTimeout(() => {			
				$(".customNextBtn span").addClass("finish");
			}, 100)
	    }
	})

	$('body').on('click', '.finish', function () {
		setTimeout(() => {			
			$.fancybox.close(true)
		}, 100)
	});



	$('.price-link a').click(function (e) {
		e.preventDefault();
		let price = $(this).data("price");
		$("input[name='sum']").val(+$("input[name='sum']").val()+price);
	});


	// Слайдер в предпросмотре рекламы
	$('.ad_preview .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: true,
		loop: true,
		smartSpeed: 500,
		autoplay: true,
		autoplayTimeout: 3000,
		onTranslate: (event) => {
			$(event.target).trigger('stop.owl.autoplay')
		},
		onTranslated: (event) => {
			$(event.target).trigger('play.owl.autoplay', [2500, 0])
		}
	})


	// Насктройки
	$('.settings .save_btn').click(function (e) {
		e.preventDefault()

		// Данные формы для отправки на сервер
		let formData = $('.settings .form').serialize()

		// Показать сообщение success
		showNoti('success')

		// Показать сообщение error
		// showNoti('error')
	})


	// Уведомления
	$('.notifications .notification .close').click(function (e) {
		e.preventDefault()

		$('.notifications .notification').removeClass('active')
		$('.notifications').fadeOut(200)
	})


	// Удаление файла
	$('.form .file .selected .remove').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.file')

		$(this).closest('div').remove()
		parent.find('input[type=file]').val('')
	})


	// Спойлер в тексте
	$('.text_block .spoler_btn').click(function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.text_block')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')

			$parent.find('.hide').slideUp(500)
		} else {
			$(this).addClass('active')

			$parent.find('.hide').slideDown(500)
		}
	})


	// Перезагрузка страницы
	$('.refresh_page_btn').click(e => {
		e.preventDefault()

		document.location.reload()
	})


	// График
	// http://gionkunz.github.io/chartist-js/index.html
	if ($('#chart1_1').length) {
		new Chartist.Line('#chart1_1', {
			labels: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10],
			series: [
				[6, 6, 6.5, 4, 1.25, 2, 3, 4.5, 4, 1]
			]
		}, {
			high: 12,
			low: 1,
			seriesBarDistance: 0.25,
			showArea: true
		})
	}

	if ($('#chart2_1').length) {
		new Chartist.Line('#chart2_1', {
			labels: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10],
			series: [
				[6, 6, 6.5, 4, 1.25, 2, 3, 4.5, 4, 1]
			]
		}, {
			high: 12,
			low: 1,
			seriesBarDistance: 0.25,
			showArea: true
		})
	}

	$(".disabled").click(function (e) {
		e.preventDefault()
	});


	// Пароль
	$('body').on('click', '.password-control', function () {
		if ($('#password-input').attr('type') == 'password') {
			$(this).addClass('view');
			$('#password-input').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input').attr('type', 'password');
		}
		return false;
	});

	$('body').on('click', '.password-control2', function () {
		if ($('#password-input2').attr('type') == 'password') {
			$(this).addClass('view');
			$('#password-input2').attr('type', 'text');
		} else {
			$(this).removeClass('view');
			$('#password-input2').attr('type', 'password');
		}
		return false;
	});


	// Галерея картинок
	/*if ($('.gallery').length) {
		rowGrid(document.getElementsByClassName('gallery')[0], {
			itemSelector: '.item',
			minMargin: 10,
			maxMargin: 20,
			minWidth: 134
		})

		rowGrid(document.getElementsByClassName('gallery')[1], {
			itemSelector: '.item',
			minMargin: 10,
			maxMargin: 20,
			minWidth: 134
		})

		rowGrid(document.getElementsByClassName('gallery')[2], {
			itemSelector: '.item',
			minMargin: 10,
			maxMargin: 20,
			minWidth: 134
		})
	}	*/

})


const showNoti = status => {
	$('.notifications .notification').removeClass('active')

	switch (status) {
		case 'success':
			$('.notifications .notification.success').addClass('active')
			break;

		default:
			$('.notifications .notification.error').addClass('active')
			break;
	}

	$('.notifications').fadeIn(300)
}