<div class="who-we-are-intro-component p-3 p-lg-5">
    <div class="background d-none d-md-block">
        <div class="background-shape">
            @include('shared.svg.who-we-are-background-shape')
        </div>

        <div class="background-logo">
            @include('shared.svg.who-we-are-background-logo')
        </div>
    </div>

    <div class="container">
        <div class="row mt-5 mt-md-8">
            <div class="col-12 col-md-8 col-lg-6">
                @if (!empty(get_sub_field('heading')))
                    <h2 class="red-border-left section-title">{{ get_sub_field('heading') }}</h2>
                @endif

                <div>
                    {!! get_sub_field('text') !!}
                </div>
            </div>
        </div>
    </div>
</div>
