import lottie from 'lottie-web';

export class LottieFX
{
    constructor(element,delay,data,animate) {
        this.element = element;
        this.delay = delay;
        this.data = data;
        this.animate = animate;

        if( Object.prototype.toString.call( this.element ) === '[object Array]' ) {
            this.animations = this.element.map((n)=>{
                this.initLottie(n, data);
            });
        } else {
            this.animations = this.initLottie(this.element, data);
        }

        if(animate) {
            this.doOnAnimation();
        }

    }

    doOnAnimation() {
        this.doAnimation(this.animate, this.delay);
    }

    doAnimation(frames, delay = 0) {
        setTimeout(()=>{

            if( Object.prototype.toString.call( this.animations ) === '[object Array]' ) {
                let i = 0;
                while (i < this.animations.length) {
                    this.animations[i].playSegments(frames, true);
                    i++;
                }
            } else {
                this.animations.playSegments(frames, true);
            }

        }, delay);
    }

    initLottie(container, data) {
        return lottie.loadAnimation({
            container: container,
            renderer:'svg',
            loop:false,
            autoplay: false,
            animationData: data
        });
    }
}