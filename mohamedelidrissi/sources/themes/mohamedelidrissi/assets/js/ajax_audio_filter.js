(function ($) {

	$(document).ready(function () {

		var $loading = $('.loader.ajax').hide();

/* 		$('.main').on('click', '.pagination a.page-numbers', function (event) {
			event.preventDefault();
			console.log('pagination clicked');

			var pagenb = parseInt($(this).attr('href').replace(/\D/g, ''));

			console.log(pagenb);

			$.ajax({
				url: ajaxurl,
				data: {
					action: 'filter_audios',
					pagenb: pagenb,
					beforeSend: function () {
						$loading.show();
					}

				},
				type: 'post',

				success: function (result, textstatus) {
					// $('.pagination').html(result);
					console.log(result);
					// console.log('sucess');


				},
				error: function (result) {
					// console.log(result);
					// console.log('fail');
				},

			})

		}) */

		$('.main').on('click', '.btn_audio_filter', function (event) {
			event.preventDefault();

			let taxonomy = $(this).data('taxonomy'),
				term = $(this).data('term'),
				page = $(this).data('page');

			$('.pagination.archive').css('display', 'none');

			if ($('.btn_audio_filter')) {
				console.log('button clicked');
			}


			$.ajax({
				url: ajaxurl,
				data: {
					action: 'filter_audios',
					taxonomy: taxonomy,
					term: term,
				},
				type: 'post',

				success: function (result, textstatus) {
					$('.audio-container').html(result);
					// console.log(result);
					// console.log('sucess');
					$loading.show();

				},
				error: function (result) {
					// console.log(result);
					// console.log('fail');
				},

				complete: function () {
					$loading.hide();
					audio();
				}

			})

		});


	});



})(jQuery);


