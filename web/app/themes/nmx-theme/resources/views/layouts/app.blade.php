<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>{{ $title ?? '' }} | NMX</title>

    <meta name="referrer" content="origin">

    <meta name="description" content="{{ get_field('seo_description') }}" />

    <meta property="og:title" content="{{ get_field('seo_title') }}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?= get_permalink() ?>">

    @if (!empty(get_field('seo_image')))
        <meta property="og:image" content="{{ get_field('seo_image') }}">
    @endif

    @if (!empty(get_field('seo_description')))
        <meta property="og:description" content="{{ get_field('seo_description') }}">
    @endif

    <meta name="theme-color" content="#000">

    <link rel="apple-touch-icon" sizes="180x180" href="/media/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/media/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/media/favicons/favicon-16x16.png">
    <link rel="manifest" href="/media/favicons/site.webmanifest">
    <link rel="mask-icon" href="/media/favicons/safari-pinned-tab.svg" color="#ED1D24">
    <meta name="msapplication-TileColor" content="#000">

    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700|Open+Sans" rel="stylesheet">
    <?php \App\Assets::style('app')
    ?>

    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-MVFDLMD');
    </script>
    <!-- End Google Tag Manager -->

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MVFDLMD" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    @if (!is_home() && !is_front_page())
    @include('shared.navigation.main-navigation')
    @endif
    @yield('above-content')

    <div class="main-container">
        @yield('content')
    </div>

    @include('shared.footer')

    <?php \App\Assets::script('app')
    ?>
    <?php wp_footer(); ?>
</body>

</html>
