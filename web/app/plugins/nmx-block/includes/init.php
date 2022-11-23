<?php

/**
 * Blocks Initializer
 *
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Adds the boilerplate Blocks block category.
 *
 * @param array $categories Array of categories for block types.
 * @return array Updated block categories.
 */
function boilerplate_blocks_category($categories)
{
	return array_merge(
		array(
			array(
				'slug'  => 'boilerplate-blocks',
				'title' => 'boilerplate Blocks',
			),
		),
		$categories
	);
}

add_filter('block_categories_all', 'boilerplate_blocks_category', 10, 2 );


function boilerplate_colour_palette_default() {
	add_theme_support( 'editor-color-palette', array(
		array(
			'name'  => 'Primary Colour',
			'slug'  => 'primary-colour',
			'color' => '#0D99FF',
		),
		array(
			'name'  => 'Secondary Colour',
			'slug'  => 'secondary-colour',
			'color' => '#3C49DC',
		),
		array(
			'name'  => 'White Colour',
			'slug'  => 'white-colour',
			'color' => '#FFF',
		),
		array(
			'name'  => 'Black Colour',
			'slug'  => 'black-colour',
			'color' => '#000',
		)
	) );
}

add_action( 'after_setup_theme', 'boilerplate_colour_palette_default' );

add_filter('excerpt_allowed_wrapper_blocks', 'boilerplate_excerpt_allowed_wrapper_blocks');
function boilerplate_excerpt_allowed_wrapper_blocks($allowed_wrapper_blocks)
{
	$allowed_wrapper_blocks[] = 'boilerplate-blocks/boilerplate-hero';
	$allowed_wrapper_blocks[] = 'boilerplate-blocks/boilerplate-container';
	return $allowed_wrapper_blocks;
}


function boilerplate_functions_block () {
	$array_block = [
		'grid-card-post'
	];

	foreach($array_block as $filename){
		require_once plugin_dir_path( __FILE__ ) . 'blocks/'.$filename.'.php';
	} 
}

add_action( 'init', 'boilerplate_functions_block' );