<?php

add_action('init', function () {
    // Register Custom Post Type type => Equipment
    // Set UI labels for Custom Post Type
    $custom_post_type = 'equipment';
    $singular = __('Equipment', 'nmx');
    $plural = __('Equipment', 'nmx');
    $icon = 'dashicons-archive';
    $slug = __('equipment', 'nmx');

    $labels = [
        'name' => ucfirst($plural),
        'singular_name' => ucfirst($singular),
        'menu_name' => ucfirst($plural),
        'parent_item_colon' => sprintf(__('Parent %s:', 'nmx'), $singular),
        'all_items' => 'All ' . ucfirst($plural),
        'view_item' => sprintf(__('View %s', 'nmx'), $singular),
        'add_new_item' => sprintf(__('Add New %s', 'nmx'), $singular),
        'add_new' => sprintf(__('Add New', '%s', 'nmx'), $singular),
        'edit_item' => sprintf(__('Edit %s', 'nmx'), $singular),
        'update_item' => sprintf(__('Update %s', 'nmx'), $singular),
        'search_items' => sprintf(__('Search %s', 'nmx'), $singular),
        'not_found' => sprintf(__('No %s found.', 'nmx'), $singular),
        'not_found_in_trash' => sprintf(__('No %s found in Trash.', 'nmx'), $singular),
    ];

    // Set other options for Custom Post Type
    $args = [
        'label' => $plural,
        'description' => $plural,
        'labels' => $labels,
        'menu_icon' => $icon,
        'menu_position' => 20,
        'rewrite' => ['slug' => $slug, 'nmx' => false],
        'supports' => ['title', 'editor', 'thumbnail'],
        'taxonomies' => [],
        'capability_type' => 'page',
        'can_export' => true,
        'exclude_from_search' => false,
        'has_archive' => false,
        'hierarchical' => true,
        'public' => true,
        'publicly_queryable' => true,
        'show_in_admin_bar' => true,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'show_in_rest' => true,
        'show_ui' => true,
    ];

    // Registering your Custom Post Type
    register_post_type($custom_post_type, $args);
    flush_rewrite_rules(false);

    // Register Custom Post Type type => Categories
    // Set UI labels for Custom Post Type
    $custom_post_type = 'category';
    $singular = __('Categories', 'nmx');
    $plural = __('Categories', 'nmx');
    $icon = 'dashicons-portfolio';
    $slug = __('buy', 'nmx');

    $labels = [
        'name' => ucfirst($plural),
        'singular_name' => ucfirst($singular),
        'menu_name' => ucfirst($plural),
        'parent_item_colon' => sprintf(__('Parent %s:', 'nmx'), $singular),
        'all_items' => 'All ' . ucfirst($plural),
        'view_item' => sprintf(__('View %s', 'nmx'), $singular),
        'add_new_item' => sprintf(__('Add New %s', 'nmx'), $singular),
        'add_new' => sprintf(__('Add New', '%s', 'nmx'), $singular),
        'edit_item' => sprintf(__('Edit %s', 'nmx'), $singular),
        'update_item' => sprintf(__('Update %s', 'nmx'), $singular),
        'search_items' => sprintf(__('Search %s', 'nmx'), $singular),
        'not_found' => sprintf(__('No %s found.', 'nmx'), $singular),
        'not_found_in_trash' => sprintf(__('No %s found in Trash.', 'nmx'), $singular),
    ];

    // Set other options for Custom Post Type
    $args = [
        'label' => $plural,
        'description' => $plural,
        'labels' => $labels,
        'menu_icon' => $icon,
        'menu_position' => 20,
        'rewrite' => ['slug' => $slug, 'nmx' => false],
        'supports' => ['title', 'editor', 'thumbnail'],
        'taxonomies' => [],
        'capability_type' => 'page',
        'can_export' => true,
        'exclude_from_search' => false,
        'has_archive' => false,
        'hierarchical' => true,
        'public' => true,
        'publicly_queryable' => true,
        'show_in_admin_bar' => true,
        'show_in_menu' => true,
        'show_in_nav_menus' => true,
        'show_in_rest' => true,
        'show_ui' => true,
    ];

    // Registering your Custom Post Type
    register_post_type($custom_post_type, $args);
    flush_rewrite_rules(false);
});