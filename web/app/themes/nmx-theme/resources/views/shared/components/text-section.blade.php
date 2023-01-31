@php
    $header_classes = get_sub_field('background_color_class') == 'bg-dark-grey' ? 'text-white' : '';
    $header_classes .= ' text_'. get_sub_field('header_align');
@endphp
<div class="text-component px-3 py-5 p-lg-5 {{ get_sub_field('background_color_class') }}">
    <div class="container">
        @if (!empty(get_sub_field('heading')))
            <h2 class="section-title red-border-left d-inline-block {{ $header_classes }}">
                {{ get_sub_field('heading') }}
            </h2>
        @endif

        @php
            $column_count = count(get_sub_field('columns'))
        @endphp

        <div class="row">
            @if($column_count === 1)
                {{-- If there is a single column, use a special layout --}}
                @php
                    $column = get_sub_field('columns')[0];
                @endphp

                @if ($column['has_icon'])
                    <div class="col-12 col-lg-2 d-flex justify-content-center justify-content-lg-start align-items-center mb-lg-4 flash-bang flash-bang-once animate-slide-in-left">
                        <div>
                            <i class="icon icon-{{ $column['icon'] }} icon-fix text-red" style="font-size: 11em; line-height: .95em"></i>
                        </div>
                    </div>
                @endif

                <div class="col-12 col-lg-{{ $column['has_icon'] ? '10' : '12' }} text-center text-lg-left{{ $column['has_icon'] ? ' pl-lg-5' : '' }}">
                    @if ($column['has_heading'] && !empty($column['heading']))
                        <h3 class="section-title red-border-left font-xx-large pl-4">{{ $column['heading'] }}</h3>
                    @endif

                    <div class="text-left text-lg-left{{ $column['has_icon'] ? ' pl-lg-4' : '' }}">
                        {!! $column['text'] !!}
                    </div>
                </div>
            @else
                @foreach(get_sub_field('columns') as $column)
                    <div class="col-12 col-lg-{{ 12 / $column_count }} mb-4 text-center text-lg-left">
                        <i class="icon icon-{{ $column['icon'] }} text-red" style="font-size: 6.5rem; height: 1em"></i>

                        <h3>{{ $column['heading'] }}</h3>

                        <div class="text-left">
                            {!! $column['text'] !!}
                        </div>
                    </div>
                @endforeach
            @endif
        </div>
    </div>
</div>
