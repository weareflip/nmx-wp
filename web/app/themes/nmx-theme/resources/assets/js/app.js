import $ from 'jquery';

import {initFlasher} from './components/flasher';
import {initHeaderIcon} from './components/header-icon';
import {initCarousel} from './components/carousel';
import {initVideoPlayer} from './components/video-player';
import {initFauxFormMessages} from './components/faux-form-messages';
import {initEquipmentSearch} from "./components/equipment-search";
import { initScrollToHash } from "./components/scroll-to-hash";
import { initPardotIframeHandling } from "./components/pardot-iframe-handling";

import autosize from 'autosize';

if (location.hash) {
    window.scrollTo(0, 0);
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 1);
}

$(function () {
    initFlasher();
    initHeaderIcon();
    initCarousel('.carousel-header');
    initCarousel('#auction-carousel');
    initVideoPlayer();
    initFauxFormMessages();
    // initEquipmentSearch();
    initScrollToHash()
    initPardotIframeHandling();

    // Override Bootstrap menu behaviour to disable JS animations
    $('.navbar-toggler').click(function () {
        if ($(this).parents('.navbar').hasClass('nav-open')) {
            // Close the nav
            $(this).attr('aria-expanded', false);
            $(this).find('.menu-icon').removeClass('active');
            $(this).parents('.navbar').removeClass('nav-open');
        } else {
            // Open the nav
            $(this).attr('aria-expanded', true);
            $(this).find('.menu-icon').addClass('active');
            $(this).parents('.navbar').addClass('nav-open');
        }
    });

    // Accordion - Need to set an expanded class on .card for icons
    $('.card-header button').click(function () {
        let expanded = !!$(this).hasClass('collapsed');

        $(this).parents('.accordion').find('.card').removeClass('expanded');

        if (expanded) {
            $(this).parents('.card').addClass('expanded');
        } else {
            $(this).parents('.card').removeClass('expanded');
        }
    });

    $('.equipment-thumbnail:first-of-type').addClass('active');

    $('.equipment-thumbnail').click(function (event) {
        $('.equipment-thumbnail').removeClass('active');
        $(this).addClass('active');
        $('#equipment-main-image').attr('src', $(this).data('full-size'));
    });

    $('[data-href]').click(function () {
        $(this).css('cursor', 'pointer');
        window.location.href = $(this).data('href');
    });

    autosize(document.querySelectorAll('textarea.expanding-textarea'));
});

