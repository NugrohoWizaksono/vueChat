@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-7">
            <chat-box></chat-box>
        </div>
        <div class="col-md-3">
            <chat-userlists></chat-userlists>
        </div>
    </div>
</div>
@endsection
