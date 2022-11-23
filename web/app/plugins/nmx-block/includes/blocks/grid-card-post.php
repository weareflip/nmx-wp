<?php

// render grid card post block
function boilerplate_gridaszxc_card_post_render($atts, $content)
{
	$a = shortcode_atts([
		'posts_per_page' 	=> 9,
		'columns'     		=> 3,
		'orderpost' 		=> 'date/DESC',
		'heading' 		    => 'Related posts',
		'post_type'         => 'post',
		'listCatePost'      => [],
		'pagination' 		=> true,
		'carousel' 		    => false,
		'slidesToShow' 	    => 3,
		'slidesToScroll' 	=> 1,
		'arrows' 		    => true,
		'dots' 		        => false,
		'autoplay' 		    => false,
		'infinite' 		    => true,
		'gap_col'  			=> 40,
		'gap_row'  			=> 40,
		'className'     	=> '',
	], $atts);

	$orderby = explode("/", $a['orderpost'])[0];
	$order   = explode("/", $a['orderpost'])[1];
	$paged   = (get_query_var('paged')) ? get_query_var('paged') : 1;
	$idCate  = array();

	ob_start();
	foreach($a['listCatePost'] as $value){
		$cat_id = get_cat_ID ( $value );
		array_push($idCate, $cat_id);
	}

	if($a['post_type'] == 'post'){
		$query = array(
			'post_type'           => $a['post_type'],
			'posts_per_page'      => $a['posts_per_page'],
			'orderby' => $orderby,
			'order' => $order,
			'paged' => $paged,
			'category__in' => $idCate
		);
	}else{
		$query = array(
			'post_type'           => $a['post_type'],
			'posts_per_page'      => $a['posts_per_page'],
			'orderby' => $orderby,
			'order' => $order,
			'paged' => $paged,
		);
	}
	$the_query = new WP_Query($query); ?>

	<?php
		$data   = '';
		$slider = $a['carousel'] == true ? 'boilerplate-grid-card-post-block__slider' : '';
		$block  = $a['carousel'] == true ? 'sliders' : 'grids';
		if($a['carousel'] == true){
			$data = array(
				'slidesToShow'   => $a['slidesToShow'],
				'slidesToScroll' => $a['slidesToScroll'],
				'arrows'         => $a['arrows'],
				'dots'           => $a['dots'],
				'autoplay'       => $a['autoplay'],
				'infinite'       => $a['infinite']
			);

			$a['columns'] = '';
			$a['gap_row'] = '';
			$a['gap_col'] = '';
		}
	?>
	<div class="<?= implode(' ', ['boilerplate-grid-card-post-block', $block, $a['className']]) ?>" style="--col: <?= $a['columns'] ?>;--gap-row: <?= $a['gap_row'] ?>px;--gap-col: <?= $a['gap_col'] ?>px" data-enablePagination="<?= $a['pagination'] ?>" data-paged="<?= $paged ?>" data-query='<?= json_encode($query) ?>'>
		<?php if($a['heading']): ?>
			<h2 class="boilerplate-grid-card-post-block__heading" style> <?php echo $a['heading'] ?> </h2>
		<?php endif; ?>

		<div class="boilerplate-grid-card-post-wrap <?php echo $slider ?>" data-boilerplate-slider=<?php echo json_encode($data) ?> >
			<?php boilerplate_query_post($the_query); ?>
		</div>

		<?php if($a['carousel'] == false): ?>
			<div class="boilerplate-pagination-wrap">
				<?php boilerplate_pagination_render($a['pagination'], $the_query); ?>
			</div>
		<?php endif; ?>
	</div>
<?php
	return ob_get_clean();
}

function boilerplate_grid_card_post_item()
{
?>
	<div class="post-card-item">
		<div class="post-card-item-image">
			<a href="<?= get_permalink() ?>">
				<?php
				if (has_post_thumbnail()) {
					the_post_thumbnail('post-card-size', array(
						'srcset' => wp_get_attachment_image_url(get_post_thumbnail_id(), 'medium') . ' 300w,' . wp_get_attachment_image_url(get_post_thumbnail_id(), 'post-card-size') . ' 800w',
						'alt' => get_the_title()
					));
				}
				?>
			</a>
		</div>
		<div class="post-card-item-content">
			<h5 class="post-card-item-title"><a href="<?= get_permalink() ?>"><?= get_the_title() ?></a></h5>
			<div class="post-card-item-excerpt" style="-webkit-box-orient: vertical; ">
				<?= wp_trim_words( get_the_excerpt(), 35 ) ?>
			</div>
			<a href="<?= get_permalink() ?>" class="post-card-item-link">Learn more →</a>
		</div>
	</div>
<?php
}
