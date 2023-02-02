
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <span class="navbar-brand">
            <a href="/">
                <img src="<?= get_template_directory_uri() ?>/assets/media/logos/logo-large-dark.svg" class="navbar-logo">
            </a>
        </span>

        <button class="navbar-toggler collapsed ml-auto" type="button" data-toggle="collapse"
                data-target="#navbarContent" aria-controls="#navbarContent" aria-expanded="false"
                aria-label="Toggle navigation">

            <div class="menu-icon">
                @include('shared.svg.menu-icon')
            </div>
        </button>

        <div class="navbar-collapse collapse" id="navbarContent">
            <ul class="navbar-nav ml-auto">
                @isset($main_menu_items)
                    @foreach($main_menu_items as $menu_item)
                        <li class="nav-item">
                            <a class="nav-link{{ $menu_item->current ? ' active' : '' }} p-0 pt-2 mx-2 font-weight-bolder"
                               href="{{ $menu_item->url }}" target="{{ $menu_item->target }}">
                                {{ $menu_item->title }}
                            </a>
                        </li>
                    @endforeach
                @endisset

                <li class="nav-item">
                    <a class="nav-link p-0 pt-2 mx-2 font-weight-bolder" href="#contact-us">
                        Contact
                    </a>
                </li>
            </ul>

            <div class="navbar-footer d-lg-none w-100">
                <div class="row">
                    <div class="col-5 d-flex align-items-center pt-3">
                        @if (!empty($facebook_url))
                            <a href="{{ $facebook_url }}" class="mr-3" target="_blank">
                                <i class="icon icon-facebook text-red"></i>
                            </a>
                        @endif

                        @if (!empty($linkedin_url))
                            <a href="{{ $linkedin_url }}" target="_blank">
                                <i class="icon icon-linkedin text-red"></i>
                            </a>
                        @endif

                        @if (!empty($twitter_url))
                            <a href="{{ $twitter_url }}" target="_blank">
                                <i class="icon icon-twitter text-red"></i>
                            </a>
                        @endif

                        @if (!empty($instagram_url))
                            <a href="{{ $instagram_url }}" target="_blank">
                                <i class="icon icon-instagram-o text-red"></i>
                            </a>
                        @endif

                        @if (!empty($youtube_url))
                            <a href="{{ $youtube_url }}" target="_blank">
                                <i class="icon icon-youtube text-red"></i>
                            </a>
                        @endif
                    </div>

                    <div class="col d-flex align-items-center justify-content-end" style="font-size: .5em">
                        <ul class="list-inline mb-0">
                            @isset($footer_menu_items)
                                @foreach($footer_menu_items as $menu_item)
                                    <li class="list-inline-item">
                                        <a href="{{ $menu_item->url }}" class="text-white">
                                            {{ $menu_item->title }}
                                        </a>
                                    </li>
                                @endforeach
                            @endisset
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</nav>
