import Cookie from 'js-cookie';

// Pardot is shit, so shit that it can't redirect to a given dynamic URL unless it's a domain that actually points to Pardot.
// This is the awful workaround... I'm sorry.

class fauxFormMessages {
    constructor() {
        window.addEventListener('load', () => {
            this.checkForMessage('contact_form');
            this.checkForMessage('bidders_contact_form');
            this.setupForm('contact_form');
            this.setupForm('bidders_contact_form');
        });
    }

    setupForm(id) {
        const formElement = document.getElementById(id);
        if (formElement) {
            formElement.addEventListener('submit', function() {
                Cookie.set(formElement.id + '_was_submitted', 1);
                return true;
            });
        }
    }

    checkForMessage(id) {
        if (typeof Cookie.get(id + '_was_submitted') !== 'undefined') {
            this.showElement(id + '_message');
            location.hash = '#' + id;
            Cookie.remove(id + '_was_submitted');
        }
    }

    showElement(id) {
        const messageElement = document.getElementById(id);
        messageElement.classList.remove('d-none');
    }
}

export const initFauxFormMessages = () => {
    new fauxFormMessages();
};
