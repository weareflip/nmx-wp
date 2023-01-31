<div class="faq-section py-3 px-lg-5 mb-5">
    <a name="faq"></a>
    <div class="container">
        <h3 class="section-title d-inline-block text-left font-large red-border-small-left pl-4">
            Frequently asked questions
        </h3>

        <div id="faq-accordion" class="accordion">
            @foreach(get_sub_field('sections') as $index => $section)
                <div class="card">
                    <div class="card-header bg-white border-0 py-4" id="faq-{{ $index }}">
                        <h4 class="mb-0 font-medium">
                            <button class="button button-link font-weight-bold w-100 text-left collapsed mr-2 pr-5" data-toggle="collapse" data-target="#collapse-faq-{{ $index }}"
                                    aria-expanded="false" aria-controls="collapse-faq-{{ $index }}">
                                {{ $section['question'] }}
                            </button>
                        </h4>
                    </div>

                    <div id="collapse-faq-{{ $index }}" class="collapse px-4 py-2 bg-medium-grey" aria-labelledby="faq-{{ $index }}" data-parent="#faq-accordion">
                        <div class="card-body">
                            {!! nl2br($section['answer']) !!}
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</div>