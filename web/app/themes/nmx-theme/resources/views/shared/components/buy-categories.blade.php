
<div class="container py-8">
    <h1 class="section-title d-inline-block red-border-left text-left">
        {{ isset($title) ? $title : 'Buy Equipment' }}
    </h1>

    <div class="row">
        @if ($buy_categories)
            @foreach ($buy_categories as $category)
                @php
                $featured_img_url = get_the_post_thumbnail_url($category->ID, 'full');
                @endphp
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="category-card category-card--dark" data-href="{{get_the_permalink($category->ID) }}}}">
                        <div class="category-card__image">
                            <img
                                src="{{ $featured_img_url ? $featured_img_url : '/media/images/image-unavailable.png' }}" />
                        </div>

                        <div class="category-card__text">
                            {{ $category->post_title }}

                            <a href="{{ get_the_permalink($category->ID) }}" class="button">
                                See more
                                @include('shared.svg.arrow-right')
                            </a>
                        </div>
                    </div>
                </div>
            @endforeach
        @else
            <p>No purchasing categories available, please check back soon, or contact us below.</p>
        @endif
    </div>
</div>
