<?php
/**
 * The template for displaying the footer
 * Contains the closing of the #content div and all content after.
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 * @package boilerplate
 */

echo "</div><!--End site wrap-->";

/**
 * boilerplate_hook_footer hook.
 * @see boilerplate_footer_template - 20
 */
do_action( 'boilerplate_hook_footer' );

wp_footer();
?>
</body>
</html>
