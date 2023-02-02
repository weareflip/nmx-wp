<?php

namespace App\Controllers;

use Sober\Controller\Controller;
use Theme\Options;
use App\Menu;

class App extends Controller
{

    public function siteName()
    {
        return get_bloginfo('name');
    }

    public function title()
    {
        if (is_home()) {
            if ($home = get_option('page_for_posts', true)) {
                return get_the_title($home);
            }
            return __('Latest Posts', 'follow');
        }
        if (is_archive()) {
            return get_the_archive_title();
        }
        if (is_search()) {
            return sprintf(__('Search Results for %s', 'follow'), get_search_query());
        }
        if (is_404()) {
            return __('Not Found', 'follow');
        }

        return get_the_title();
    }


    public function infomation_global()
    {
        // Global Options
        $infomation_global = Options::get([
            'linkedin_url',
            'facebook_url',
            'twitter_url',
            'instagram_url',
            'youtube_url',
            'phone_number',
            'mobile_number'
        ]);

        return $infomation_global;
    }

    public function main_menu_items()
    {
        return Menu::get(2);
    }

    public function footer_menu_items()
    {
        return Menu::get(3);
    }

    public function buy_categories()
    {
        $args = array(
            'numberposts' => -1,
            'post_type'   => 'category',
            'orderby'    => 'menu_order',
            'order' => 'ASC',
        );

        $posts = get_posts($args);
        return $posts;
    }

    public function equiment_category()
    {
        $args = array(
            'numberposts' => -1,
            'post_type'   => 'equipment',
            'orderby'    => 'menu_order',
            'order' => 'ASC',
        );

        $posts = get_posts($args);
        $result = [];
        if ($posts) {
            foreach ($posts as $index => $value) {
                $category_equiment = get_field('categories', $value->ID);
                if ($category_equiment[0]->ID == get_the_ID()) {
                    $result[$index]['title'] = $value->post_title;
                    $result[$index]['media'] = get_the_post_thumbnail_url($value->ID, 'full');
                    $result[$index]['url'] = get_the_permalink($value->ID);
                }
            }
        }
        return $result;
    }

    public function equipment()
    {
        $gallery = get_field('gallery', get_the_ID());
        $documentation = get_field('documentation', get_the_ID());
        $specifications = get_field('specifications', get_the_ID());
        $result = (object) [
            'id' => get_the_ID(),
            'title' => get_the_title(),
            'gallery' => $gallery,
            'specifications' => $specifications,
            'documentation' => $documentation,
        ];

        return $result;
    }

    public function main_category()
    {
        $category_equiment = get_field('categories', get_the_ID());
        if ($category_equiment) return $category_equiment[0];
    }
}
