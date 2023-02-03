<?php

namespace App;

use Roots\Sage\Container;
use Roots\Sage\Assets\JsonManifest;
use Roots\Sage\Template\Blade;
use Roots\Sage\Template\BladeProvider;

/**
 * Theme assets
 */
add_action('wp_enqueue_scripts', function () {
    // Localises the registered script with data for javascript variables
    wp_localize_script(
        'main',
        'nmx_ajax',
        [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('ajax-nonce'),
        ]
    );
}, 100);;


/**
 * Updates the `$post` variable on each iteration of the loop.
 * Note: updated value is only available for subsequently loaded views, such as partials
 */
add_action('the_post', function ($post) {
    sage('blade')->share('post', $post);
});

/**
 * Setup Sage options
 */
add_action('after_setup_theme', function () {
    /**
     * Add JsonManifest to Sage container
     */
    sage()->singleton('sage.assets', function () {
        return new JsonManifest(config('assets.manifest'), config('assets.uri'));
    });

    /**
     * Add Blade to Sage container
     */
    sage()->singleton('sage.blade', function (Container $app) {
        $cachePath = config('view.compiled');
        if (!file_exists($cachePath)) {
            wp_mkdir_p($cachePath);
        }
        (new BladeProvider($app))->register();
        return new Blade($app['view']);
    });

    /**
     * Create @asset() Blade directive
     */
    sage('blade')->compiler()->directive('asset', function ($asset) {
        return "<?= " . __NAMESPACE__ . "\\asset_path({$asset}); ?>";
    });


    /**
     * Create @excerpt Blade directive
     */
    sage('blade')->compiler()->directive(
        'excerpt',
        function () {
            return '<?php the_excerpt(); ?>';
        }
    );

    /**
     * Create @title Blade directive
     */
    sage('blade')->compiler()->directive(
        'title',
        function () {
            return '<?php the_title(); ?>';
        }
    );

    /**
     * Create @permalink Blade directive
     */
    sage('blade')->compiler()->directive(
        'permalink',
        function () {
            return '<?php the_permalink(); ?>';
        }
    );

    /**
     * Create @content Blade directive
     */
    sage('blade')->compiler()->directive(
        'content',
        function () {
            return '<?php the_content(); ?>';
        }
    );

    /**
     * Create @skeletonstart Blade directive
     */
    sage('blade')->compiler()->directive(
        'skeletonstart',
        function () {
            $post_per_page = get_option('posts_per_page');
            return '<?php for ( $i = 0; $i < ' . $post_per_page . '; $i++ ) : ?>';
        }
    );

    /**
     * Create @skeletonend Blade directive
     */
    sage('blade')->compiler()->directive(
        'skeletonend',
        function () {
            return '<?php endfor; ?>';
        }
    );
});
