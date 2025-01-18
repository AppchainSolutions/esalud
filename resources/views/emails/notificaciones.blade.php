@extends('vendor.mail.html.layout')

@section('content')
    <div>
        <h3>{{ $title }}</h3>
       
        <p>Estimados/as:</p>

        <p>
           Espero que este mensaje le encuentre bien. Nos dirigimos a usted, para facilitar la información sobre los
            exámenes ocupacionales que están por vencer.
        </p>

        <p>Instamos a los colaboradores a que tomen las medidas necesarias para programar sus citas de renovación con
            nuestra sala de PPAA, asegurando así la continuidad de sus expedientes y su bienestar en el lugar de trabajo.
        </p>

        <table class="table">
            <thead>
                <tr>
                    <th>Número de Solicitud</th>
                    <th>Fecha de Vencimiento</th>
                    <th>RUT</th>
                    <th>Nombre</th>
                    <th>Apellidos</th>
                    <th>Batería</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($examenes as $item)
                    <tr>
                        <td>{{ $item['numero_solicitud'] }}</td>
                        <td>{{ $item['fecha_vencimiento'] }}</td>
                        <td>{{ $item['rut'] }}</td>
                        <td>{{ $item['nombre'] }}</td>
                        <td>{{ $item['apellidos'] }}</td>
                        <td>{{ $item['bateria'] }}</td>
                        <td>{{ $item['email'] }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <p>Muchas Gracias,<br>
            {{ config('app.name') }}</p>
    </div>
@endsection
