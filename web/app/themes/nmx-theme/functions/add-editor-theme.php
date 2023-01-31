<?php

add_action('mce_css', function () {
    return \App\Assets::getAsset('editor', 'css');
});