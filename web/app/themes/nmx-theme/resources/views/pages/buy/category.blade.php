@extends('layouts.app')

@section('content')
    <div class="container py-8">
        <h1 class="red-border-left mb-3">Buy {{ $category->post_title }}</h1>

        <div class="equipment-breadcrumbs my-3">
            <a href="{{ route('buy.index') }}">Categories &gt;</a>
            <strong>{{ $category->post_title }}</strong>
        </div>

        <div class="equipment-search mb-4">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Type a phrase or keyword to begin searching" id="equipment-search" />
            </div>
        </div>

        <div class="row" id="equipment-results">
            @forelse($category->equipment as $equipment)
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="category-card category-card--big" data-href="{{ route('buy.equipment', [$category->post_name, $equipment->post_name]) ?? '' }}">
                        <div class="category-card__image">
                            <img src="{{ $equipment->pivot->equipment_thumbnail ?? '/media/images/images-unavailable.png' }}" />
                        </div>

                        <div class="category-card__text flex-column">
                            <div>
                                {{ $equipment->post_title }}
                            </div>

                            <a href="{{ route('buy.equipment', [$category->post_name, $equipment->post_name]) ?? '' }}" class="button">
                                View details
                            </a>
                        </div>
                    </div>
                </div>
            @empty
                <p class="text-center my-4 w-100">
                    Sorry no equipment for sale currently in {{ $category->title }}.<br><br>
                    <a class="text-red" href="{{ route('buy.index') }}">&larr; Go back</a>
                </p>
            @endforelse

        </div>
    </div>
@endsection
