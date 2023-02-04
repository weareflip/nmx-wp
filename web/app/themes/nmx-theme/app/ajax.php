<?php


// Register get_posts
add_action('wp_ajax_equipment_search', 'search_function');
add_action('wp_ajax_nopriv_equipment_search', 'search_function');

function search_function()
{
    $q = isset($_POST['q']) ? $_POST['q'] : '';
    $id_cat = isset($_POST['id']) ? $_POST['id'] : '';

    $query = array(
        'post_type' => 'equipment',
        'post_status' => 'publish',
        'posts_per_page' => -1
    );

    if ($q != '') {
        $query['s'] = $q;
    }

    $the_query  = new WP_Query($query);

    if ($the_query->have_posts()) {
        ob_start();
        while ($the_query->have_posts()) {
            $the_query->the_post();
            $id = get_the_ID();
            $id_cate = get_field('categories', $id);
            if ($id_cate[0]->ID == $id_cat) {
                $featured_img_url = get_the_post_thumbnail_url($id, 'full');
?>
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="category-card category-card--big">
                        <div class="category-card__image">
                            <img src="<?= $featured_img_url ?>" />
                        </div>

                        <div class="category-card__text flex-column">
                            <div>
                                <?= get_the_title() ?>
                            </div>

                            <a href="<?= get_permalink() ?>" class="button">
                                View details
                            </a>
                        </div>
                    </div>
                </div>
<?php
            }
        }
    } else {
        echo '<p class="p-5 text-center w-100">No results found</p>';
    }

    $items = ob_get_clean();

    ob_start();
    wp_send_json(
        [
            'items' => $items
        ]
    );
    wp_die();
}
