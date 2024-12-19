<x-mail::message>

    @component('mail::message')

        Los siguientes exámenes están próximos a vencer en un mes:

        <table class="table table-bordered">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>RUT</th>
            <th>Fecha de Vencimiento</th>
            <th>Batería</th>
            <th>Email</th>
            <th>Código de Verificación</th>
            <th>Número de Solicitud</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($examenes as $item)
            <tr>
                <td>{{ $item['nombre'] }}</td>
                <td>{{ $item['apellidos'] }}</td>
                <td>{{ $item['rut'] }}</td>
                <td>{{ $item['fecha_vencimiento'] }}</td>
                <td>{{ $item['bateria'] }}</td>
                <td>{{ $item['email'] }}</td>
                <td>{{ $item['codigo_verificacion'] }}</td>
                <td>{{ $item['numero_solicitud'] }}</td>
            </tr>
        @endforeach
    </tbody>
</table>

        Gracias,<br>
        {{ config('app.name') }}
    @endcomponent


    <x-mail::button :url="''">
        Button Text
    </x-mail::button>

    Thanks,<br>
    {{ config('app.name') }}
</x-mail::message>
