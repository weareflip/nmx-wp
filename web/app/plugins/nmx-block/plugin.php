<?php
/**
 * Plugin Name: Boilerplate Block — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/weareflip/boilerplate-wp
 * Description: Boilerplate-block — is a Gutenberg plugin created via create-guten-block.
 * Author: WeAreFlip
 * Author URI: https://weareflip.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! defined( 'PLUGIN_DIR_URL' ) ) {
	define( 'PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/load-scripts.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/init.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/ajax.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/blocks.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/functions.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/default-content.php';


