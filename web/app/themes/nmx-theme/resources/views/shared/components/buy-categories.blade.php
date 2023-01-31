<div class="container py-8">
    <h1 class="section-title d-inline-block red-border-left text-left">
        {{ isset($title) ? $title : 'Buy Equipment' }}
    </h1>

    <div class="row">
        @forelse($categories as $category)
            <div class="col-12 col-md-6 col-lg-4">
                <div class="category-card category-card--dark" data-href="{{ route('buy.category', $category->name) ?? '#' }}">
                    <div class="category-card__image">
                        <img src="{{ $category->featuredImage() ? $category->featuredImage() : '/media/images/image-unavailable.png' }}" />
                    </div>

                    <div class="category-card__text">
                        {{ $category->title }}

                        <a href="{{ route('buy.category', $category->name) }}" class="button">
                            See more
                            @include('shared.svg.arrow-right')
                        </a>
                    </div>
                </div>
            </div>
        @empty
            <p>No purchasing categories available, please check back soon, or contact us below.</p>
        @endforelse
    </div>
</div>
