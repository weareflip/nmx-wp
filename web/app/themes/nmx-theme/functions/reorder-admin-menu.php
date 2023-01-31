<?php
use App\AdminMenu;
add_action('admin_menu', function(){
	/*
	 * Remove Menus
	 */
	$user = wp_get_current_user();
	$remove = [
		'Posts',
		'Comments',
		'Appearance',
		'Plugins',
		'Tools',
	];
	if (! in_array('developer', $user->roles)) {
		$remove[] = 'Custom Fields';
		$remove[] = 'Settings';
	}
	// AdminMenu::remove($remove);
	AdminMenu::removeSubPages([
		['Dashboard', 'Updates'],
	]);
	/*
	 * Add Menus Menu
	 */
	add_menu_page(
		'Menus',
		'Menus',
		'edit_theme_options',
		'nav-menus.php',
		'',
		'dashicons-editor-justify',
		40);
}, 100);
