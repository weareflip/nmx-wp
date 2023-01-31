@extends('layouts.app')

@section('content')
    <div class="container py-8">
        <h1 class="red-border-left">{{ $equipment->title }}</h1>

        <div class="equipment-breadcrumbs mt-3 mb-4">
            <a href="{{ route('buy.index') }}">Categories &gt;</a>
            @if($mainCategory)
                <a href="{{ route('buy.category', [$mainCategory->post_name]) }}">{{ $mainCategory->post_title }} &gt;</a>
            @endif
            {{ $equipment->title }}
        </div>

        <div class="row">
            <div class="col-12 col-lg-8">

                <div>
                    <div class="mb-3">
                        @if ($equipment->gallery)
                            <img src="{{ $equipment->gallery[0]['image']['sizes']['large'] }}" class="w-100" alt="Image of {{ $equipment->title }}" id="equipment-main-image">
                        @else
                            <img src="/media/images/image-unavailable.png" alt="Equipment image unavailable">
                        @endif
                    </div>

                    @if ($equipment->gallery)
                        <div class="equipment-thumbnails">
                            @foreach($equipment->gallery as $index => $image)
                                <div class="equipment-thumbnail mr-2" data-full-size="{{ $image['image']['sizes']['large'] }}">
                                    <img src="{{ $image['image']['sizes']['medium'] }}">
                                </div>
                            @endforeach
                        </div>
                    @endif
                </div>

                @if ($equipment->specifications)
                    <div class="row pt-4">
                        <div class="col-12">
                            <div class="specifications-table">
                                <table>
                                    <thead>
                                    <tr>
                                        <th colspan="2">Specifications</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @forelse($equipment->specifications as $specification)
                                        <tr>
                                            <td>{{ $specification['label'] }}</td>
                                            <td class="font-weight-bold text-right">{{ $specification['value'] }}</td>
                                        </tr>
                                    @empty
                                        <tr>
                                            <td rowspan="2">
                                                No specifications listed.
                                            </td>
                                        </tr>
                                    @endforelse
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                @endif

                <div class="row py-4">
                    @if ($equipment->documentation)
                        <div class="col-12 col-lg-4">
                            <strong>Documentation</strong>

                            <div class="mt-3">
                                <ul class="documentation-list">
                                    @foreach($equipment->documentation as $document)
                                        <li>
                                            <a href="{{ $document['file']['url'] }}">
                                                {{ $document['name'] }}
                                            </a>
                                        </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                    @endif
                    @if (!empty($equipment->content))
                        <div class="col-12 col-lg-8">
                            <strong class="mb-3">Description</strong>

                            <div class="mt-3">
                                {!! !empty($equipment->content) ? nl2br($equipment->content) : '<p>No item description</p>' !!}
                            </div>
                        </div>
                    @endif
                </div>
            </div>

            <div class="col-12 col-lg-4 mt-5 mt-lg-0">
                <div class="p-4" style="background: #000; color: #fff; height: fit-content">
                    <h2 class="mt-2 red-border-left">
                        Enquire now
                    </h2>

                    @php
                        $itemDetails = str_replace('+', '%20', urlencode('['. $equipment->id. '] '. $equipment->title));
                    @endphp

                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "23759722",
    formId: "30f81218-8280-4fb9-92f7-582b571147b7"
  });
</script>

                </div>
            </div>
    </div>
@endsection
