<?php

add_action( 'wp_enqueue_scripts', function () {

	wp_enqueue_style( 'my-aos-style', 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css', false, '2.3.4' );
	wp_enqueue_script( 'my-aos-script', 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js', [], '2.3.4', true );

	//wp_enqueue_media();
	wp_enqueue_style( 'flip-wptoolkit-style', get_stylesheet_uri(), [], FLIP_WP_TOOLKIT_VER );
	wp_enqueue_style( 'flip-wptoolkit-site-styles', get_template_directory_uri() . '/dist/app.css', [], FLIP_WP_TOOLKIT_VER );
	wp_enqueue_script( 'flip-wptoolkit-scripts', get_template_directory_uri() . '/dist/functions.js', [
		'jquery',
		'wp-util'
	], FLIP_WP_TOOLKIT_VER, true );

	wp_localize_script( 'flip-wptoolkit-scripts', 'php_data', [
		'admin_logged' => in_array( 'administrator', wp_get_current_user()->roles ) ? 'yes' : 'no',
		'ajax_url'     => admin_url( 'admin-ajax.php' ),
		'tpd_uri'      => get_template_directory_uri(),
		'site_url'     => site_url(),
		'rest_url'     => get_rest_url(),
	] );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
} );

if ( ! function_exists( 'boilerplate_load_fonts' ) ) {
	/**
	 * Load custom font family
	 */
	function boilerplate_load_fonts() {
		wp_enqueue_style( 'sora-font', get_stylesheet_directory_uri() . '/resources/assets/fonts/Sora/stylesheet.css', false, FLIP_WP_TOOLKIT_VER );
	}
}

//add_action( 'wp_enqueue_scripts', 'boilerplate_load_fonts' );
add_action( 'admin_enqueue_scripts', 'boilerplate_load_fonts' );


add_filter( 'script_loader_src', 'rm_add_filter_script_loader_src', 10, 2 );
function rm_add_filter_script_loader_src( $src, $handle ) {
	if ( $handle === 'wp-polyfill-formdata' ) {
		$src = get_template_directory_uri() . '/dist/formdata-polyfill.js';
	}
	return $src;
}
