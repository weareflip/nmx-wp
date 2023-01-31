<div class="auction-component px-lg-5 py-lg-7">
    @if (isset($_GET['auction_off']) || !get_sub_field('show_auction'))
        @include('shared.components.auction-fallback')
    @else
        <div id="auction-carousel" class="carousel slide" data-ride="false" data-interval="99999999">
            <div class="carousel-inner">
                @foreach (get_sub_field('auction_items') as $index => $auction)
                    <div class="carousel-item{{ $index === 0 ? ' active' : ' non-active' }}">
                        <div class="row">
                            <div class="col-lg-5 pr-lg-5">
                                <h2 class="title">
                                    @php
                                        $header = $auction['header'];
                                        $header = preg_replace('#<\/?p([^>]*)>#is', '', $header);
                                        $header = preg_replace('#<strong>#is', '<br><strong class="title-large red-border-left pl-4">', $header);
                                    @endphp
                                    {!! $header !!}
                                </h2>

                                <div class="image">
                                    <img src="{{ $auction['auction_image']['sizes']['large'] }}" class="w-100">
                                </div>
                            </div>

                            <div class="details-wrapper col-lg-7"
                                 style="margin-right: -4rem">

                                @if (!empty($auction['auction_end_datetime']) || !empty($auction['auction_start_datetime']))
                                    <div class="details-time mb-2">
                                        <i class="icon icon-time-clock icon-fix mr-2"></i>

                                        @if (isset($auction['auction_end_datetime']) && !empty($auction['auction_end_datetime']))
                                            <span class="details-timer">
                                                @php
                                                    $end_date = \Carbon\Carbon::createFromFormat('d/m/Y g:i a', $auction['auction_end_datetime'], 'Australia/Brisbane');
                                                @endphp
                                                Ends {{ $end_date->format('ga d/m T') }}
                                            </span>
                                        @endif

                                        @if (isset($auction['auction_start_datetime']) && !empty($auction['auction_start_datetime']))
                                            @php
                                                $start_date = \Carbon\Carbon::createFromFormat('d/m/Y g:i a', $auction['auction_start_datetime'], 'Australia/Brisbane');
                                            @endphp

                                            <span class="details-date">(Starts {{ $start_date->format('ga d/m') }})</span>
                                        @endif
                                    </div>
                                @endif

                                @if (!empty($auction['auction_title']))
                                    <h3 class="details-title mb-3">
                                        {{ $auction['auction_title'] }}
                                    </h3>
                                @endif

                                <div class="details-meta mb-4">
                                    @if (!empty($auction['auction_location']))
                                        <span>
                                            {{ $auction['auction_location'] }} <i class="icon icon-map"></i>
                                        </span>
                                    @endif

                                    @if (!empty($auction['auction_type']))
                                        @if (in_array('onsite', $auction['auction_type']))
                                            <span>
                                            On-site <i class="icon icon-on-site"></i>
                                        </span>
                                        @endif

                                        @if (in_array('webcast', $auction['auction_type']))
                                            <span>
                                            Webcast <i class="icon icon-webcast"></i>
                                        </span>
                                        @endif

                                        @if (in_array('timed', $auction['auction_type']))
                                            <span>
                                            Timed <i class="icon icon-time-clock"></i>
                                        </span>
                                        @endif
                                    @endisset
                                </div>

                                <div class="details-text mb-4">
                                    {!! $auction['auction_text'] ?? '' !!}
                                </div>

                                @if ($auction['auction_type'] !== 'none' && !empty($auction['auction_link_text']))
                                    <a href="{{ $auction['auction_link'] }}"
                                       class="button button-full-mobile mr-lg-2 mr-xl-4">
                                        {{ $auction['auction_link_text'] }}
                                    </a>
                                @endif
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

            @if (count(get_sub_field('auction_items')) > 1)
                <a class="carousel-control-prev" role="button" data-slide="prev" data-target="auction-carousel">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" role="button" data-slide="next" data-target="auction-carousel">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            @endif
        </div>
    @endif
</div>