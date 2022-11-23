<?php

/**
 * @param WP_Query $the_query
 */
function boilerplate_query_post($the_query)
{
	if ($the_query->have_posts()) {
		while ($the_query->have_posts()) {
			$the_query->the_post();
			boilerplate_grid_card_post_item();
		}
	} else {
		echo '<div class="text-center">No posts found!</div>';
	}
	/* Restore original Post Data */
	wp_reset_postdata();
}



/**
 * @param $enable_pagination
 * @param $the_query
 */

function boilerplate_pagination_render($enable_pagination, $the_query)
{
	if ($enable_pagination && $the_query->max_num_pages > 1) {
		echo '<div class="navigation-wrap">';
		boilerplate_the_posts_navigation([
			'prev_text' => '<span class="__prev arrow-pagination"></span>',
			'next_text' => '<span class="__next arrow-pagination"></span>',
			'total'     => $the_query->max_num_pages,
			'add_args'  => [],
		], false, $the_query);
		echo '</div>';
	}
}

function boilerplate_post_categories_template($atts, $content){

    $param = shortcode_atts([
		'bgColor'       => '',
        'color'       => '',
	], $atts);


    $bgColor     = $param['bgColor'] ? $param['bgColor'] : "#f3e8da";
	$color       = $param['color'] ? $param['color'] : "#f3e8da";
    ob_start();
    ?>
	
		<?php $categories = get_the_category(); ?>
		<?php if(!empty($categories)): ?>
			<?php 
				// echo "<pre>";
				// echo print_r($categories);
				// echo "</pre>";
			?>
			<div class="boilerplate-post-categories-block"> 
				<div class="boilerplate-post-categories"> 
					<?php foreach( $categories as $category):  ?>
						<div class="item-cate"> 
							<span> <?php echo $category->name ?> </span>
						</div>
				    <?php endforeach; ?>		
				</div>
   			</div>
		<?php endif; ?>	

   <?php 
    wp_reset_postdata();
	return ob_get_clean();	
} ?>