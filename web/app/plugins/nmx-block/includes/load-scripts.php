<?php

/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function boilerplate_block_assets()
{ // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'nmx-block-style-css', // Handle.
		plugins_url('dist/blocks.style.build.css', dirname(__FILE__)), // Block style CSS.
		is_admin() ? array('wp-editor') : null, // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);

	// Register block editor script for backend.
	wp_register_script(
		'nmx-block-js', // Handle.
		plugins_url('/dist/blocks.build.js', dirname(__FILE__)), // Block.build.js: We register the block here. Built with Webpack.
		array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'), // Dependencies, defined above.
		null, // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'nmx-block-editor-css', // Handle.
		plugins_url('dist/blocks.editor.build.css', dirname(__FILE__)), // Block editor CSS.
		array('wp-edit-blocks'), // Dependency to include the CSS after it.
		null // filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script( 'nmx-block-js', 'cgbGlobal', // Array containing dynamic data for a JS Global.
		[
			'pluginDirPath' => plugin_dir_path(__DIR__),
			'pluginDirUrl'  => plugin_dir_url(__DIR__),
			// Add more data here that you want to access from `cgbGlobal` object.

			'bgHeroDefault'  => plugin_dir_url(__DIR__) . 'assets/images/bg-default.png',
			'avatarDefault'  => plugin_dir_url(__DIR__) . 'assets/images/avater-team-default.png',
			'iconCardDefault'  => plugin_dir_url(__DIR__) . 'assets/images/icon-card-default.png',
			'imageCardDefault'  => plugin_dir_url(__DIR__) . 'assets/images/image-default.png',
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'boilerplate/nmx-block',
		array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'nmx-block-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'nmx-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'nmx-block-editor-css',
		)
	);

}

// Hook: Block assets.
add_action('init', 'boilerplate_block_assets');


/**
 * Enqueue assets for frontend
 *
 * @since 1.0.0
 */
function boilerplate_blocks_frontend_assets()
{
	// Load the dismissible notice js.
	wp_enqueue_script( 'boilerplate-blocks-dismiss-defer', plugins_url('/assets/js/functions.min.js', dirname(__FILE__)), array(), null, true );

	wp_enqueue_style('boilerplate-blocks-slick', plugins_url('/assets/lib/slick/slick.css', dirname(__FILE__)), []);
	wp_enqueue_script('boilerplate-blocks-slick', plugins_url('/assets/lib/slick/slick.min.js', dirname(__FILE__)), array(), null, true);
	wp_enqueue_script('boilerplate-blocks-dismiss-defer', plugins_url('/assets/js/functions.min.js', dirname(__FILE__)), array(), null, true);
	wp_localize_script('boilerplate-blocks-dismiss-defer', 'cgbGlobal', [
		'ajax_url'      => admin_url('admin-ajax.php'),
	]);
}
add_action('wp_enqueue_scripts', 'boilerplate_blocks_frontend_assets');
