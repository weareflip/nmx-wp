<?php
// Fields on the full toolbar...
//
// formatselect, bold, italic, bullist, numlist, blockquote, alignleft, aligncenter, alignright
// link, unlink, wp_more, spellchecker, fullscreen, wp_adv
// strikethrough, hr, forecolor, pastetext, removeformat, charmap, outdent, indent, undo, redo, wp_help

add_filter('acf/fields/wysiwyg/toolbars' , function($bars) {
    $bars['Limited'] = [];
    $bars['Limited'][1] = ['bold' , 'italic' , 'underline', 'alignleft', 'aligncenter', 'alignright', 'styleselect', 'removeformat'];
    return $bars;
});

add_filter('acf/fields/wysiwyg/toolbars' , function($bars) {
	array_push($bars['Full'][1], 'styleselect');
	return $bars;
});

add_action('admin_head', function(){
    echo '<style type="text/css">div[data-toolbar="limited"] iframe { min-height: 140px; height: 140px !important }</style>';
});