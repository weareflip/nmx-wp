<div class="contact-us-component">
    <a name="contact-us"></a>

    <div class="container">
        <div class="row">
            <div class="d-none d-lg-block col-lg-6 px-3 pr-lg-6 py-lg-8">
                <img src="<?= get_template_directory_uri() ?>/assets/media/logos/logo-large.svg" alt="" style="width: 174px">

                <div class="row mt-5 mb-4">
                    <div class="col-5">
                        <ul class="list-unstyled text-uppercase">
                            @foreach($main_menu_items as $menu_item)
                                <li class="mb-2">
                                    <a href="{{ $menu_item->url }}" class="text-black font-weight-bold">
                                        {{ $menu_item->title }}
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </div>

                    <div class="col-7">
                        <h3 class="font-large">Follow us</h3>

                        @if (!empty($infomation_global['facebook_url']))
                            <a href="{{ $infomation_global['facebook_url'] }}" class="mr-2" target="_blank">
                                <i class="icon icon-facebook font-xx-large text-red"></i>
                            </a>
                        @endif

                        @if (!empty($infomation_global['linkedin_url']))
                            <a href="{{ $infomation_global['linkedin_url'] }}" class="mr-2" target="_blank">
                                <i class="icon icon-linkedin font-xx-large text-red"></i>
                            </a>
                        @endif

                        @if (!empty($infomation_global['twitter_url']))
                            <a href="{{ $infomation_global['twitter_url'] }}" class="mr-2" target="_blank">
                                <i class="icon icon-twitter font-xx-large text-red"></i>
                            </a>
                        @endif

                        @if (!empty($infomation_global['instagram_url']))
                            <a href="{{ $infomation_global['instagram_url'] }}" class="mr-2" target="_blank">
                                <i class="icon icon-instagram-o font-xx-large text-red"></i>
                            </a>
                        @endif

                        @if (!empty($infomation_global['youtube_url']))
                            <a href="{{ $infomation_global['youtube_url'] }}" target="_blank">
                                <i class="icon icon-youtube font-xx-large text-red"></i>
                            </a>
                        @endif

                        <br><br>

                        <h3 class="font-large">Phone us</h3>

                        @if (get_field('mobile_number', 'options') !== '')
                            <div>
                                <span style="white-space: nowrap">{{ get_field('mobile_number', 'options') }}</span>
                            </div>
                        @endif

                        @if (get_field('phone_number', 'options') !== '')
                            <div>
                                <span style="white-space: nowrap">{{ get_field('phone_number', 'options') }}</span>
                            </div>
                        @endif
                    </div>
                </div>

                <div>
                    <h3 class="mb-3 font-medium">Locations</h3>
                    <img class="full-width" src="<?= get_template_directory_uri() ?>/assets/media/images/map.png" alt="Locations">
                </div>
            </div>

            <div class="col-lg-6 py-5 py-lg-8">
                <div class="mb-5">
                <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "23759722",
    formId: "82b7d2e8-69a9-485d-9002-e53c7121ce73"
  });
</script>

                </div>

            </div>
        </div>
    </div>
</div>
