@extends('layouts.app')
@section('content')
    <div class="container py-8">
        <h1 class="red-border-left mb-3">Buy {{ get_the_title() }}</h1>

        <div class="equipment-breadcrumbs my-3">
            <a href="/buy">Categories &gt;</a>
            <strong>{{ get_the_title() }}</strong>
        </div>

        <div class="equipment-search mb-4">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Type a phrase or keyword to begin searching"
                    id="equipment-search" />
                    <input type="hidden" class="form-control" id="id-category" value="{{get_the_ID()}}"/>
            </div>
        </div>

        <div class="row" id="equipment-results">
            @if ($equiment_category)
                @foreach ($equiment_category as $equipment)
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="category-card category-card--big" data-href="{{$equipment['url']}}">
                            <div class="category-card__image">
                                <img src="{{ $equipment['media'] ?? '/media/images/images-unavailable.png' }}" />
                            </div>

                            <div class="category-card__text flex-column">
                                <div>
                                    {{ $equipment['title'] }}
                                </div>

                                <a href="{{ $equipment['url'] }}" class="button">
                                    View details
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            @else
                <p class="text-center my-4 w-100">
                    Sorry no equipment for sale currently in {{ $buy_categories->title }}.<br><br>
                    <a class="text-red" href="">&larr; Go back</a>
                </p>
            @endif
        </div>
    </div>
@endsection
