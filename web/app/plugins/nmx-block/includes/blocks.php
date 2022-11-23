<?php
if (!function_exists('boilerplate_init_register_block')) {
	function boilerplate_init_register_block()
	{
		//post list slider
		register_block_type('boilerplate-blocks/grid-card-post', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'nmx-block-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'nmx-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'nmx-block-editor-css',
			'render_callback' => 'boilerplate_grid_card_post_render',
			'attributes'      => array(
				'pagination'    => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'carousel'    => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'slidesToShow'    => array(
					'type'    => 'number',
					'default' => 3,
				),
				'slidesToScroll'    => array(
					'type'    => 'number',
					'default' => 1,
				),
				'arrows'    => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'dots'    => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'autoplay'    => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'infinite'    => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'orderpost'     => array(
					'type'    => 'string',
					'default' => 'date/DESC'
				),
				'heading'     => array(
					'type'    => 'string',
					'default' => 'Related posts'
				),
				'post_type'     => array(
					'type'    => 'string',
					'default' => 'post'
				),
				'listCatePost'      => array(
					'type'    => 'array',
					'default' => []
				),
				'posts_per_page'    => array(
					'type'    => 'number',
					'default' => 9,
				),
				'gap_row'    => array(
					'type'    => 'number',
					'default' => 40,
				),
				'gap_col'    => array(
					'type'    => 'number',
					'default' => 40,
				),
				'columns'    => array(
					'type'    => 'number',
					'default' => 3,
				),
				'className'    => array(
					'type' => 'string',
				),
			),
		));


		register_block_type( 'boilerplate-blocks/boilerplate-post-categories', array(
			'style'           => 'nmx-block-style-css',
			'editor_script'   => 'nmx-block-js',
			'editor_style'    => 'nmx-block-editor-css',
			'render_callback' => 'boilerplate_post_categories_template',

			'attributes'      => array(
				'bgColor'=> array(
				  'type'      => 'string',
				  'default'   => '#395169',
			   ),
			   'color'=> array(
					'type'      => 'string',
					'default'   => '#fff',
				),
			)
		) );
	}
}

add_action('init', 'boilerplate_init_register_block');
