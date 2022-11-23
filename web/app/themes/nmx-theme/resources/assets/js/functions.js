(function (w, $) {


    const BoilerplateMenuMobile = () => {
        const $ctaToggle = $('.main-header .header-nav-mobile-toggle')

        $ctaToggle.click(function() {
            $(this).toggleClass('active')
            $(this).parents('.header-nav-mobile').find('.header-nav-mobile__menu').toggleClass('active')
            $('body').toggleClass('menu-mb-active')
        })
    }

    const BoilerplateSubMenuMobile = () =>{
        const $subMenu = $('.header-nav-mobile__menu ul.main-menu > li.menu-item-has-children')
        if (!$subMenu.length) return;

        $subMenu.each(function () {
            $(this).append('<span class="handle-sub"></span>')
        })

        __handleSubMenu()

        function __handleSubMenu(){
            $(document).on( 'click', '.handle-sub', function(e){
                e.preventDefault();
                e.stopPropagation();
                let el = $(this).closest('.menu-item.dropdown');
                $(el).toggleClass('li-active');
                $(el).children('.sub-menu.dropdown-menu').slideToggle();
                $(el).children('.handle-sub').toggleClass('active');
            });
        }
    }

    const BoilerplateAccordionFt = () =>{
        if ($(window).width() > 767) return;

        const $accordionFt = $('.main-footer .footer-top-right__navs-item')
        if($accordionFt.length <=0 ) return;

        $accordionFt.find('.wg-title').click(function(e){
            e.preventDefault();
            e.stopPropagation();

            $(this).toggleClass('active')
            $(this).parents('.footer-top-right__navs-item').find('.menu').slideToggle();
        })
    }

    // Document ready
    $(document).ready(function () {
        BoilerplateMenuMobile()
        BoilerplateSubMenuMobile()
        BoilerplateAccordionFt()
    });

    $(window).on('resize', function () {
        BoilerplateAccordionFt()
    })

    // Browser load completed 
    $(w).load(function () {
        
    });
})(window, jQuery);
