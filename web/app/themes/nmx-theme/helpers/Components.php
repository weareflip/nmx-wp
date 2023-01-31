<?php
namespace App;

class Components
{
    public static function render($componentField = 'components') {

        while (the_flexible_field($componentField)) {
            self::addComponent(get_row_layout());
        }

    }

    private static function addComponent($componentName) {
        echo view('shared.components' .'.' . $componentName);
    }
}