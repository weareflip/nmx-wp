<?php
add_action( 'acf/init', 'boilerplate_acf_init' );
function boilerplate_acf_init() {
	if ( function_exists( 'acf_add_options_page' ) ) {
		if ( current_user_can( 'administrator' ) ):
			acf_add_options_page( array(
				'page_title'  => __( 'Theme Options', 'boilerplate' ),
				'menu_title'  => __( 'Theme Options', 'boilerplate' ),
				'menu_slug'   => 'theme-options',
				'parent_slug' => 'themes.php',
			) );
		endif;
	}
}

add_filter( 'acf/settings/save_json', 'boilerplate_acf_json_save_point' );
function boilerplate_acf_json_save_point( $path ) {
	// update path
	$path = get_stylesheet_directory() . '/resources/functions/acf-options';

	// return
	return $path;
}

add_filter( 'acf/settings/load_json', 'boilerplate_acf_json_load_point' );
function boilerplate_acf_json_load_point( $paths ) {
	// remove original path (optional)
	unset( $paths[0] );
	// append path
	$paths[] = get_stylesheet_directory() . '/resources/functions/acf-options';

	// return
	return $paths;
}
