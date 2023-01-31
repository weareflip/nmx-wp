import $ from 'jquery';

class EquipmentSearch {
  constructor(searchQuery = '#equipment-search', resultsQuery = '#equipment-results') {
    this.searchElement = $(searchQuery);
    this.resultsElement = $(resultsQuery);
    this.initialise();
  }

  initialise() {
    if (this.searchElement.length === 0 || this.resultsElement.length === 0) return;

    let throttleTimer = null;

    for (let element of this.searchElement) {
      element.addEventListener('keyup', event => {
        if (throttleTimer) clearTimeout(throttleTimer);

        throttleTimer = setTimeout(() => {
          $.get(`?q=${encodeURI(event.target.value)}`).then((items) => {
            if (items.length === 0) {
              $(this.resultsElement).html('<p class="p-5 text-center w-100">No results found</p>');
              return;
            }

            $(this.resultsElement).html('');

            $(items).each((index, item) => {
              $(this.resultsElement).append(`
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="category-card category-card--big">
                        <div class="category-card__image">
                            <img src="${item.thumbnail || '/media/images/image-unavailable.png'}" />
                        </div>

                        <div class="category-card__text flex-column">
                            <div>
                                ${item.title}
                            </div>

                            <a href="${item.url}" class="button">
                                View details
                            </a>
                        </div>
                    </div>
                </div>
              `);
            });
          });
        }, 300);
      });
    }
  }
}

export const initEquipmentSearch = (query) => {
  new EquipmentSearch(query);
};
