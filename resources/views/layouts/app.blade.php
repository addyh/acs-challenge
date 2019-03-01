<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('css/app.css')}}" />
        <script type="text/javascript" language="javascript" src="{{asset('js/app.js')}}"></script>
        <title>ACS Test Panels</title>
    </head>
    <body>
@yield('content')
    </body>
</html>