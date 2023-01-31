<?php

namespace App\Controllers;

use Sober\Controller\Controller;
use Theme\Options;

class App extends Controller
{

    public function siteName()
    {
        return get_bloginfo('name');
    }

    public static function title()
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
}
