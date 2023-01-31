<div class="video-component py-lg-7 text-center">
    <a name="video"></a>

    <div class="container-fluid px-0">
        @if (!empty(get_sub_field('video_title')))
            <div class="d-none d-lg-block">
                <h2 class="section-title text-white d-inline-block red-border-left">{{ get_sub_field('video_title') }}</h2>
            </div>
        @endif

        <div class="video-container w-100">
            <div class="video-overlay w-100">

                <button class="button button-icon mb-0" data-video="#home-video">
                    <i class="icon icon-play icon-fix"></i>
                    <span class="caption">See us in action</span>
                </button>
            </div>

            <img src="{{ get_sub_field('video_poster') }}">


            <div class="d-none">
                <video class="video-player"
                       poster="{{ get_sub_field('video_poster') }}" id="home-video" controls>
                    @forelse(get_sub_field('video') as $video)
                        <source src="{{ $video['source_file'] }}">
                    @empty
                    @endforelse
                </video>
            </div>
        </div>
    </div>
</div>