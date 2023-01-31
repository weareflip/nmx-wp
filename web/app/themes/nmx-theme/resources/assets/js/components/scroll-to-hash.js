import $ from "jquery";
import zenscroll from 'zenscroll';

class ScrollToHash {
  constructor() {
    if (window.location.hash) {
      $(document).scroll(function (event) {
        event.preventDefault();
        $(document).unbind('scroll');
      });

      this.scrollToHash(window.location.hash);
    }

    $("a[href^='#']").click((event) => {
      event.preventDefault();
      this.scrollToHash(event.target.getAttribute("href"));
    });
  }

  scrollToHash(hash) {
    if (hash === null) {
      return;
    }

    const element = document.querySelector('[name="' + hash.replace(/^#/, '') + '"]');

    if (element) {
      zenscroll.to(element);
    }

    if (history.pushState) {
      history.pushState(null, null, hash);
    }
    else {
      location.hash = hash;
    }
  }
}

export const initScrollToHash = () => {
  new ScrollToHash();
};
