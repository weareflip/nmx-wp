import $ from 'jquery';
import { Util, Carousel } from 'bootstrap';

class carousel {
    constructor(query) {
        this.element = $(query);

        this.initialise();
    }

    initialise() {
        if (this.element.length === 0) return;

        $(this.element).carousel();

        this.slides_total = $(this.element).find('.carousel-item').length;

        $(this.element).find('*[data-slide="prev"]').click((event) => {
            event.preventDefault();
            $(this.element).carousel('prev');
        });

        $(this.element).find('*[data-slide="next"]').click((event) => {
            event.preventDefault();
            $(this.element).carousel('next');
        });

        $(this.element).find("*[data-slide-to]").click((event) => {
            $(this.element).carousel($(event.target).data('slide-to'));
        });

        $(this.element).on('slid.bs.carousel', (event) => {
            $(this.element).find('.carousel-item:nth(' + event.from + ')').addClass('non-active');
            $(this.element).find('.carousel-item:nth(' + event.to + ')').removeClass('non-active');

            this.slides_index = event.to;
            this.updateInfo(event);
        })
    }

    updateInfo() {
        let slides_index = (this.slides_index + 1).toString().padStart(2, '0');
        let slides_total = (this.slides_total).toString().padStart(2, '0');

        $(this.element).find('*[data-slide-info]').text(slides_index + '/' + slides_total);
    }
}

export const initCarousel = (query) => {
    new carousel(query);
};

// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}
