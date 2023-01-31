<div class="row">
    <div class="col-lg-5 pr-lg-5 flash-bang flash-bang-once animate-slide-in-left">
        <h2 class="title">
            @php
                $header = get_sub_field('fallback')['header'];
                $header = preg_replace('#<\/?p([^>]*)>#is', '', $header);
                $header = preg_replace('#<strong>#is', '<br><strong class="title-large red-border-left pl-4">', $header);
            @endphp
            {!! $header !!}
        </h2>

        <div class="image">
            <img src="{{ get_sub_field('fallback')['image']['sizes']['large'] }}">
        </div>
    </div>

    <div class="details-wrapper col-lg-7 flash-bang flash-bang-once animate-slide-in-right">
        {!! get_sub_field('fallback')['text'] !!}

        @if (get_sub_field('fallback')['link'])
            <a href="{{ get_sub_field('fallback')['link'] }}" class="button button-full-mobile mr-lg-2 mr-xl-4">
                {{ get_sub_field('fallback')['link_text'] }}
            </a>
        @endif
    </div>
</div>