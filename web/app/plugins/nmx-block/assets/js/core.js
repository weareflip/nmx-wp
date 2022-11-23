jQuery(function ($) {
	"use strict";

	const BoilerplatePaginationGridCardPost = () => {
		const $wrap = $(".boilerplate-grid-card-post-block");
		if (!$wrap.length) return;
		const $itemWrap = $wrap.find(".boilerplate-grid-card-post-wrap"),
			$paginationWrap = $wrap.find(".boilerplate-pagination-wrap");

		let query = $wrap.data("query"),
			dataPaged = $wrap.data("paged") || 1,
			enablePagination = $wrap.data("enablepagination");

		const __ajax = async (val = {}) => {
			$([document.documentElement, document.body]).animate({ scrollTop: $wrap.offset().top - 130 }, 500);

			try {
				$wrap.addClass("__is-loading");
				let rs = await $.ajax({
					type: "post",
					url: cgbGlobal.ajax_url,
					dataType: "json",
					data: {
						...{ action: "boilerplate_ajax_grid_card_post" },
						...val,
					},
				});
				let { items, pagination, query } = rs;
				await $wrap.data("query", query);
				await $itemWrap.html(items);
				await $paginationWrap.html(pagination);
				await $wrap.removeClass("__is-loading");
			} catch (e) {
				console.log(e);
				await $wrap.removeClass("__is-loading");
			}
		};

		$paginationWrap.on("click", "a.page-numbers", function (e) {
			e.preventDefault();
			dataPaged = parseInt(dataPaged);
			if ($(this).hasClass("next")) {
				dataPaged += 1;
			} else if ($(this).hasClass("prev")) {
				dataPaged -= 1;
			} else {
				dataPaged = $(this).text() || dataPaged;
			}
			__ajax({ query, dataPaged, enablePagination });
			$wrap.data("paged", dataPaged);
			$wrap.attr("data-paged", dataPaged);
		});

	};


	$(document).ready(function () {
		BoilerplatePaginationGridCardPost();
	});
});