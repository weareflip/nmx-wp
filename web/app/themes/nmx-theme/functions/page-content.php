<?php

add_action('add_meta_boxes', function() {
    remove_post_type_support( 'page', 'editor');
});