<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

// How/why:
// ACF is used to set up a relationship between equipment to category  - both of which are just custom posts
// in the wp_posts table.
// To query equipment within a category would involve searching the equipment directly for some ACF data, so
// this maintains another table with the many to many relationship.

// @TODO: Get these field IDs dynamically
define('GALLERY_FIELD_ID', 'field_5ee9a56080e1d');
define('CATEGORY_FIELD_ID', 'field_5eea9aee7fb01');

add_action('save_post_equipment',  function($post_id, $post) {
	if ($post->post_status == "auto-draft" || !Schema::hasTable('category_equipment')) {
		return;
	}

	@$fields = get_fields($post_id);
	$featuredImage = get_the_post_thumbnail_url($post_id);
	$fallackImage = '';

	if (isset($_POST['acf'][GALLERY_FIELD_ID])) {
		$imageSrc = @wp_get_attachment_image_src(array_values($_POST['acf'][GALLERY_FIELD_ID][0])[0], 'medium');

		if ($imageSrc) {
			$fallackImage = $imageSrc[0];
		}
	}

	$thumbnail = $featuredImage ? $featuredImage : $fallackImage;
	$categories = !empty($_POST['acf'][CATEGORY_FIELD_ID]) ? $_POST['acf'][CATEGORY_FIELD_ID] : [];

	// Delete any no longer non-associated relations
	DB::table('category_equipment')
	  ->where('equipment_id', $post_id)
	  ->whereNotIn('category_id', $categories)
	  ->delete();

	if (isset($_POST['acf'][CATEGORY_FIELD_ID]) && count($categories) > 0) {
		collect($_POST['acf'][CATEGORY_FIELD_ID])->each(function ($category_id) use ($post_id, $fields, $thumbnail) {
			DB::table('category_equipment')->updateOrInsert([
				'category_id' => $category_id,
				'equipment_id' => $post_id,
			], [
				'equipment_thumbnail' => $thumbnail,
			]);
		});
	}
}, 10, 2);

add_action('delete_post', function($post_id) {
	DB::table('category_equipment')
	  ->where('category_id', $post_id)
	  ->orWhere('equipment_id', $post_id)
	  ->delete();
}, 10);
