<?php
/**
 * The template for displaying 404 pages (not found)
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 * @package boilerplate
 */

get_header();
$ctas = __get_field( 'list_cta_404', 'option' );
?>
    <main id="primary" class="site-main">
		<section id="ss-error-404" class="error-404 not-found row">
            <div class="container"> 
                <div class="col-md-12 offset-md-12">
                    <div class="page-content">
                        <div class="central-body">
                            <div class="central-inner">
                                <h1><?= __( 'We’ve gone off-track' ) ?></h1>
                                <p class="desc"><?= __( 'Looks like this page doesn’t exist. Let’s get you back in the right direction.' ) ?></p>
                                <?php if($ctas): ?>
                                    <ul class="lists-cta"> 
                                        <?php foreach($ctas as $value): ?>
                                            <?php $target = !empty($value['blank']) ? '_blank' : ''; ?>
                                            <li class="item-cta <?php echo $value['type'] ?>">
                                                <a href="<?php echo $value['link'] ?>" target='<?php echo $target ?>'> 
                                                    <span><?php echo $value['name'] ?></span> 
                                                    <?php 
                                                        if(!empty($value['arrow'])){
                                                            if($value['type'] == 'white' or $value['type'] == 'outline' ){ ?>
                                                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAQCAYAAAArij59AAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACzSURBVHgBlY4xDoJAEEVnVlsMrdGCyho5gdSa6FHgBHIEPYInwEKjnR5haysKDda2wIxgjLorbMJLppj5L5nfmQ29aNTrn8rByyM9gwaWAn9X8ndXqUhC9UW8cFzHIICdZRhPbNduEgARXcsSy0ahghmC6cALakqqENNYgAGBYm4U8pw2BoGC410mXagtSav9Ta5fb/5DTsow/PTQw6Jg//emCEQcVn81gaJ3HB1SuYW2PAHpDkOcIMv0+QAAAABJRU5ErkJggg=='/>
                                                            <?php }else{ ?>
                                                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAPCAYAAADZCo4zAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgBnZBdDYAwDIQLCpAAEnCAA3ACDjYHSEMCEpBw9AIvg61N9iVNmt6lfwIg4iFKDqRMnuHS6C0DOTQ6y0B2z0A26g0zKTO2YjN7HQZrh7X6ijMZ8hXhfHL5ranF8Iohd8YN9JTzEpbZTFEAAAAASUVORK5CYII='/>
                                                            <?php }
                                                        }
                                                    ?>
                                                </a>
                                            </li>
                                        <?php endforeach; ?>    
                                    </ul>
                                <?php endif; ?>
                                
                                <a class="cta-back-home" href="<?php echo get_home_url(); ?>"> Go back home </a>
                            </div>
                        </div>
                    </div><!-- .page-content -->
                </div>
            </div>
		</section><!-- .error-404 -->
	</main><!-- #main -->
<?php
get_footer();
