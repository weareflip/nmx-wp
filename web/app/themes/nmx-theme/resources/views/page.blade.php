@extends('layouts.app')
@section('content')
    @if (have_rows('component'))
        @while (have_rows('component'))
            @php(the_row())
            @php($layout = str_replace('_', '-', get_row_layout()))
            @php($template = '/views/shared/components/' . $layout . '.blade.php')
            @if (file_exists(TEMPLATEPATH . $template))
                @include('shared.components.' . $layout . '')
            @endif
        @endwhile @php(wp_reset_postdata())
    @endif
@endsection
