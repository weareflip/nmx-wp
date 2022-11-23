<?php

/**
 * Hooks.
 */

/**
 * Allow upload json file
 */
add_filter('upload_mimes', function ($mime_types) {
	$mime_types['json'] = 'application/json'; // Adding .json extension

	return $mime_types;
}, 1);

/**
 * Header template
 * @return void
 */
add_action('boilerplate_hook_header', 'boilerplate_header_template');
function boilerplate_header_template()
{
	load_template(get_template_directory() . '/template-parts/header.php', false);
}


/**
 * Footer template
 * @return void
 */
add_action('boilerplate_hook_footer', 'boilerplate_footer_template');
function boilerplate_footer_template()
{
	load_template(get_template_directory() . '/template-parts/footer.php', false);
}

/**
 * Post loop item template
 *
 * @param Int $post_id
 *
 * @return void
 */
add_action('boilerplate_hook_post_loop_item', 'boilerplate_post_loop_item_template', 20, 2);
function boilerplate_post_loop_item_template($post_id, $index)
{
	set_query_var('post_id', $post_id);
	$v  = ($index) % 3;
	$vT = ceil($v);

	$anm = 'data-aos="fade-up" data-aos-duration="' . (($v !== 0 ? $vT : 3) * 400) . '"';
?>
	<article <?= $anm; ?> <?php post_class('item post-loop-item col-md-4') ?>>
		<?php boilerplate_post_item() ?>
	</article>
<?php
}
