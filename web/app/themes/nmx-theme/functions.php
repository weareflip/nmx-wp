<?php

if ( ! defined( 'FLIP_WP_TOOLKIT_VER' ) ) {
	define( 'FLIP_WP_TOOLKIT_VER', WP_DEBUG ? rand() : '0.5.0' );
}

require get_template_directory() . '/resources/functions/reset.php';
require get_template_directory() . '/resources/functions/initialize.php';
require get_template_directory() . '/resources/functions/assets.php';
require get_template_directory() . '/resources/functions/blocks.php';
require get_template_directory() . '/resources/functions/acf-options.php';
require get_template_directory() . '/resources/functions/menus.php';
require get_template_directory() . '/resources/functions/widgets.php';
require get_template_directory() . '/resources/functions/post-types.php';
require get_template_directory() . '/resources/functions/meta.php';
require get_template_directory() . '/resources/functions/images.php';
require get_template_directory() . '/resources/functions/helpers.php';
require get_template_directory() . '/resources/functions/template-tags.php';
require get_template_directory() . '/resources/functions/template-func.php';
require get_template_directory() . '/resources/functions/hooks.php';
require get_template_directory() . '/resources/functions/mega-menu.php';
