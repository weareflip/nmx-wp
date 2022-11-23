<?php

/**
 * The template for displaying all single posts
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * @package boilerplate
 */

get_header();
?>
<main id="primary" class="site-main container">
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <div class="entry-content">
            <?php
            the_content(sprintf(wp_kses( /* translators: %s: Name of current post. Only visible to screen readers */__('Continue reading<span class="screen-reader-text"> "%s"</span>', 'boilerplate'), array(
                'span' => array(
                    'class' => array(),
                ),
            )), wp_kses_post(get_the_title())));
            wp_link_pages(array(
                'before' => '<div class="page-links">' . esc_html__('Pages:', 'boilerplate'),
                'after'  => '</div>',
            ));
            ?>
        </div><!-- .entry-content -->
    </article><!-- #post-<?php the_ID(); ?> -->
</main><!-- #main -->
<?php
get_footer();
