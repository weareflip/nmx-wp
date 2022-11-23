<?php

/**
 * Header template
 */

$classes = [
    'main-footer',
];

$logo       = __get_field('logo', 'option');
$formSignUp = __get_field('form_sign_up', 'option');
$social     = __get_field('social_ft', 'option');
$copyright  = __get_field('copyright', 'option');
$menuBottom = __get_field('menu_footer_bottom', 'option'); 
?>
<footer id="site-footer" class="<?php echo implode(' ', $classes) ?>">
    <div class="footer-wrap">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="footer-top-left col-12 col-md-12 col-lg-6 col-xl-7">
                        <div class="footer-top-left__logo"> 
                            <?php if(!empty($logo)): ?>
                                <a href="<?php echo home_url(); ?>"> 
                                    <img src=<?php echo $logo ?> alt="logo">
                                </a>
                            <?php endif; ?>    
                        </div>

                        <?php if(!empty($social)): ?>
                            <ul class="footer-top-left__social"> 
                                <?php foreach($social as $value): ?>
                                    <?php if(!empty($value['icon']) && !empty($value['link'])): ?>
                                        <li> 
                                            <a href="<?php echo $value['link'] ?>"> 
                                                <img src="<?php echo $value['icon'] ?>" alt="social icon" />
                                            </a> 
                                        </li>
                                    <?php endif; ?>    
                                <?php endforeach; ?>    
                            </ul>
                        <?php endif ?>
                        
                        <?php if(!empty($formSignUp)): ?>
                            <div class="footer-top-left__form"> 
                                <?php echo do_shortcode($formSignUp) ?>
                            </div>
                        <?php endif; ?>    
                    </div> 
                    
                    <div class="footer-top-right col-12 col-md-12 col-lg-6 col-xl-5">
                        <div class="footer-top-right__navs"> 
                            <?php if (is_active_sidebar('footer-1')) : ?>
                                <div class="footer-top-right__navs-item">
                                    <?php dynamic_sidebar('footer-1'); ?>
                                </div>
                            <?php endif ?>

                            <?php if (is_active_sidebar('footer-2')) : ?>
                                <div class="footer-top-right__navs-item">
                                    <?php dynamic_sidebar('footer-2'); ?>
                                </div>
                            <?php endif ?>

                            <?php if (is_active_sidebar('footer-3')) : ?>
                                <div class="footer-top-right__navs-item">
                                    <?php dynamic_sidebar('footer-3'); ?>
                                </div>
                            <?php endif ?>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="container"> 
                <div class="footer-bottom__warp"> 
                    <?php if(!empty($copyright)): ?>
                        <?php $cp = str_replace('{{YEAR}}', date('Y'), $copyright); ?>
                        <p class="footer-bottom__copyright"> <?php echo $cp ?> </p>
                    <?php endif; ?>  
                    
                    <?php if (!empty($menuBottom)) : ?>
                        <ul class="footer-bottom__menu"> 
                            <?php foreach ($menuBottom as $value) : ?>
                                <?php foreach ($value as $item) : ?>
                                    <li> 
                                        <a href="<?php echo $item['url'] ?>"> <?php echo $item['title'] ?> </a>
                                    </li>
                                <?php endforeach ?>    
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>    
                </div>
            </div>
        </div>    
    </div>
</footer> <!-- #site-footer -->