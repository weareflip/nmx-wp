<header class="carousel-header" id="header-carousel" data-ride="carousel">
    @include('shared.navigation.main-navigation')

    <div class="carousel-logo img-wrapper ml-3">
        <a href="/">
            <div class="header-logo d-none d-lg-block nmx-logo" data-icon="nmx-logo"
                 style="height: 154px; width: 154px"></div>
        </a>
    </div>

    <div class="carousel-inner wrapper h-100">
        @php
            $slide_count = count(get_sub_field('slides'))
        @endphp

        @foreach(get_sub_field('slides') as $index => $slide)
            <div class="carousel-item{{ $index === 0 ? ' active' : ' non-active' }}">
                <div class="background">
                    @include('shared.svg.carousel-background-shape')
                    <div class="image"
                         style="background-image: url({{ $slide['image']['sizes']['x-large'] ?? '' }})"></div>
                </div>

                <div class="wrapper text-white h-100">
                    <div class="carousel-mobile-controls d-lg-none">
                        <ol class="carousel-indicators">
                            @for($i = 0; $i < $slide_count; $i++)
                                <li data-target="#header-carousel" data-slide-to="{{$i}}"
                                    class="{{ $i === $index ? 'active' : '' }}"></li>
                            @endfor
                        </ol>
                    </div>

                    <div class="item-text">
                        <div class="item-header red-border-left mb-3 mb-lg-2 pl-4">
                            <h2 class="item-title text-uppercase mb-0">{{ $slide['heading'] ?? '' }}</h2>

                            <p>{{ $slide['subheading'] ?? '' }}</p>
                        </div>

                        <div class="header-buttons mb-3 d-flex align-items-top">
                            @if ($slide['button_link_type'] != 'none')
                                <a href="{{ $slide['button_link_type'] == 'internal' ? get_permalink($slide['link']) : $slide['link'] }}"
                                   class="button w-100 button-outline-desktop w-lg-auto mb-1 py-2-5 px-2">
                                    {{ $slide['link_text'] ?? '' }}
                                </a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        @endforeach

        <div class="carousel-controls d-none d-lg-block">
            <div class="row">
                <div class="col-2 offset-2 font-weight-bold font-medium">
                    <span data-slide-info>{{ "01/". str_pad($slide_count, 2, '0', STR_PAD_LEFT) }}</span>
                </div>

                <div class="col-2 ml-auto">
                    <a class="carousel-control-prev" href="#" role="button" data-slide="prev">
                        <i class="icon icon-arrow-left"></i>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#" role="button" data-slide="next">
                        <i class="icon icon-arrow-right"></i>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>