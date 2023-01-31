<div class="services-component p-3 px-lg-5 py-lg-7 text-center">
    <a name="services"></a>
    <div class="container flashbang">
        @if (!empty(get_sub_field('heading')))
            <div>
                <h2 class="section-title d-inline-block red-border-left text-left">{{ get_sub_field('heading') }}</h2>
            </div>
        @endif

        <div class="row mb-2 mb-lg-5 justify-content-center">
            @foreach($services = get_sub_field('section') as $index => $section)
                <div class="service d-flex col-12 col-sm-6 col-lg mb-4">
                    <a class="d-flex" href="{{ get_permalink($section['link']) }}">
                        <div class="icon-box py-4 justify-content-center d-flex flex-grow-1">
                            <div class="mb-1">
                                <div class="flash-bang flash-bang-hover flash-bang-once flash-icon"
                                     data-icon="{{ $section['animation'] }}"
                                     style="height: 95px"></div>
                            </div>

                            <strong class="title mt-1 mb-2 text-uppercase mb-lg-4">{{ $section['heading'] ?? '' }}</strong>

                            @if (!empty($section['text']))
                                <div class="d-none d-lg-block font-medium w-100">
                                    <p>
                                        {{ $section['text'] ?? '' }}
                                    </p>
                                </div>
                            @endif
                        </div>
                    </a>
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
                <a href="{{ get_sub_field('link') }}{{ !empty(get_sub_field('link_target')) && get_sub_field('link_target') !== 'none' ? '#'. get_sub_field('link_target') : '' }}"
                   class="button button-full-mobile">{{ get_sub_field('link_text') }}</a>
            </div>
        @endif
    </div>
</div>
