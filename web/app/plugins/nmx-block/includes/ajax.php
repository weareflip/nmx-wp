<?php


add_action( 'wp_ajax_boilerplate_ajax_grid_card_post', 'boilerplate_ajax_pagination_grid_card_post' );
add_action( 'wp_ajax_nopriv_boilerplate_ajax_grid_card_post', 'boilerplate_ajax_pagination_grid_card_post' );
function boilerplate_ajax_pagination_grid_card_post() {
	$query       = isset( $_POST['query'] ) ? $_POST['query'] : [];
	$enable_page = isset( $_POST['enablePagination'] ) ? $_POST['enablePagination'] : true;
	$paged       = isset( $_POST['dataPaged'] ) ? intval( $_POST['dataPaged'] ) : 1;

	$query['paged'] = $paged;

	$the_query   = new WP_Query( $query );
	$data_query  = json_encode( $the_query->query );

	ob_start();
	boilerplate_query_post( $the_query );
	$items = ob_get_clean();

	ob_start();
	set_query_var('paged', $paged);
	boilerplate_pagination_render( $enable_page, $the_query );
	$pagination = ob_get_clean();
	wp_send_json( [
		'items'      => $items,
		'pagination' => $pagination,
		'query'      => $data_query,
		//'$the_query' => $the_query,
	] );
	wp_die();
}
