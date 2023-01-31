import {LottieFX} from "../library/lottiefx";
import AUCTION_EFFECT from "../blobs/auction-icon.json";
import MARKETPLACE_EFFECT from "../blobs/marketplace-icon.json";
import PURSE_EFFECT from "../blobs/purse-icon.json";
import SELL_EFFECT from "../blobs/sell-icon.json";
import TRUCK_EFFECT from "../blobs/truck-icon.json";
import VALUATION_EFFECT from "../blobs/valuation-icon.json";

class Flasher {
    constructor() {
        this.elementset = {
            'auction-icon': {animation: AUCTION_EFFECT, endFrame: 44},
            'marketplace-icon': {animation: MARKETPLACE_EFFECT, endFrame: 44},
            'purse-icon': {animation: PURSE_EFFECT, endFrame: 44},
            'sell-icon': {animation: SELL_EFFECT, endFrame: 65},
            'truck-icon': {animation: TRUCK_EFFECT, endFrame: 44},
            'valuation-icon': {animation: VALUATION_EFFECT, endFrame: 27},
        };
        this.elements = document.querySelectorAll('.flash-bang');
        this.mobileBreak = 768;
        this.margin = 100;

        if (this.elements.length) {
            this.initialiseFlashes();
            this.getIconPositions();
            window.addEventListener('resize', () => {
                this.getIconPositions();
            });
            window.addEventListener('scroll', () => {
                this.refreshAnimations();
            })
        }
    }

    initialiseFlashes() {
        let i = 0;
        while (i < this.elements.length) {
            if (this.elements[i].hasAttribute('data-icon') && this.elementset.hasOwnProperty(this.elements[i].getAttribute('data-icon'))) {
                let icon = this.elements[i].getAttribute('data-icon');
                this.elements[i].lottie = new LottieFX(this.elements[i], 0, this.elementset[icon].animation);
                this.elements[i].endFrame = this.elementset[icon].endFrame;
            }

            if (this.elements[i].classList.contains('flash-bang-hover')) {
                this.elements[i].addEventListener('mouseenter', (event) => {
                    let element = event.target;

                    while (element.parentElement && !element.classList.contains('flash-bang-hover')) {
                        element = element.parentElement;
                    }

                    if (element) {
                        this.resetAnimation(element);
                        this.doAnimation(element);
                    }
                }, false);
            }

            let delay = this.elements[i].getAttribute('data-delay');
            this.elements[i].delay = delay ? parseInt(delay) : 0;

            let delayMobile = this.elements[i].getAttribute('data-delay-mob');
            this.elements[i].delayMobile = delayMobile ? parseInt(delayMobile) : delay;

            this.elements[i].animated = false;
            i++;
        }
    }

    getIconPositions() {
        let i = 0;
        while (i < this.elements.length) {
            this.elements[i].position = getPosition(this.elements[i]);
            i++;
        }
        this.refreshAnimations();
    }

    refreshAnimations() {
        let windowWidth = window.innerWidth,
            scrollTop = window.scrollY ? window.scrollY : document.documentElement.scrollTop,
            scrollLeft = window.scrollX ? window.scrollX : document.documentElement.scrollLeft,
            width = Math.max(document.documentElement.clientWidth, windowWidth || 0),
            height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            scrollBottom = scrollTop + height,
            scrollRight = scrollLeft + width;

        let l = this.elements.length;
        while (l--) {
            let element = this.elements[l];
            if (!element.animated &&
                ((scrollTop < element.position.bottom && scrollBottom > element.position.bottom) ||
                    (scrollBottom > element.position.top && scrollTop < element.position.top))
            ) {

                let delay = windowWidth < this.mobileBreak ? element.delayMobile : element.delay;
                if (delay) {
                    setTimeout(() => {
                        this.doAnimation(element)
                    }, delay)
                } else {
                    this.doAnimation(element);
                }

                element.animated = true;

            } else if (element.animated && (scrollTop - this.margin > element.position.bottom || scrollBottom + this.margin < element.position.top)) {
                if (!element.classList.contains('flash-bang-once')) {
                    this.resetAnimation(element);
                    element.animated = false;
                }
            }

        }

    }

    doAnimation(element) {
        if (element.hasOwnProperty('lottie')) {
            element.lottie.doAnimation([0, element.endFrame]);
        }
        element.classList.add('show');
    }

    resetAnimation(element) {
        element.classList.remove('show');
    }
}

function getPosition(element) {
    let rect = element.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        height = element.scrollHeight;
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft, bottom: rect.top + scrollTop + height}
}

export const initFlasher = () => {
    new Flasher();
};
