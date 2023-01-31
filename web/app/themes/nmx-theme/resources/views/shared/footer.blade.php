<footer class="site-footer p-4 p-lg-6">
    <div class="container">
        <div class="row">
            <div class="col-12">
            <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "23759722",
    formId: "f1fe34d6-e4b4-48d4-bd7f-2e3ed9fa6dc5"
  });
</script>

            </div>
        </div>
        <div class="row d-flex d-lg-none align-items-center">
            <div class="col-3">
                @include('shared.svg.nmx-logo')
            </div>

            <div class="col-9 font-xxx-large text-right pt-2">
                @if (!empty($facebook_url))
                    <a href="{{ $facebook_url }}" class="mr-3">
                        <i class="icon icon-facebook text-red"></i>
                    </a>
                @endif

                @if (!empty($linkedin_url))
                    <a href="{{ $linkedin_url }}">
                        <i class="icon icon-linkedin text-red"></i>
                    </a>
                @endif

                @if (!empty($twitter_url))
                    <a href="{{ $twitter_url }}">
                        <i class="icon icon-twitter text-red"></i>
                    </a>
                @endif

                @if (!empty($instagram_url))
                    <a href="{{ $instagram_url }}">
                        <i class="icon icon-instagram-o text-red"></i>
                    </a>
                @endif

                @if (!empty($youtube_url))
                    <a href="{{ $youtube_url }}">
                        <i class="icon icon-youtube text-red"></i>
                    </a>
                @endif
            </div>
        </div>

        <div class="row d-lg-none my-2">
            <div class="col">
                <a href="#" class="text-white mr-3 font-medium">Terms</a>
                <a href="#" class="text-white font-medium">Privacy</a>
            </div>
            <div class="col text-right text-white font-medium">
                @if (get_field('mobile_number', 'options') !== '')
                    <p class="mb-0">
                        Mobile:
                        <span style="white-space: nowrap">{{ get_field('mobile_number', 'options') }}</span>
                    </p>
                @endif
                @if (get_field('phone_number', 'options') !== '')
                    <p class="mb-0">
                        Phone:
                        <span style="white-space: nowrap">{{ get_field('phone_number', 'options') }}</span>
                    </p>
                @endif
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-lg-6 d-flex align-items-center">
                <p class="font-weight-light mb-0">
                    &copy; Copyright {{ date('Y') }} National Machinery Xchange. All Rights Reserved<br>
                    ABN: 14 721 700 799
                </p>
            </div>

            <div class="col-2 d-lg-none">
                <hr class="text-white">
            </div>

            <div class="col-12 col-lg-6">
                <div class="mb-0 d-flex justify-content-lg-end">
                    <div class="anim-flip-logo">
                        <a href="http://weareflip.com" class="d-flex align-items-center font-weight-light">
                            <span class="text-white mr-2">we are</span>

                            @include('shared.svg.flip')

                            <span class="text-white ml-2">and we made this</span>
                        </a>
                    </div>

                    <div class="d-none d-lg-flex align-items-center ml-4">
                        <div class="pl-4 border-left font-weight-bold">
                            <ul class="list-inline mb-0">
                                @isset($footer_menu_items)
                                    @foreach($footer_menu_items as $menu_item)
                                        <li class="list-inline-item mr-4">
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
    </div>
</footer>
