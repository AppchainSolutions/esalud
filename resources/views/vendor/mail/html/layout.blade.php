<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>{{ config('app.name') }}</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .table { width: 100%; border-collapse: collapse; }
        .table th, .table td { border: 1px solid #b6b6b66d; padding: 8px; text-align: left; }
        .table th { background-color: #b3f1ec; }
    </style>
</head>
<body>
    @yield('content')
</body>
</html>