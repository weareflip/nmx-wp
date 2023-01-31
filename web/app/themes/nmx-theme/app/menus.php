<?php

if ( ! function_exists( 'flip_register_nav_menu' ) ) {

	function flip_register_nav_menu(){
		register_nav_menus( [
            
        ]);
	}
	add_action( 'after_setup_theme', 'flip_register_nav_menu', 0 );
}