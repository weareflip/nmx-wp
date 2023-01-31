<?php
	add_action('init', function(){
		global $wp_roles;
		$admin = $wp_roles->get_role('administrator');
		$wp_roles->add_role('developer', 'Developer', $admin->capabilities);
	});