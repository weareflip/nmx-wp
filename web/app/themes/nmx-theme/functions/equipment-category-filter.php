<?php
use App\Models\Category;

// Categories should have been a taxonomy, I'm sorry.

add_action( 'restrict_manage_posts', function ($type) {
    $categories = Category::all();

	if ($type !== 'equipment') return;
	$current_category = isset($_GET['equipment_category']) ? $_GET['equipment_category'] : '';

	?>
	<select name="equipment_category" id="equipment_category">
		<option value="all" <?php selected( 'all', $current_category ); ?>>
			All Categories
		</option>
        <?php foreach($categories as $category): ?>
        <option value="<?php echo $category->ID ?>" <?php selected( $category->ID, $current_category ); ?>>
            <?php echo $category->post_title; ?>
        </option>
        <?php endforeach; ?>
	</select>
<?php
}, 1, 10 );


add_filter('parse_query', function (&$query) {
	global $pagenow;
	$post_type = isset($_GET['post_type']) ? $_GET['post_type'] : '';

	if (is_admin() && $pagenow === 'edit.php' && $post_type == 'equipment' && isset($_GET['equipment_category']) && $_GET['equipment_category'] !== 'all') {
		$equipment_ids = Category::whereId($_GET['equipment_category'])
            ->first()
            ->equipment()
            ->pluck('equipment_id')
            ->toArray();

		// If post__in is [], it returns everything
        if (count($equipment_ids) === 0) {
			$equipment_ids = [-1];
        }

		$query->set('post__in', $equipment_ids);
	}
});
