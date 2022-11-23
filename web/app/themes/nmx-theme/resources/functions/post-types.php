<?php

/**
 * Use this file to register any custom post types you wish to create.
 */
if (!function_exists('boilerplate_create_custom_post_type')) {
	// Register Custom Post Type
	function boilerplate_create_custom_post_type()
	{
		
	}

	add_action('init', 'boilerplate_create_custom_post_type', 0); // Register Custom Taxonomy
}

if (!function_exists('boilerplate_create_custom_taxonomy')) {
	function boilerplate_create_custom_taxonomy()
	{
		
	}

	add_action('init', 'boilerplate_create_custom_taxonomy', 0);
}
