@extends('layouts.app', ['page_title' => 'Page not found'])

@section('content')
    <div class="file-not-found-section text-center d-flex align-items-center justify-content-center px-4">
        <div class="background"></div>

        <div class="content red-border-left pl-5 text-white">
            <h1 class="d-inline-block">404: Page not found</h1>

            <p class="mb-0">
                We cannot find the content you are looking for.
            </p>
        </div>
    </div>
@endsection