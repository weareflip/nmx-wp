
import './core'
jQuery(function ($) {
	"use strict";

	const BoilerplateHeroScroll = () =>{
	
		const $isBlock = $('.boilerplate-hero-block')
		if (!$isBlock.length) return; 
 
		const $ctaScroll = $isBlock.find('.boilerplate-hero-block-button-scroll__icon')
		$ctaScroll.click(function () {
			let $dataScroll = $(this).data('scroll')
			if($dataScroll.length > 0){
				$('html, body').animate({
					scrollTop: $(`${$dataScroll}`).offset().top
				}, 1000)
			}
		});
	} 	

	const BoilerplateAccordion = () =>{
	
		const $accordionBlock = $('.boilerplate-accordion-block')
		if (!$accordionBlock.length) return; 
 
		let $ctaAccordion = $accordionBlock.find('.qa-question');
 
		$ctaAccordion.on('click', function (e) {
			e.preventDefault();
			let $this = $(this) 
			$this.next().slideToggle();
			$this.parent('.qa-item').toggleClass('qa-item-open'); 
		})
	} 

	const BoilerplateCardSlider = () =>{

		const $cardsSliders = $('.boilerplate-card-sliders');
		if (!$cardsSliders.length) return; 
		let $data = $cardsSliders.data('boilerplate-slider')

		$('.boilerplate-card-sliders-wrapper').slick({
			slidesToShow: $data.slidesToShow ? $data.slidesToShow : 2,
			slidesToScroll: $data.slidesToScroll ? $data.slidesToScroll : 1,
			dots: $data.dots ? $data.dots :false,
			arrows:$data.arrows ? $data.arrows : true,
			autoplay:$data.autoplay ? $data.autoplay :false,
			focusOnSelect: true,
			infinite: $data.infinite ? $data.infinite : true,
			responsive: [
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 1,
				  }
				}
			  ]
		});
	}

	const BoilerplatePostSlider = () =>{

		const $cardsSliders = $('.boilerplate-grid-card-post-block__slider');
		if (!$cardsSliders.length) return; 
		let $data = $cardsSliders.data('boilerplate-slider')

		$cardsSliders.slick({
			slidesToShow: $data.slidesToShow ? $data.slidesToShow : 2,
			slidesToScroll: $data.slidesToScroll ? $data.slidesToScroll : 1,
			dots: $data.dots ? $data.dots :false,
			arrows:$data.arrows ? $data.arrows : true,
			autoplay:$data.autoplay ? $data.autoplay :false,
			focusOnSelect: true,
			infinite: $data.infinite ? $data.infinite : true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
					breakpoint: 640,
					settings: {
					  slidesToShow: 1,
					}
				}
			  ]
		});
	}

	const BoilerplateVideo = () =>{
		let $video =  $(".wp-block-video video");
		if (!$video.length) return; 

		$video.click(function(){
			if($(this).get(0).paused){
				$(this).parent().addClass('paused')
				$(this).get(0).play()
			}else{
				$(this).parent().removeClass('paused')
				$(this).get(0).pause()
			}
		})
	}

	$(window).on('load', function () {
		
	});

	$(window).scroll(function() {
		
	});

	$(window).on('resize', function () {
		
	});

	$(document).ready(function () {
		BoilerplateHeroScroll()
		BoilerplateAccordion()
		BoilerplateCardSlider()
		BoilerplateVideo()
		BoilerplatePostSlider()
	});
});