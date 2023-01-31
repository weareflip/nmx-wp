import tingle from 'tingle.js';

class videoPlayer {
    constructor() {
        this.initialise();
    }

    initialise() {
        this.play_buttons = document.querySelectorAll('*[data-video]');

        for (let i = 0, length = this.play_buttons.length; i < length; i++) {

            this.play_buttons[i].addEventListener('click', (event) => {
                this.initialiseModal();
                this.modal.setContent(document.querySelector(this.play_buttons[i].dataset.video).outerHTML);
                this.modal.open();
            });
        }
    }

    initialiseModal() {
        this.modal = new tingle.modal({
            stickyFooter: false,
            closeMethods: ['overlay', 'button', 'escape'],
            closeLabel: "Close",
            cssClass: ['video-modal'],
            onOpen: ()=>{
                document.querySelector('.video-modal video').play();
            },
            onClose: ()=>{
                document.querySelector('.video-modal video').pause();
                this.modal.setContent('');
            }
        });
    }

    // hideVideoButtons() {
    //     for (let i = 0, length = this.play_buttons.length; i < length; i++) {
    //         this.play_buttons[i].classList.add('d-none');
    //     }
    // }
    //
    // showVideoButtons() {
    //     for (let i = 0, length = this.play_buttons.length; i < length; i++) {
    //         this.play_buttons[i].classList.remove('d-none');
    //     }
    // }
}

export const initVideoPlayer = () => {
    new videoPlayer();
};
