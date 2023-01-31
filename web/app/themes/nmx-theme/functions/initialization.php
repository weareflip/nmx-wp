<?php
/*
 * Perform Wordpress Initialization Tasks
 */
add_action('init', function(){
	// $url_parts = parse_url(env('APP_URL'));
	// define('APP_DOMAIN', $url_parts['host']);

    if ( function_exists('acf_add_options_page') ) {
        acf_add_options_page([
            'page_title' => 'Global Options',
            'icon_url' => 'dashicons-admin-site'
        ]);
    }
});

add_theme_support( 'post-thumbnails' );
