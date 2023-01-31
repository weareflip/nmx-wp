<?php

namespace App;

class Menu
{

    private static function buildLayer(array &$elements, $parentId = 0, $queriedObject)
    {
        $branch = [];
        foreach ($elements as &$element) {
            if ($element->menu_item_parent == $parentId) {
                $children = static::buildLayer($elements, $element->ID, $queriedObject);
                if ($children)
                    $element->wpse_children = $children;

                // Add current page flags if relevant
                switch ($element->type) {
                    case 'post_type':
                        $element->current = is_a($queriedObject, 'WP_Post') && $element->object_id == $queriedObject->ID;
                        break;

                    case 'taxonomy':
                        $element->current = is_a($queriedObject, 'WP_Term') && $element->object_id == $queriedObject->term_id;
                        break;

                    default:
                        $element->current = false;
                }

                if (isset($_SERVER["REQUEST_URI"]) && in_array(strtok($_SERVER["REQUEST_URI"],'?'), [$element->url, $element->url.'/']) ) {
                    $element->current = true;
                }


                $branch[$element->ID] = $element;
                unset($element);
            }
        }

        return $branch;
    }

    public static function get($menuID)
    {
        if(!isset($menuID)) return [];

        $items = wp_get_nav_menu_items($menuID);
        if(empty($items)) return [];

        $queriedObject = get_queried_object();
        $menu =  static::buildLayer($items, 0, $queriedObject);

        return $menu;
    }

}