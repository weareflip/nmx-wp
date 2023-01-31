<?php

function setDefaultSEOTitle($value, $post_id, $field) {
    return empty($value) ? get_the_title() : $value;
}

add_filter('acf/load_value/name=seo_title', 'setDefaultSEOTitle', 10, 3);
