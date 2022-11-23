<?php

/**
 * Header template
 */

$classes = [
    'main-header',
];
$cta_button = __get_field('header_cta_button', 'option');
?>
<header id="site-header" class="<?php echo implode(' ', $classes) ?>">
    <div class="header-inner">
        <div class="header-inner__item header-logo">
            <?= get_theme_mod('custom_logo') ? get_custom_logo() : '<img src="http://via.placeholder.com/215x54?text=logo" class="boilerplate-logo" alt="logo" />'; ?>
        </div>

        <div class="header-inner__item header-nav-main">
            <?php
            if (has_nav_menu('main-menu')) {
                wp_nav_menu([
                    'theme_location'  => 'main-menu',
                    'menu_class'      => 'main-menu',
                    'container_class' => 'menu-container',
                    'items_wrap'      => '<ul id="%1$s" class="%2$s navbar-nav">%3$s</ul>',
                    'bootstrap'       => true
                ]);
            }
            ?>
        </div>

        <div class="header-inner__item header-right">
            <?php if (!empty($cta_button['title'])) { ?>
                <a class="header-cta" href="<?php echo $cta_button['url'] ?>" target="<?php echo $cta_button['target'] ?>"> <?php echo $cta_button['title'] ?> </a>
            <?php } ?>

            <div class="header-nav-mobile">
                <div class="header-nav-mobile-toggle">
                    <span></span>
                </div>

                <div class="header-nav-mobile__menu">
                    <?php
                    if (has_nav_menu('main-menu')) {
                        wp_nav_menu([
                            'theme_location'  => 'main-menu',
                            'menu_class'      => 'main-menu',
                            'container_class' => 'menu-container',
                            'items_wrap'      => '<ul id="%1$s" class="%2$s navbar-nav">%3$s</ul>',
                            'bootstrap'       => true
                        ]);
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</header> <!-- #site-header -->