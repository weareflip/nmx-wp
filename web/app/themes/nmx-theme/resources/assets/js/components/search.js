jQuery(function ($) {
    "use strict";
    const initEquipmentSearchNew = () => {
        const searchElement = $('#equipment-search');
        const resultsElement = $('#equipment-results');
        if (searchElement.length === 0 || resultsElement.length === 0) return;

        function __ajax_filter(val = {}) {
            try {
                $.ajax({
                    type: "post",
                    url: nmx.ajax_url,
                    dataType: "json",
                    data: {
                        ...{ action: "equipment_search" },
                        ...val,
                    },
                    success: function (data) {
                        resultsElement.html(data.items)
                    }
                });

            } catch (e) {
                console.log(e);
            }
        };

        searchElement.keyup(function (event) {
            let q = event.target.value;
            let id = $('#id-category').val();
            __ajax_filter({ q, id });
        })

    };

    initEquipmentSearchNew();

})


