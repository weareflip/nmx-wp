export const initPardotIframeHandling = () => {
  window.addEventListener('message', receiveMessage, false);

  function receiveMessage(event) {
    // Pardot sends its own form heights, however it doesn't specify for what form.
    // Messages from our custom script are objects, theres is a simple number.
    if (!('data' in event) || typeof event.data !== 'object' || !('url' in event.data)) {
      return;
    }

    const iframeElement = document.querySelector(`iframe[src="${event.data.url}"]`);

    if (iframeElement) {
      iframeElement.classList.add('pardot-height-adjusted');
      iframeElement.style.height = `${event.data.height}px`;
    } else {
      console.error(`Could not find iframe with url: '${event.data.url}'`)
    }
  }
}
