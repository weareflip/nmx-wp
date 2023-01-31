<div class="services-component p-3 px-lg-5 pt-lg-5 pb-lg-3 text-{{ get_sub_field('heading_text_alignment') }}">
    <a name="{{ strtolower(str_replace(' ', '-', get_sub_field('heading'))) }}"></a>

    <div class="container">
        @if (!empty(get_sub_field('heading')))
            <div>
                <h2 class="section-title d-inline-block red-border-left text-left">{{ get_sub_field('heading') }}</h2>

                @if (!empty(get_sub_field('intro_text')))
                    <div class="font-medium mb-4">
                        {!! get_sub_field('intro_text') !!}
                    </div>
                @endif
            </div>
        @endif

        <div class="row flash-bang animate-fade-items-in justify-content-center">
            @foreach($services = get_sub_field('icons') as $index => $icon)
                <div class="service d-flex col-12 col-sm-6 col-lg mb-4">
                    <div class="icon-box py-4 justify-content-center d-flex flex-grow-1">
                        <div class="mb-3">
                            <i class="icon icon-{{ $icon['icon'] ?? '' }}" style="font-size: 4rem"></i>
                        </div>

                        <strong class="title my-2 text-uppercase mb-2 mb-lg-3">{{ $icon['icon_heading'] ?? '' }}</strong>

                        @if(!empty($icon['icon_subheading']))
                            <p class="d-none d-lg-block font-large px-4">{{ $icon['icon_subheading'] ?? '' }}</p>
                        @endif
                    </div>
                </div>

                {{-- Force a line break every 3 services on desktops when the total is odd --}}
                @if (count($services) % 2 === 1 && ($index + 1) % 3 === 0)
                    <div class="service-flex-break"></div>
                @endif

                {{-- Force a line break every 4 services on desktops when the total is even --}}
                @if (count($services) % 2 === 0 && ($index + 1) % 4 === 0)
                    <div class="service-flex-break"></div>
                @endif
            @endforeach
        </div>

        @if (!empty(get_sub_field('link_text')))
            <div class="text-center">
                <a href="{{ get_sub_field('link') }}"
                   class="button button-full-mobile">{{ get_sub_field('link_text') }}</a>
            </div>
        @endif
    </div>
</div>
