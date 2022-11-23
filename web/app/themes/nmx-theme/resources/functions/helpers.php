<?php

/**
 * Helpers
 */

function dump( $data ) {
	print "<pre style=' background: rgba(0, 0, 0, 0.1); margin-bottom: 1.618em; padding: 1.618em; overflow: auto; max-width: 100%; '>==========================\n";
	if ( is_array( $data ) ) {
		print_r( $data );
	} elseif ( is_object( $data ) ) {
		var_dump( $data );
	} else {
		var_dump( $data );
	}
	print "===========================</pre>";
}

if ( ! function_exists( 'export_acf_from_local_field' ) ) {
	function export_acf_from_local_field() {
		$groups = acf_get_local_field_groups();
		$json   = [];

		foreach ( $groups as $group ) {
			// Fetch the fields for the given group key
			$fields = acf_get_local_fields( $group['key'] );

			// Remove unecessary key value pair with key "ID"
			unset( $group['ID'] );

			// Add the fields as an array to the group
			$group['fields'] = $fields;

			// Add this group to the main array
			$json[] = $group;
		}

		$json = json_encode( $json, JSON_PRETTY_PRINT );

		// Write output to file for easy import into ACF.
		// The file must be writable by the server process. In this case, the file is located in
		// the current theme directory.
		$file = get_template_directory() . '/acf-import.json';
		file_put_contents( $file, $json );

		return true;
	}
}

if ( ! function_exists( 'boilerplate_svg_icon' ) ) {

	/**
	 * @param $icon
	 *
	 * @return mixed|string
	 */
	function boilerplate_svg_icon( $icon ) {
		$icons = require( __DIR__ . '/svg.php' );

		return $icons[ $icon ] ? $icons[ $icon ] : 'Icon not support!';
	}
}

if ( ! function_exists( 'boilerplate_the_posts_navigation' ) ) {
	function boilerplate_the_posts_navigation( $args = array(), $base = false, $query = false ) {
		$args = wp_parse_args( $args, array(
			'prev_text'          => __( 'Older posts' ),
			'next_text'          => __( 'Newer posts' ),
			'screen_reader_text' => __( 'Posts navigation' ),
			'aria_label'         => __( 'Posts' ),
			'class'              => 'posts-navigation',
		) );

		$wp_query = $query ? $query : $GLOBALS['wp_query'];

		// Don't print empty markup if there's only one page.
		if ( $wp_query->max_num_pages < 2 ) {
			return;
		}
		$paged        = get_query_var( 'paged' ) ? intval( get_query_var( 'paged' ) ) : 1;
		$pagenum_link = html_entity_decode( get_pagenum_link() );
		if ( $base ) {
			$orig_req_uri           = $_SERVER['REQUEST_URI'];
			$_SERVER['REQUEST_URI'] = $base;
			$pagenum_link           = get_pagenum_link( $paged - 1 );
			$_SERVER['REQUEST_URI'] = $orig_req_uri;
		}

		$query_args = array();
		$url_parts  = explode( '?', $pagenum_link );
		if ( isset( $url_parts[1] ) ) {
			wp_parse_str( $url_parts[1], $query_args );
		}

		$pagenum_link = remove_query_arg( array_keys( $query_args ), $pagenum_link );
		$pagenum_link = trailingslashit( $pagenum_link ) . '%_%';
		$format       = $GLOBALS['wp_rewrite']->using_index_permalinks() && ! strpos( $pagenum_link, 'index.php' ) ? 'index.php/' : '';
		$format       .= $GLOBALS['wp_rewrite']->using_permalinks() ? user_trailingslashit( 'page/%#%', 'paged' ) : '?paged=%#%';

		// Set up paginated links.
		$links = paginate_links( array(
			'base'      => $pagenum_link,
			'format'    => $format,
			'total'     => $wp_query->max_num_pages,
			'current'   => $paged,
			'mid_size'  => 1,
			'add_args'  => array_map( 'urlencode', $query_args ),
			'prev_text' => $args['prev_text'],
			'next_text' => $args['next_text'],
		) );

		if ( $links ) : ?>
            <nav class="navigation paging-navigation">
				<?php echo '<div class="pagination loop-pagination">' . $links . '</div><!-- .pagination -->' ?>
			</nav><!-- .navigation -->
		<?php
		endif;
	}
}

function __get_field( $selector, $post_id = false, $format_value = true ) {
	if ( function_exists( 'get_field' ) ) {
		return get_field( $selector, $post_id, $format_value );
	}

	return false;
}

function __get_fields( $post_id = false, $format_value = true ) {
	if ( function_exists( 'get_fields' ) ) {
		return get_fields( $post_id, $format_value );
	}

	return [];
}
