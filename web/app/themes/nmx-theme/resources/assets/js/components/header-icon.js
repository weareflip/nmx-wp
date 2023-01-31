import lottie from 'lottie-web';

import NMX_ICON_EFFECT from "../blobs/nmx-logo.json";

class HeaderIcon {
    constructor() {
        this.details = {
            'nmx-logo' : {
                animation: NMX_ICON_EFFECT,
                delayFrame: 51,
                delay: 4000,
                loopDelay: 200
            },
        };

        this.element = document.querySelector('.nmx-logo');

        if (this.element) {
            this.icon = this.element.getAttribute('data-icon');
            this.initialiseAnimation();
        }
    }

    initialiseAnimation() {
        this.element.lottie = lottie.loadAnimation({
            container: this.element,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: this.details[this.icon].animation
        });

        this.startAnimation();

        this.element.lottie.addEventListener('enterFrame', (event) => {
            if (!this.delayed && event.currentTime > this.details[this.icon].delayFrame) {
                this.delayAnimation(this.details[this.icon].delay);
            }
        });

        this.element.lottie.addEventListener('complete', () => {
            setTimeout(() => {

            }, this.details[this.icon].loopDelay);
            this.startAnimation();
        });
    }

    startAnimation() {
        this.delayed = false;
        this.element.lottie.goToAndPlay(0);
    }

    delayAnimation(delay) {
        this.delayed = true;
        this.pauseAnimation();

        setTimeout(() => {
            this.continueAnimation();
        }, delay);
    }

    pauseAnimation() {
        this.element.lottie.pause();
    }

    continueAnimation() {
        this.element.lottie.play();
    }
}


export const initHeaderIcon = () => {
    new HeaderIcon();
};