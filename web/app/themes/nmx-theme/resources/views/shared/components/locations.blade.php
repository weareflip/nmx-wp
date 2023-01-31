<div class="locations-component px-3 py-5 p-lg-5 pb-lg-8 bg-dark-grey text-center">
    <a name="locations"></a>
    <h2 class="section-title text-white red-border-left">Locations</h2>

    <div class="container">
        <div class="row">
            <!-- hidden on mobile -->
            <div class="col-auto col-lg-4 pr-lg-6 d-none d-lg-block">
                <ul class="location-list mr-auto ml-auto text-left mr-lg-0">
                    @foreach(get_field('locations', 'option') as $index => $location)
                        <li>
                            <span class="location-circle mr-3">{{ $index + 1 }}</span>
                            {{ $location['location'] }}
                        </li>
                    @endforeach
                </ul>
            </div>

            <div class="locations-map flash-bang col-12 col-lg text-center text-lg-left pl-lg-6" data-delay="300">
                <svg class="d-none">
                    <defs>
                        <g id="MapMarker">
                            <path fill="#ED1C24" d="M14.8,0.3C6.9,0.3,0.5,6.7,0.5,14.6c0,0.6,0,1.2,0.1,1.8c1.2,11.2,13.3,24.1,13.3,24.1
						c0.2,0.2,0.4,0.4,0.6,0.5l0,0l0.4,0.1l0.4-0.1l0,0c0.2-0.1,0.4-0.3,0.6-0.5c0,0,11.9-12.9,13.1-24.1c0.1-0.6,0.1-1.2,0.1-1.8
						C29.1,6.7,22.7,0.3,14.8,0.3"></path>
                        </g>
                    </defs>
                </svg>
                <div class="locations-map-wrapper">
                    @for($i = 1; $i <= 10; $i++)
                        <figure class="locations-map-marker">
                            <figcaption>{{ $i }}</figcaption>
                            <svg viewBox="0 0 30 46">
                                <use xlink:href="#MapMarker"/>
                            </svg>
                        </figure>
                    @endfor
                    @include('shared.svg.locations-map')
                </div>
            </div>

            <!-- show on mobile -->
            <div class="col-12 d-lg-none mt-5">
                <ul class="location-list mr-auto ml-auto text-left mt-3">
                    @foreach(get_field('locations', 'option') as $index => $location)
                        <li>
                            <span class="location-circle mr-3">{{ $index + 1 }}</span>
                            {{ $location['location'] }}
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</div>
