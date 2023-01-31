<?php
use App\Icons;

add_filter('acf/load_field/name=icon', function($field) {
    if(!is_admin() || $field['type'] !== 'select') return $field;
    if(!function_exists('get_current_screen')) return $field;
    $screen = get_current_screen();
    if(!$screen || $screen->id == 'acf-field-group') return $field;

    $icons = Icons::get();
    $field['choices'] = $icons;

    return $field;
});