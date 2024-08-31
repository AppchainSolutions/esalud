<?php

/*
|--------------------------------------------------------------------------
| Load The Cached Routes
|--------------------------------------------------------------------------
|
| Here we will decode and unserialize the RouteCollection instance that
| holds all of the route information for an application. This allows
| us to instantaneously load the entire route map into the router.
|
*/

app('router')->setCompiledRoutes(
    array (
  'compiled' => 
  array (
    0 => false,
    1 => 
    array (
      '/clockwork' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::47d3GT11MTAQZP1T',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/clockwork/app' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::FAx3X9TCQTCjZYvO',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/__clockwork' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::DbEa3iixEoFQqEc5',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/login' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'login',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'generated::XlipGWkuZkvxjpSp',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/logout' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'logout',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/forgot-password' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'password.request',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'password.email',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/reset-password' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'password.update',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/register' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'register',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'generated::ZcSNCVMAJxaGbwu8',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/profile-information' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'user-profile-information.update',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/password' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'user-password.update',
          ),
          1 => NULL,
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/confirm-password' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::s8WogUISqZlBjxVK',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'password.confirm',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/confirmed-password-status' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'password.confirmation',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/two-factor-challenge' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'two-factor.login',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'generated::2LXWJqUcT23JkCQm',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/two-factor-authentication' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'two-factor.enable',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'two-factor.disable',
          ),
          1 => NULL,
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/confirmed-two-factor-authentication' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'two-factor.confirm',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/two-factor-qr-code' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'two-factor.qr-code',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/two-factor-secret-key' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'two-factor.secret-key',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/two-factor-recovery-codes' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'two-factor.recovery-codes',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'generated::yBE0NkBBGwe40wMq',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/profile' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'profile.show',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/other-browser-sessions' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'other-browser-sessions.destroy',
          ),
          1 => NULL,
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user/profile-photo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'current-user-photo.destroy',
          ),
          1 => NULL,
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/user' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'current-user.destroy',
          ),
          1 => NULL,
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/sanctum/csrf-cookie' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'sanctum.csrf-cookie',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/log-viewer/api/hosts' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.hosts',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/log-viewer/api/folders' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.folders',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/log-viewer/api/files' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.files',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/log-viewer/api/clear-cache-all' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.files.clear-cache-all',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/log-viewer/api/delete-multiple-files' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.files.delete-multiple-files',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/log-viewer/api/logs' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.logs',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/_ignition/health-check' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ignition.healthCheck',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/_ignition/execute-solution' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ignition.executeSolution',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/_ignition/update-config' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ignition.updateConfig',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/api/user' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::54SaezhYtBszyJkK',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::9IfsCDZjlTpqaYYc',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/send-mail' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::fzxzG6X3UI06ysMY',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/admin' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::lnNCdvMpua9deuAA',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/admin/main' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'admin',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/atencion_diaria/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'atencion_diaria.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/atencion_diaria' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'atencion_diaria.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/certificacion/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'certificacion.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/certificacion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'certificacion.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/vacuna/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'vacuna.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/vacuna' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'vacuna.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/licencia/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'licencia.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/licencia' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'licencia.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/diat/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diat.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/diat' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diat.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/diep/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diep.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/diep' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diep.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exalcohol' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exalcohol.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exalcohol/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exalcohol.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exaldehido' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exaldehido.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exaldehido/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exaldehido.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exhumonegro' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exhumonegro.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exhumonegro/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exhumonegro.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exmetales' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exmetales.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exmetales/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exmetales.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exepo/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exepo.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exepo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exepo.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/expsico' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'expsico.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/expsico/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'expsico.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exequilibrio' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exequilibrio.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exequilibrio/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exequilibrio.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/expvtmert' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'expvtmert.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/expvtmert/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'expvtmert.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exrespirador' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exrespirador.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exrespirador/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exrespirador.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exruido' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exruido.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exruido/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exruido.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exsalud' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exsalud.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exsalud/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exsalud.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exsomnolencia' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exsomnolencia.consulta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/consulta/exsomnolencia/search' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exsomnolencia.search',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/alcohol' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alcohol.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'alcohol.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/alcohol/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alcohol.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/aldehido' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'aldehido.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'aldehido.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/aldehido/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'aldehido.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/epo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'epo.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'epo.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/epo/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'epo.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/equilibrio' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'equilibrio.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'equilibrio.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/equilibrio/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'equilibrio.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/humonegro' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'humonegro.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'humonegro.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/humonegro/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'humonegro.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/metal' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'metal.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'metal.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/metal/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'metal.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/psico' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'psico.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'psico.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/psico/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'psico.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/pvtmert' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pvtmert.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'pvtmert.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/pvtmert/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pvtmert.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/respirador' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'respirador.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'respirador.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/respirador/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'respirador.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/ruido' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ruido.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'ruido.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/ruido/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ruido.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/salud' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'salud.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'salud.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/salud/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'salud.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/silice' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'silice.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'silice.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/silice/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'silice.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/solvente' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'solvente.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'solvente.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/solvente/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'solvente.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/somnolencia' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'somnolencia.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'somnolencia.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/examen/somnolencia/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'somnolencia.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/accidente' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'accidente.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/accidente/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/accidente_condicion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente_condicion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'accidente_condicion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/accidente_condicion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente_condicion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/afp' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'afp.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'afp.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/afp/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'afp.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/area' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'area.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'area.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/area/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'area.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/bateria' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'bateria.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'bateria.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/bateria/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'bateria.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/calificacion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'calificacion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'calificacion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/calificacion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'calificacion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/ceco' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ceco.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'ceco.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/ceco/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ceco.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/cie10' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cie10.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'cie10.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/cie10/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cie10.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/derivacion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'derivacion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'derivacion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/derivacion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'derivacion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/empresa' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'empresa.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'empresa.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/empresa/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'empresa.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/error_critico' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'error_critico.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'error_critico.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/error_critico/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'error_critico.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/estado_certificacion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_certificacion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'estado_certificacion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/estado_certificacion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_certificacion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/estado_civil' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_civil.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'estado_civil.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/estado_civil/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_civil.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/estado_epo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_epo.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'estado_epo.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/estado_epo/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_epo.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/estado_mental' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_mental.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'estado_mental.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/estado_mental/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_mental.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/exposicion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exposicion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'exposicion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/exposicion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exposicion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/fuente_incidente' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'fuente_incidente.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'fuente_incidente.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/fuente_incidente/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'fuente_incidente.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/genero' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'genero.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'genero.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/genero/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'genero.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/grupo_sanguineo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'grupo_sanguineo.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'grupo_sanguineo.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/grupo_sanguineo/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'grupo_sanguineo.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/instruccion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'instruccion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'instruccion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/instruccion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'instruccion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/ley_social' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ley_social.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'ley_social.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/ley_social/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ley_social.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/lugar_atencion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'lugar_atencion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'lugar_atencion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/lugar_atencion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'lugar_atencion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/medio_derivacion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medio_derivacion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'medio_derivacion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/medio_derivacion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medio_derivacion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/nacionalidad' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nacionalidad.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'nacionalidad.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/nacionalidad/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nacionalidad.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/nivel_riesgo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nivel_riesgo.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'nivel_riesgo.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/nivel_riesgo/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nivel_riesgo.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/planta' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'planta.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'planta.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/planta/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'planta.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/prevision' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'prevision.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'prevision.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/prevision/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'prevision.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/pueblo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pueblo.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'pueblo.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/pueblo/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pueblo.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/religion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'religion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'religion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/religion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'religion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/responsable' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'responsable.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'responsable.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/responsable/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'responsable.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/semaforo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'semaforo.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'semaforo.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/semaforo/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'semaforo.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/seguro' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'seguro.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'seguro.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/seguro/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'seguro.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/sistema_afectado' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'sistema_afectado.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'sistema_afectado.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/sistema_afectado/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'sistema_afectado.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/test_drogas' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'test_drogas.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'test_drogas.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/test_drogas/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'test_drogas.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/trastorno_cronico' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'trastorno_cronico.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'trastorno_cronico.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/trastorno_cronico/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'trastorno_cronico.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_accidente' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_accidente.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_accidente.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_accidente/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_accidente.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_atencion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_atencion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_atencion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_atencion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_atencion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_enfermedad' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_enfermedad.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_enfermedad.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_enfermedad/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_enfermedad.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_examen' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_examen.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_examen.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_examen/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_examen.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_licencia' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_licencia.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_licencia.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/tipo_licencia/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_licencia.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/turno' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'turno.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'turno.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/turno/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'turno.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/unidad' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'unidad.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'unidad.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/secundaria/unidad/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'unidad.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::rtpMXVrqCCYOFcjD',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard/personasPorEmpresa' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'personasPorEmpresa',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard/personasPorUnidad' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'personasPorUnidad',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard/personasPorPlanta' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'personasPorPlanta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard/personasPorCeco' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'personasPorCeco',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard/personasPorExpo' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'personasPorExpo',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard/expo_empresa' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'expo_empresa',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard/expo_planta' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'expo_planta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard/enfermedad_empresa' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'enfermedad_empresa',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/dashboard/enfermedades_planta' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'enfermedades_planta',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/ficha' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::nOIhxMd0w77kpV7g',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/alergia' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alergia.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'alergia.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/alergia/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alergia.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/atencion_diaria' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'atencion_diaria.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'atencion_diaria.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/atencion_diaria/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'atencion_diaria.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/certificacion' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'certificacion.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'certificacion.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/certificacion/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'certificacion.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/cirugia' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cirugia.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'cirugia.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/cirugia/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cirugia.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/diat' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diat.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'diat.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/diat/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diat.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/diep' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diep.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'diep.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/diep/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diep.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/enfermedad' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'enfermedad.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'enfermedad.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/enfermedad/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'enfermedad.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/factor' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'factor.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'factor.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/factor/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'factor.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/familiar' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'familiar.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'familiar.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/familiar/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'familiar.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/licencia' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'licencia.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'licencia.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/licencia/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'licencia.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/medicamento' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medicamento.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'medicamento.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/medicamento/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medicamento.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/paciente' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'paciente.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'paciente.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/paciente/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'paciente.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/vacuna' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'vacuna.index',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'vacuna.store',
          ),
          1 => NULL,
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      '/vacuna/create' => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'vacuna.create',
          ),
          1 => NULL,
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
    ),
    2 => 
    array (
      0 => '{^(?|/__clockwork/(?|((?:[0-9-]+|latest))/extended(*:52)|((?:[0-9-]+|latest))(?:/((?:next|previous))(?:/(\\d+))?)?(*:115)|([^/]++)(*:131)|a(?|uth(*:146)|pp(*:156))|(.+)(*:169))|/c(?|lockwork/(.+)(*:196)|ertificacion/([^/]++)(?|(*:228)|/edit(*:241)|(*:249))|irugia/([^/]++)(?|(*:276)|/edit(*:289)|(*:297)))|/reset\\-password/([^/]++)(*:332)|/l(?|og\\-viewer(?|/api/f(?|olders/([^/]++)(?|/(?|download(?|/request(*:408)|(*:416))|clear\\-cache(*:437))|(*:446))|iles/([^/]++)(?|/(?|download(?|/request(*:494)|(*:502))|clear\\-cache(*:523))|(*:532)))|(?:/((?:.*)))?(*:556))|icencia/([^/]++)(?|(*:584)|/edit(*:597)|(*:605)))|/e(?|xamen/(?|al(?|cohol/([^/]++)(?|(*:651)|/edit(*:664)|(*:672))|dehido/([^/]++)(?|(*:699)|/edit(*:712)|(*:720)))|e(?|po/([^/]++)(?|(*:748)|/edit(*:761)|(*:769))|quilibrio/([^/]++)(?|(*:799)|/edit(*:812)|(*:820)))|humonegro/([^/]++)(?|(*:851)|/edit(*:864)|(*:872))|metal/([^/]++)(?|(*:898)|/edit(*:911)|(*:919))|p(?|sico/([^/]++)(?|(*:948)|/edit(*:961)|(*:969))|vtmert/([^/]++)(?|(*:996)|/edit(*:1009)|(*:1018)))|r(?|espirador/([^/]++)(?|(*:1054)|/edit(*:1068)|(*:1077))|uido/([^/]++)(?|(*:1103)|/edit(*:1117)|(*:1126)))|s(?|alud/([^/]++)(?|(*:1157)|/edit(*:1171)|(*:1180))|ilice/([^/]++)(?|(*:1207)|/edit(*:1221)|(*:1230))|o(?|lvente/([^/]++)(?|(*:1262)|/edit(*:1276)|(*:1285))|mnolencia/([^/]++)(?|(*:1316)|/edit(*:1330)|(*:1339)))))|nfermedad/([^/]++)(?|(*:1373)|/edit(*:1387)|(*:1396)))|/secundaria/(?|a(?|ccidente(?|/([^/]++)(?|(*:1449)|/edit(*:1463)|(*:1472))|_condicion/([^/]++)(?|(*:1504)|/edit(*:1518)|(*:1527)))|fp/([^/]++)(?|(*:1552)|/edit(*:1566)|(*:1575))|rea/([^/]++)(?|(*:1600)|/edit(*:1614)|(*:1623)))|bateria/([^/]++)(?|(*:1653)|/edit(*:1667)|(*:1676))|c(?|alificacion/([^/]++)(?|(*:1713)|/edit(*:1727)|(*:1736))|eco/([^/]++)(?|(*:1761)|/edit(*:1775)|(*:1784))|ie10/([^/]++)(?|(*:1810)|/edit(*:1824)|(*:1833)))|derivacion/([^/]++)(?|(*:1866)|/edit(*:1880)|(*:1889))|e(?|mpresa/([^/]++)(?|(*:1921)|/edit(*:1935)|(*:1944))|rror_critico/([^/]++)(?|(*:1978)|/edit(*:1992)|(*:2001))|stado_(?|c(?|ertificacion/([^/]++)(?|(*:2048)|/edit(*:2062)|(*:2071))|ivil/([^/]++)(?|(*:2097)|/edit(*:2111)|(*:2120)))|epo/([^/]++)(?|(*:2146)|/edit(*:2160)|(*:2169))|mental/([^/]++)(?|(*:2197)|/edit(*:2211)|(*:2220)))|xposicion/([^/]++)(?|(*:2252)|/edit(*:2266)|(*:2275)))|fuente_incidente/([^/]++)(?|(*:2314)|/edit(*:2328)|(*:2337))|g(?|enero/([^/]++)(?|(*:2368)|/edit(*:2382)|(*:2391))|rupo_sanguineo/([^/]++)(?|(*:2427)|/edit(*:2441)|(*:2450)))|instruccion/([^/]++)(?|(*:2484)|/edit(*:2498)|(*:2507))|l(?|ey_social/([^/]++)(?|(*:2542)|/edit(*:2556)|(*:2565))|ugar_atencion/([^/]++)(?|(*:2600)|/edit(*:2614)|(*:2623)))|medio_derivacion/([^/]++)(?|(*:2662)|/edit(*:2676)|(*:2685))|n(?|acionalidad/([^/]++)(?|(*:2722)|/edit(*:2736)|(*:2745))|ivel_riesgo/([^/]++)(?|(*:2778)|/edit(*:2792)|(*:2801)))|p(?|lanta/([^/]++)(?|(*:2833)|/edit(*:2847)|(*:2856))|revision/([^/]++)(?|(*:2886)|/edit(*:2900)|(*:2909))|ueblo/([^/]++)(?|(*:2936)|/edit(*:2950)|(*:2959)))|re(?|ligion/([^/]++)(?|(*:2993)|/edit(*:3007)|(*:3016))|sponsable/([^/]++)(?|(*:3047)|/edit(*:3061)|(*:3070)))|s(?|e(?|maforo/([^/]++)(?|(*:3107)|/edit(*:3121)|(*:3130))|guro/([^/]++)(?|(*:3156)|/edit(*:3170)|(*:3179)))|istema_afectado/([^/]++)(?|(*:3217)|/edit(*:3231)|(*:3240)))|t(?|est_drogas/([^/]++)(?|(*:3277)|/edit(*:3291)|(*:3300))|rastorno_cronico/([^/]++)(?|(*:3338)|/edit(*:3352)|(*:3361))|ipo_(?|a(?|ccidente/([^/]++)(?|(*:3402)|/edit(*:3416)|(*:3425))|tencion/([^/]++)(?|(*:3454)|/edit(*:3468)|(*:3477)))|e(?|nfermedad/([^/]++)(?|(*:3513)|/edit(*:3527)|(*:3536))|xamen/([^/]++)(?|(*:3563)|/edit(*:3577)|(*:3586)))|licencia/([^/]++)(?|(*:3617)|/edit(*:3631)|(*:3640)))|urno/([^/]++)(?|(*:3667)|/edit(*:3681)|(*:3690)))|unidad/([^/]++)(?|(*:3719)|/edit(*:3733)|(*:3742)))|/a(?|lergia/([^/]++)(?|(*:3776)|/edit(*:3790)|(*:3799))|tencion_diaria/([^/]++)(?|(*:3835)|/edit(*:3849)|(*:3858)))|/di(?|at/([^/]++)(?|(*:3889)|/edit(*:3903)|(*:3912))|ep/([^/]++)(?|(*:3936)|/edit(*:3950)|(*:3959)))|/fa(?|ctor/([^/]++)(?|(*:3992)|/edit(*:4006)|(*:4015))|miliar/([^/]++)(?|(*:4043)|/edit(*:4057)|(*:4066)))|/medicamento/([^/]++)(?|(*:4101)|/edit(*:4115)|(*:4124))|/paciente/([^/]++)(?|(*:4155)|/edit(*:4169)|(*:4178))|/vacuna/([^/]++)(?|(*:4207)|/edit(*:4221)|(*:4230)))/?$}sDu',
    ),
    3 => 
    array (
      52 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::Og8VN2W8d8Rsz5Qv',
          ),
          1 => 
          array (
            0 => 'id',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      115 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::ebbzZGjND1oK7Vvn',
            'direction' => NULL,
            'count' => NULL,
          ),
          1 => 
          array (
            0 => 'id',
            1 => 'direction',
            2 => 'count',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      131 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::77ylxFaOyuO6tvsc',
          ),
          1 => 
          array (
            0 => 'id',
          ),
          2 => 
          array (
            'PUT' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      146 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::i644risBeEfsHaad',
          ),
          1 => 
          array (
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      156 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::eRAwVgNAJJSiLqem',
          ),
          1 => 
          array (
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      169 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::wlx1u6pklxUbcgLz',
          ),
          1 => 
          array (
            0 => 'path',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      196 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'generated::nyiOUHukwXzuOf9H',
          ),
          1 => 
          array (
            0 => 'path',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      228 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'certificacion.show',
          ),
          1 => 
          array (
            0 => 'certificacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      241 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'certificacion.edit',
          ),
          1 => 
          array (
            0 => 'certificacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      249 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'certificacion.update',
          ),
          1 => 
          array (
            0 => 'certificacion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'certificacion.destroy',
          ),
          1 => 
          array (
            0 => 'certificacion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      276 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cirugia.show',
          ),
          1 => 
          array (
            0 => 'cirugium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      289 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cirugia.edit',
          ),
          1 => 
          array (
            0 => 'cirugium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      297 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cirugia.update',
          ),
          1 => 
          array (
            0 => 'cirugium',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'cirugia.destroy',
          ),
          1 => 
          array (
            0 => 'cirugium',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      332 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'password.reset',
          ),
          1 => 
          array (
            0 => 'token',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      408 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.folders.request-download',
          ),
          1 => 
          array (
            0 => 'folderIdentifier',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      416 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.folders.download',
          ),
          1 => 
          array (
            0 => 'folderIdentifier',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      437 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.folders.clear-cache',
          ),
          1 => 
          array (
            0 => 'folderIdentifier',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      446 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.folders.delete',
          ),
          1 => 
          array (
            0 => 'folderIdentifier',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      494 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.files.request-download',
          ),
          1 => 
          array (
            0 => 'fileIdentifier',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      502 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.files.download',
          ),
          1 => 
          array (
            0 => 'fileIdentifier',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      523 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.files.clear-cache',
          ),
          1 => 
          array (
            0 => 'fileIdentifier',
          ),
          2 => 
          array (
            'POST' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      532 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.files.delete',
          ),
          1 => 
          array (
            0 => 'fileIdentifier',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      556 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'log-viewer.index',
            'view' => NULL,
          ),
          1 => 
          array (
            0 => 'view',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      584 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'licencia.show',
          ),
          1 => 
          array (
            0 => 'licencium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      597 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'licencia.edit',
          ),
          1 => 
          array (
            0 => 'licencium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      605 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'licencia.update',
          ),
          1 => 
          array (
            0 => 'licencium',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'licencia.destroy',
          ),
          1 => 
          array (
            0 => 'licencium',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      651 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alcohol.show',
          ),
          1 => 
          array (
            0 => 'alcohol',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      664 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alcohol.edit',
          ),
          1 => 
          array (
            0 => 'alcohol',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      672 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alcohol.update',
          ),
          1 => 
          array (
            0 => 'alcohol',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'alcohol.destroy',
          ),
          1 => 
          array (
            0 => 'alcohol',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      699 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'aldehido.show',
          ),
          1 => 
          array (
            0 => 'aldehido',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      712 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'aldehido.edit',
          ),
          1 => 
          array (
            0 => 'aldehido',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      720 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'aldehido.update',
          ),
          1 => 
          array (
            0 => 'aldehido',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'aldehido.destroy',
          ),
          1 => 
          array (
            0 => 'aldehido',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      748 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'epo.show',
          ),
          1 => 
          array (
            0 => 'epo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      761 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'epo.edit',
          ),
          1 => 
          array (
            0 => 'epo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      769 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'epo.update',
          ),
          1 => 
          array (
            0 => 'epo',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'epo.destroy',
          ),
          1 => 
          array (
            0 => 'epo',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      799 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'equilibrio.show',
          ),
          1 => 
          array (
            0 => 'equilibrio',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      812 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'equilibrio.edit',
          ),
          1 => 
          array (
            0 => 'equilibrio',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      820 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'equilibrio.update',
          ),
          1 => 
          array (
            0 => 'equilibrio',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'equilibrio.destroy',
          ),
          1 => 
          array (
            0 => 'equilibrio',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      851 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'humonegro.show',
          ),
          1 => 
          array (
            0 => 'humonegro',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      864 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'humonegro.edit',
          ),
          1 => 
          array (
            0 => 'humonegro',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      872 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'humonegro.update',
          ),
          1 => 
          array (
            0 => 'humonegro',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'humonegro.destroy',
          ),
          1 => 
          array (
            0 => 'humonegro',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      898 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'metal.show',
          ),
          1 => 
          array (
            0 => 'metal',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      911 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'metal.edit',
          ),
          1 => 
          array (
            0 => 'metal',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      919 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'metal.update',
          ),
          1 => 
          array (
            0 => 'metal',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'metal.destroy',
          ),
          1 => 
          array (
            0 => 'metal',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      948 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'psico.show',
          ),
          1 => 
          array (
            0 => 'psico',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      961 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'psico.edit',
          ),
          1 => 
          array (
            0 => 'psico',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      969 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'psico.update',
          ),
          1 => 
          array (
            0 => 'psico',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'psico.destroy',
          ),
          1 => 
          array (
            0 => 'psico',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      996 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pvtmert.show',
          ),
          1 => 
          array (
            0 => 'pvtmert',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1009 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pvtmert.edit',
          ),
          1 => 
          array (
            0 => 'pvtmert',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1018 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pvtmert.update',
          ),
          1 => 
          array (
            0 => 'pvtmert',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'pvtmert.destroy',
          ),
          1 => 
          array (
            0 => 'pvtmert',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1054 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'respirador.show',
          ),
          1 => 
          array (
            0 => 'respirador',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1068 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'respirador.edit',
          ),
          1 => 
          array (
            0 => 'respirador',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1077 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'respirador.update',
          ),
          1 => 
          array (
            0 => 'respirador',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'respirador.destroy',
          ),
          1 => 
          array (
            0 => 'respirador',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1103 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ruido.show',
          ),
          1 => 
          array (
            0 => 'ruido',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1117 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ruido.edit',
          ),
          1 => 
          array (
            0 => 'ruido',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1126 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ruido.update',
          ),
          1 => 
          array (
            0 => 'ruido',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'ruido.destroy',
          ),
          1 => 
          array (
            0 => 'ruido',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1157 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'salud.show',
          ),
          1 => 
          array (
            0 => 'salud',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1171 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'salud.edit',
          ),
          1 => 
          array (
            0 => 'salud',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1180 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'salud.update',
          ),
          1 => 
          array (
            0 => 'salud',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'salud.destroy',
          ),
          1 => 
          array (
            0 => 'salud',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1207 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'silice.show',
          ),
          1 => 
          array (
            0 => 'silouse',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1221 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'silice.edit',
          ),
          1 => 
          array (
            0 => 'silouse',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1230 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'silice.update',
          ),
          1 => 
          array (
            0 => 'silouse',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'silice.destroy',
          ),
          1 => 
          array (
            0 => 'silouse',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1262 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'solvente.show',
          ),
          1 => 
          array (
            0 => 'solvente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1276 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'solvente.edit',
          ),
          1 => 
          array (
            0 => 'solvente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1285 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'solvente.update',
          ),
          1 => 
          array (
            0 => 'solvente',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'solvente.destroy',
          ),
          1 => 
          array (
            0 => 'solvente',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1316 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'somnolencia.show',
          ),
          1 => 
          array (
            0 => 'somnolencium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1330 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'somnolencia.edit',
          ),
          1 => 
          array (
            0 => 'somnolencium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1339 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'somnolencia.update',
          ),
          1 => 
          array (
            0 => 'somnolencium',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'somnolencia.destroy',
          ),
          1 => 
          array (
            0 => 'somnolencium',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1373 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'enfermedad.show',
          ),
          1 => 
          array (
            0 => 'enfermedad',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1387 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'enfermedad.edit',
          ),
          1 => 
          array (
            0 => 'enfermedad',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1396 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'enfermedad.update',
          ),
          1 => 
          array (
            0 => 'enfermedad',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'enfermedad.destroy',
          ),
          1 => 
          array (
            0 => 'enfermedad',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1449 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente.show',
          ),
          1 => 
          array (
            0 => 'accidente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1463 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente.edit',
          ),
          1 => 
          array (
            0 => 'accidente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1472 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente.update',
          ),
          1 => 
          array (
            0 => 'accidente',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'accidente.destroy',
          ),
          1 => 
          array (
            0 => 'accidente',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1504 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente_condicion.show',
          ),
          1 => 
          array (
            0 => 'accidente_condicion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1518 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente_condicion.edit',
          ),
          1 => 
          array (
            0 => 'accidente_condicion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1527 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'accidente_condicion.update',
          ),
          1 => 
          array (
            0 => 'accidente_condicion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'accidente_condicion.destroy',
          ),
          1 => 
          array (
            0 => 'accidente_condicion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1552 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'afp.show',
          ),
          1 => 
          array (
            0 => 'afp',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1566 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'afp.edit',
          ),
          1 => 
          array (
            0 => 'afp',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1575 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'afp.update',
          ),
          1 => 
          array (
            0 => 'afp',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'afp.destroy',
          ),
          1 => 
          array (
            0 => 'afp',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1600 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'area.show',
          ),
          1 => 
          array (
            0 => 'area',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1614 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'area.edit',
          ),
          1 => 
          array (
            0 => 'area',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1623 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'area.update',
          ),
          1 => 
          array (
            0 => 'area',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'area.destroy',
          ),
          1 => 
          array (
            0 => 'area',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1653 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'bateria.show',
          ),
          1 => 
          array (
            0 => 'baterium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1667 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'bateria.edit',
          ),
          1 => 
          array (
            0 => 'baterium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1676 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'bateria.update',
          ),
          1 => 
          array (
            0 => 'baterium',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'bateria.destroy',
          ),
          1 => 
          array (
            0 => 'baterium',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1713 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'calificacion.show',
          ),
          1 => 
          array (
            0 => 'calificacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1727 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'calificacion.edit',
          ),
          1 => 
          array (
            0 => 'calificacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1736 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'calificacion.update',
          ),
          1 => 
          array (
            0 => 'calificacion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'calificacion.destroy',
          ),
          1 => 
          array (
            0 => 'calificacion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1761 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ceco.show',
          ),
          1 => 
          array (
            0 => 'ceco',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1775 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ceco.edit',
          ),
          1 => 
          array (
            0 => 'ceco',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1784 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ceco.update',
          ),
          1 => 
          array (
            0 => 'ceco',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'ceco.destroy',
          ),
          1 => 
          array (
            0 => 'ceco',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1810 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cie10.show',
          ),
          1 => 
          array (
            0 => 'cie10',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1824 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cie10.edit',
          ),
          1 => 
          array (
            0 => 'cie10',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1833 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'cie10.update',
          ),
          1 => 
          array (
            0 => 'cie10',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'cie10.destroy',
          ),
          1 => 
          array (
            0 => 'cie10',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1866 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'derivacion.show',
          ),
          1 => 
          array (
            0 => 'derivacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1880 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'derivacion.edit',
          ),
          1 => 
          array (
            0 => 'derivacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1889 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'derivacion.update',
          ),
          1 => 
          array (
            0 => 'derivacion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'derivacion.destroy',
          ),
          1 => 
          array (
            0 => 'derivacion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1921 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'empresa.show',
          ),
          1 => 
          array (
            0 => 'empresa',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1935 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'empresa.edit',
          ),
          1 => 
          array (
            0 => 'empresa',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      1944 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'empresa.update',
          ),
          1 => 
          array (
            0 => 'empresa',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'empresa.destroy',
          ),
          1 => 
          array (
            0 => 'empresa',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1978 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'error_critico.show',
          ),
          1 => 
          array (
            0 => 'error_critico',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      1992 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'error_critico.edit',
          ),
          1 => 
          array (
            0 => 'error_critico',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2001 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'error_critico.update',
          ),
          1 => 
          array (
            0 => 'error_critico',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'error_critico.destroy',
          ),
          1 => 
          array (
            0 => 'error_critico',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2048 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_certificacion.show',
          ),
          1 => 
          array (
            0 => 'estado_certificacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2062 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_certificacion.edit',
          ),
          1 => 
          array (
            0 => 'estado_certificacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2071 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_certificacion.update',
          ),
          1 => 
          array (
            0 => 'estado_certificacion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'estado_certificacion.destroy',
          ),
          1 => 
          array (
            0 => 'estado_certificacion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2097 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_civil.show',
          ),
          1 => 
          array (
            0 => 'estado_civil',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2111 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_civil.edit',
          ),
          1 => 
          array (
            0 => 'estado_civil',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2120 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_civil.update',
          ),
          1 => 
          array (
            0 => 'estado_civil',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'estado_civil.destroy',
          ),
          1 => 
          array (
            0 => 'estado_civil',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2146 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_epo.show',
          ),
          1 => 
          array (
            0 => 'estado_epo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2160 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_epo.edit',
          ),
          1 => 
          array (
            0 => 'estado_epo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2169 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_epo.update',
          ),
          1 => 
          array (
            0 => 'estado_epo',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'estado_epo.destroy',
          ),
          1 => 
          array (
            0 => 'estado_epo',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2197 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_mental.show',
          ),
          1 => 
          array (
            0 => 'estado_mental',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2211 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_mental.edit',
          ),
          1 => 
          array (
            0 => 'estado_mental',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2220 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'estado_mental.update',
          ),
          1 => 
          array (
            0 => 'estado_mental',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'estado_mental.destroy',
          ),
          1 => 
          array (
            0 => 'estado_mental',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2252 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exposicion.show',
          ),
          1 => 
          array (
            0 => 'exposicion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2266 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exposicion.edit',
          ),
          1 => 
          array (
            0 => 'exposicion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2275 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'exposicion.update',
          ),
          1 => 
          array (
            0 => 'exposicion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'exposicion.destroy',
          ),
          1 => 
          array (
            0 => 'exposicion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2314 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'fuente_incidente.show',
          ),
          1 => 
          array (
            0 => 'fuente_incidente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2328 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'fuente_incidente.edit',
          ),
          1 => 
          array (
            0 => 'fuente_incidente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2337 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'fuente_incidente.update',
          ),
          1 => 
          array (
            0 => 'fuente_incidente',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'fuente_incidente.destroy',
          ),
          1 => 
          array (
            0 => 'fuente_incidente',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2368 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'genero.show',
          ),
          1 => 
          array (
            0 => 'genero',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2382 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'genero.edit',
          ),
          1 => 
          array (
            0 => 'genero',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2391 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'genero.update',
          ),
          1 => 
          array (
            0 => 'genero',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'genero.destroy',
          ),
          1 => 
          array (
            0 => 'genero',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2427 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'grupo_sanguineo.show',
          ),
          1 => 
          array (
            0 => 'grupo_sanguineo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2441 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'grupo_sanguineo.edit',
          ),
          1 => 
          array (
            0 => 'grupo_sanguineo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2450 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'grupo_sanguineo.update',
          ),
          1 => 
          array (
            0 => 'grupo_sanguineo',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'grupo_sanguineo.destroy',
          ),
          1 => 
          array (
            0 => 'grupo_sanguineo',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2484 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'instruccion.show',
          ),
          1 => 
          array (
            0 => 'instruccion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2498 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'instruccion.edit',
          ),
          1 => 
          array (
            0 => 'instruccion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2507 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'instruccion.update',
          ),
          1 => 
          array (
            0 => 'instruccion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'instruccion.destroy',
          ),
          1 => 
          array (
            0 => 'instruccion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2542 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ley_social.show',
          ),
          1 => 
          array (
            0 => 'ley_social',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2556 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ley_social.edit',
          ),
          1 => 
          array (
            0 => 'ley_social',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2565 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'ley_social.update',
          ),
          1 => 
          array (
            0 => 'ley_social',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'ley_social.destroy',
          ),
          1 => 
          array (
            0 => 'ley_social',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2600 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'lugar_atencion.show',
          ),
          1 => 
          array (
            0 => 'lugar_atencion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2614 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'lugar_atencion.edit',
          ),
          1 => 
          array (
            0 => 'lugar_atencion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2623 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'lugar_atencion.update',
          ),
          1 => 
          array (
            0 => 'lugar_atencion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'lugar_atencion.destroy',
          ),
          1 => 
          array (
            0 => 'lugar_atencion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2662 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medio_derivacion.show',
          ),
          1 => 
          array (
            0 => 'medio_derivacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2676 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medio_derivacion.edit',
          ),
          1 => 
          array (
            0 => 'medio_derivacion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2685 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medio_derivacion.update',
          ),
          1 => 
          array (
            0 => 'medio_derivacion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'medio_derivacion.destroy',
          ),
          1 => 
          array (
            0 => 'medio_derivacion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2722 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nacionalidad.show',
          ),
          1 => 
          array (
            0 => 'nacionalidad',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2736 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nacionalidad.edit',
          ),
          1 => 
          array (
            0 => 'nacionalidad',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2745 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nacionalidad.update',
          ),
          1 => 
          array (
            0 => 'nacionalidad',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'nacionalidad.destroy',
          ),
          1 => 
          array (
            0 => 'nacionalidad',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2778 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nivel_riesgo.show',
          ),
          1 => 
          array (
            0 => 'nivel_riesgo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2792 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nivel_riesgo.edit',
          ),
          1 => 
          array (
            0 => 'nivel_riesgo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2801 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'nivel_riesgo.update',
          ),
          1 => 
          array (
            0 => 'nivel_riesgo',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'nivel_riesgo.destroy',
          ),
          1 => 
          array (
            0 => 'nivel_riesgo',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2833 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'planta.show',
          ),
          1 => 
          array (
            0 => 'plantum',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2847 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'planta.edit',
          ),
          1 => 
          array (
            0 => 'plantum',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2856 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'planta.update',
          ),
          1 => 
          array (
            0 => 'plantum',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'planta.destroy',
          ),
          1 => 
          array (
            0 => 'plantum',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2886 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'prevision.show',
          ),
          1 => 
          array (
            0 => 'prevision',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2900 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'prevision.edit',
          ),
          1 => 
          array (
            0 => 'prevision',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2909 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'prevision.update',
          ),
          1 => 
          array (
            0 => 'prevision',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'prevision.destroy',
          ),
          1 => 
          array (
            0 => 'prevision',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2936 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pueblo.show',
          ),
          1 => 
          array (
            0 => 'pueblo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2950 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pueblo.edit',
          ),
          1 => 
          array (
            0 => 'pueblo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      2959 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'pueblo.update',
          ),
          1 => 
          array (
            0 => 'pueblo',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'pueblo.destroy',
          ),
          1 => 
          array (
            0 => 'pueblo',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      2993 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'religion.show',
          ),
          1 => 
          array (
            0 => 'religion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3007 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'religion.edit',
          ),
          1 => 
          array (
            0 => 'religion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3016 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'religion.update',
          ),
          1 => 
          array (
            0 => 'religion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'religion.destroy',
          ),
          1 => 
          array (
            0 => 'religion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3047 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'responsable.show',
          ),
          1 => 
          array (
            0 => 'responsable',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3061 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'responsable.edit',
          ),
          1 => 
          array (
            0 => 'responsable',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3070 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'responsable.update',
          ),
          1 => 
          array (
            0 => 'responsable',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'responsable.destroy',
          ),
          1 => 
          array (
            0 => 'responsable',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3107 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'semaforo.show',
          ),
          1 => 
          array (
            0 => 'semaforo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3121 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'semaforo.edit',
          ),
          1 => 
          array (
            0 => 'semaforo',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3130 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'semaforo.update',
          ),
          1 => 
          array (
            0 => 'semaforo',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'semaforo.destroy',
          ),
          1 => 
          array (
            0 => 'semaforo',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3156 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'seguro.show',
          ),
          1 => 
          array (
            0 => 'seguro',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3170 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'seguro.edit',
          ),
          1 => 
          array (
            0 => 'seguro',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3179 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'seguro.update',
          ),
          1 => 
          array (
            0 => 'seguro',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'seguro.destroy',
          ),
          1 => 
          array (
            0 => 'seguro',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3217 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'sistema_afectado.show',
          ),
          1 => 
          array (
            0 => 'sistema_afectado',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3231 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'sistema_afectado.edit',
          ),
          1 => 
          array (
            0 => 'sistema_afectado',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3240 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'sistema_afectado.update',
          ),
          1 => 
          array (
            0 => 'sistema_afectado',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'sistema_afectado.destroy',
          ),
          1 => 
          array (
            0 => 'sistema_afectado',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3277 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'test_drogas.show',
          ),
          1 => 
          array (
            0 => 'test_droga',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3291 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'test_drogas.edit',
          ),
          1 => 
          array (
            0 => 'test_droga',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3300 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'test_drogas.update',
          ),
          1 => 
          array (
            0 => 'test_droga',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'test_drogas.destroy',
          ),
          1 => 
          array (
            0 => 'test_droga',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3338 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'trastorno_cronico.show',
          ),
          1 => 
          array (
            0 => 'trastorno_cronico',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3352 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'trastorno_cronico.edit',
          ),
          1 => 
          array (
            0 => 'trastorno_cronico',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3361 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'trastorno_cronico.update',
          ),
          1 => 
          array (
            0 => 'trastorno_cronico',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'trastorno_cronico.destroy',
          ),
          1 => 
          array (
            0 => 'trastorno_cronico',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3402 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_accidente.show',
          ),
          1 => 
          array (
            0 => 'tipo_accidente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3416 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_accidente.edit',
          ),
          1 => 
          array (
            0 => 'tipo_accidente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3425 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_accidente.update',
          ),
          1 => 
          array (
            0 => 'tipo_accidente',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_accidente.destroy',
          ),
          1 => 
          array (
            0 => 'tipo_accidente',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3454 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_atencion.show',
          ),
          1 => 
          array (
            0 => 'tipo_atencion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3468 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_atencion.edit',
          ),
          1 => 
          array (
            0 => 'tipo_atencion',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3477 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_atencion.update',
          ),
          1 => 
          array (
            0 => 'tipo_atencion',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_atencion.destroy',
          ),
          1 => 
          array (
            0 => 'tipo_atencion',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3513 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_enfermedad.show',
          ),
          1 => 
          array (
            0 => 'tipo_enfermedad',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3527 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_enfermedad.edit',
          ),
          1 => 
          array (
            0 => 'tipo_enfermedad',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3536 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_enfermedad.update',
          ),
          1 => 
          array (
            0 => 'tipo_enfermedad',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_enfermedad.destroy',
          ),
          1 => 
          array (
            0 => 'tipo_enfermedad',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3563 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_examen.show',
          ),
          1 => 
          array (
            0 => 'tipo_examan',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3577 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_examen.edit',
          ),
          1 => 
          array (
            0 => 'tipo_examan',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3586 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_examen.update',
          ),
          1 => 
          array (
            0 => 'tipo_examan',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_examen.destroy',
          ),
          1 => 
          array (
            0 => 'tipo_examan',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3617 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_licencia.show',
          ),
          1 => 
          array (
            0 => 'tipo_licencium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3631 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_licencia.edit',
          ),
          1 => 
          array (
            0 => 'tipo_licencium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3640 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_licencia.update',
          ),
          1 => 
          array (
            0 => 'tipo_licencium',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'tipo_licencia.destroy',
          ),
          1 => 
          array (
            0 => 'tipo_licencium',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3667 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'turno.show',
          ),
          1 => 
          array (
            0 => 'turno',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3681 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'turno.edit',
          ),
          1 => 
          array (
            0 => 'turno',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3690 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'turno.update',
          ),
          1 => 
          array (
            0 => 'turno',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'turno.destroy',
          ),
          1 => 
          array (
            0 => 'turno',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3719 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'unidad.show',
          ),
          1 => 
          array (
            0 => 'unidad',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3733 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'unidad.edit',
          ),
          1 => 
          array (
            0 => 'unidad',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3742 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'unidad.update',
          ),
          1 => 
          array (
            0 => 'unidad',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'unidad.destroy',
          ),
          1 => 
          array (
            0 => 'unidad',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3776 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alergia.show',
          ),
          1 => 
          array (
            0 => 'alergium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3790 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alergia.edit',
          ),
          1 => 
          array (
            0 => 'alergium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3799 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'alergia.update',
          ),
          1 => 
          array (
            0 => 'alergium',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'alergia.destroy',
          ),
          1 => 
          array (
            0 => 'alergium',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3835 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'atencion_diaria.show',
          ),
          1 => 
          array (
            0 => 'atencion_diarium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3849 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'atencion_diaria.edit',
          ),
          1 => 
          array (
            0 => 'atencion_diarium',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3858 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'atencion_diaria.update',
          ),
          1 => 
          array (
            0 => 'atencion_diarium',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'atencion_diaria.destroy',
          ),
          1 => 
          array (
            0 => 'atencion_diarium',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3889 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diat.show',
          ),
          1 => 
          array (
            0 => 'diat',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3903 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diat.edit',
          ),
          1 => 
          array (
            0 => 'diat',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3912 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diat.update',
          ),
          1 => 
          array (
            0 => 'diat',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'diat.destroy',
          ),
          1 => 
          array (
            0 => 'diat',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3936 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diep.show',
          ),
          1 => 
          array (
            0 => 'diep',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3950 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diep.edit',
          ),
          1 => 
          array (
            0 => 'diep',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      3959 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'diep.update',
          ),
          1 => 
          array (
            0 => 'diep',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'diep.destroy',
          ),
          1 => 
          array (
            0 => 'diep',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      3992 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'factor.show',
          ),
          1 => 
          array (
            0 => 'factor',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      4006 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'factor.edit',
          ),
          1 => 
          array (
            0 => 'factor',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      4015 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'factor.update',
          ),
          1 => 
          array (
            0 => 'factor',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'factor.destroy',
          ),
          1 => 
          array (
            0 => 'factor',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      4043 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'familiar.show',
          ),
          1 => 
          array (
            0 => 'familiar',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      4057 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'familiar.edit',
          ),
          1 => 
          array (
            0 => 'familiar',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      4066 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'familiar.update',
          ),
          1 => 
          array (
            0 => 'familiar',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'familiar.destroy',
          ),
          1 => 
          array (
            0 => 'familiar',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      4101 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medicamento.show',
          ),
          1 => 
          array (
            0 => 'medicamento',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      4115 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medicamento.edit',
          ),
          1 => 
          array (
            0 => 'medicamento',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      4124 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'medicamento.update',
          ),
          1 => 
          array (
            0 => 'medicamento',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'medicamento.destroy',
          ),
          1 => 
          array (
            0 => 'medicamento',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      4155 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'paciente.show',
          ),
          1 => 
          array (
            0 => 'paciente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      4169 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'paciente.edit',
          ),
          1 => 
          array (
            0 => 'paciente',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      4178 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'paciente.update',
          ),
          1 => 
          array (
            0 => 'paciente',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'paciente.destroy',
          ),
          1 => 
          array (
            0 => 'paciente',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      4207 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'vacuna.show',
          ),
          1 => 
          array (
            0 => 'vacuna',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
      ),
      4221 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'vacuna.edit',
          ),
          1 => 
          array (
            0 => 'vacuna',
          ),
          2 => 
          array (
            'GET' => 0,
            'HEAD' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => false,
          6 => NULL,
        ),
      ),
      4230 => 
      array (
        0 => 
        array (
          0 => 
          array (
            '_route' => 'vacuna.update',
          ),
          1 => 
          array (
            0 => 'vacuna',
          ),
          2 => 
          array (
            'PUT' => 0,
            'PATCH' => 1,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        1 => 
        array (
          0 => 
          array (
            '_route' => 'vacuna.destroy',
          ),
          1 => 
          array (
            0 => 'vacuna',
          ),
          2 => 
          array (
            'DELETE' => 0,
          ),
          3 => NULL,
          4 => false,
          5 => true,
          6 => NULL,
        ),
        2 => 
        array (
          0 => NULL,
          1 => NULL,
          2 => NULL,
          3 => NULL,
          4 => false,
          5 => false,
          6 => 0,
        ),
      ),
    ),
    4 => NULL,
  ),
  'attributes' => 
  array (
    'generated::Og8VN2W8d8Rsz5Qv' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '__clockwork/{id}/extended',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@getExtendedData',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@getExtendedData',
        'as' => 'generated::Og8VN2W8d8Rsz5Qv',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
        'id' => '([0-9-]+|latest)',
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::ebbzZGjND1oK7Vvn' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '__clockwork/{id}/{direction?}/{count?}',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@getData',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@getData',
        'as' => 'generated::ebbzZGjND1oK7Vvn',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
        'id' => '([0-9-]+|latest)',
        'direction' => '(next|previous)',
        'count' => '\\d+',
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::77ylxFaOyuO6tvsc' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => '__clockwork/{id}',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@updateData',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@updateData',
        'as' => 'generated::77ylxFaOyuO6tvsc',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::i644risBeEfsHaad' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => '__clockwork/auth',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@authenticate',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@authenticate',
        'as' => 'generated::i644risBeEfsHaad',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::47d3GT11MTAQZP1T' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'clockwork',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@webRedirect',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@webRedirect',
        'as' => 'generated::47d3GT11MTAQZP1T',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::FAx3X9TCQTCjZYvO' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'clockwork/app',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@webIndex',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@webIndex',
        'as' => 'generated::FAx3X9TCQTCjZYvO',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::nyiOUHukwXzuOf9H' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'clockwork/{path}',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@webAsset',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@webAsset',
        'as' => 'generated::nyiOUHukwXzuOf9H',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
        'path' => '.+',
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::DbEa3iixEoFQqEc5' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '__clockwork',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@webRedirect',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@webRedirect',
        'as' => 'generated::DbEa3iixEoFQqEc5',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::eRAwVgNAJJSiLqem' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '__clockwork/app',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@webIndex',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@webIndex',
        'as' => 'generated::eRAwVgNAJJSiLqem',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::wlx1u6pklxUbcgLz' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '__clockwork/{path}',
      'action' => 
      array (
        'uses' => 'Clockwork\\Support\\Laravel\\ClockworkController@webAsset',
        'controller' => 'Clockwork\\Support\\Laravel\\ClockworkController@webAsset',
        'as' => 'generated::wlx1u6pklxUbcgLz',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
        'path' => '.+',
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'login' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'login',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\AuthenticatedSessionController@create',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\AuthenticatedSessionController@create',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'login',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::XlipGWkuZkvxjpSp' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'login',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
          2 => 'throttle:login',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\AuthenticatedSessionController@store',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\AuthenticatedSessionController@store',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'generated::XlipGWkuZkvxjpSp',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'logout' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'logout',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\AuthenticatedSessionController@destroy',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\AuthenticatedSessionController@destroy',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'logout',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'password.request' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'forgot-password',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\PasswordResetLinkController@create',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\PasswordResetLinkController@create',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'password.request',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'password.reset' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'reset-password/{token}',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\NewPasswordController@create',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\NewPasswordController@create',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'password.reset',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'password.email' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'forgot-password',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\PasswordResetLinkController@store',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\PasswordResetLinkController@store',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'password.email',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'password.update' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'reset-password',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\NewPasswordController@store',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\NewPasswordController@store',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'password.update',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'register' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'register',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\RegisteredUserController@create',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\RegisteredUserController@create',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'register',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::ZcSNCVMAJxaGbwu8' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'register',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\RegisteredUserController@store',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\RegisteredUserController@store',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'generated::ZcSNCVMAJxaGbwu8',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'user-profile-information.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'user/profile-information',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\ProfileInformationController@update',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\ProfileInformationController@update',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'user-profile-information.update',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'user-password.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
      ),
      'uri' => 'user/password',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\PasswordController@update',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\PasswordController@update',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'user-password.update',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::s8WogUISqZlBjxVK' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'user/confirm-password',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\ConfirmablePasswordController@show',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\ConfirmablePasswordController@show',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'generated::s8WogUISqZlBjxVK',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'password.confirmation' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'user/confirmed-password-status',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\ConfirmedPasswordStatusController@show',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\ConfirmedPasswordStatusController@show',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'password.confirmation',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'password.confirm' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'user/confirm-password',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\ConfirmablePasswordController@store',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\ConfirmablePasswordController@store',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'password.confirm',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'two-factor.login' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'two-factor-challenge',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorAuthenticatedSessionController@create',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorAuthenticatedSessionController@create',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'two-factor.login',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::2LXWJqUcT23JkCQm' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'two-factor-challenge',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'guest:web',
          2 => 'throttle:two-factor',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorAuthenticatedSessionController@store',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorAuthenticatedSessionController@store',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'generated::2LXWJqUcT23JkCQm',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'two-factor.enable' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'user/two-factor-authentication',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
          2 => 'password.confirm',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorAuthenticationController@store',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorAuthenticationController@store',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'two-factor.enable',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'two-factor.confirm' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'user/confirmed-two-factor-authentication',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
          2 => 'password.confirm',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\ConfirmedTwoFactorAuthenticationController@store',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\ConfirmedTwoFactorAuthenticationController@store',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'two-factor.confirm',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'two-factor.disable' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'user/two-factor-authentication',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
          2 => 'password.confirm',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorAuthenticationController@destroy',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorAuthenticationController@destroy',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'two-factor.disable',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'two-factor.qr-code' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'user/two-factor-qr-code',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
          2 => 'password.confirm',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorQrCodeController@show',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorQrCodeController@show',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'two-factor.qr-code',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'two-factor.secret-key' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'user/two-factor-secret-key',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
          2 => 'password.confirm',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorSecretKeyController@show',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\TwoFactorSecretKeyController@show',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'two-factor.secret-key',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'two-factor.recovery-codes' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'user/two-factor-recovery-codes',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
          2 => 'password.confirm',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\RecoveryCodeController@index',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\RecoveryCodeController@index',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'two-factor.recovery-codes',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::yBE0NkBBGwe40wMq' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'user/two-factor-recovery-codes',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:web',
          2 => 'password.confirm',
        ),
        'uses' => 'Laravel\\Fortify\\Http\\Controllers\\RecoveryCodeController@store',
        'controller' => 'Laravel\\Fortify\\Http\\Controllers\\RecoveryCodeController@store',
        'namespace' => 'Laravel\\Fortify\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'generated::yBE0NkBBGwe40wMq',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'profile.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'user/profile',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
        ),
        'uses' => 'Laravel\\Jetstream\\Http\\Controllers\\Inertia\\UserProfileController@show',
        'controller' => 'Laravel\\Jetstream\\Http\\Controllers\\Inertia\\UserProfileController@show',
        'namespace' => 'Laravel\\Jetstream\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'profile.show',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'other-browser-sessions.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'user/other-browser-sessions',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
        ),
        'uses' => 'Laravel\\Jetstream\\Http\\Controllers\\Inertia\\OtherBrowserSessionsController@destroy',
        'controller' => 'Laravel\\Jetstream\\Http\\Controllers\\Inertia\\OtherBrowserSessionsController@destroy',
        'namespace' => 'Laravel\\Jetstream\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'other-browser-sessions.destroy',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'current-user-photo.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'user/profile-photo',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
        ),
        'uses' => 'Laravel\\Jetstream\\Http\\Controllers\\Inertia\\ProfilePhotoController@destroy',
        'controller' => 'Laravel\\Jetstream\\Http\\Controllers\\Inertia\\ProfilePhotoController@destroy',
        'namespace' => 'Laravel\\Jetstream\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'current-user-photo.destroy',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'current-user.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'user',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
        ),
        'uses' => 'Laravel\\Jetstream\\Http\\Controllers\\Inertia\\CurrentUserController@destroy',
        'controller' => 'Laravel\\Jetstream\\Http\\Controllers\\Inertia\\CurrentUserController@destroy',
        'namespace' => 'Laravel\\Jetstream\\Http\\Controllers',
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'current-user.destroy',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'sanctum.csrf-cookie' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'sanctum/csrf-cookie',
      'action' => 
      array (
        'uses' => 'Laravel\\Sanctum\\Http\\Controllers\\CsrfCookieController@show',
        'controller' => 'Laravel\\Sanctum\\Http\\Controllers\\CsrfCookieController@show',
        'namespace' => NULL,
        'prefix' => 'sanctum',
        'where' => 
        array (
        ),
        'middleware' => 
        array (
          0 => 'web',
        ),
        'as' => 'sanctum.csrf-cookie',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.hosts' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'log-viewer/api/hosts',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\HostsController@index',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\HostsController@index',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.hosts',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.folders' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'log-viewer/api/folders',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@index',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@index',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.folders',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.folders.request-download' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'log-viewer/api/folders/{folderIdentifier}/download/request',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@requestDownload',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@requestDownload',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.folders.request-download',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.folders.clear-cache' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'log-viewer/api/folders/{folderIdentifier}/clear-cache',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@clearCache',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@clearCache',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.folders.clear-cache',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.folders.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'log-viewer/api/folders/{folderIdentifier}',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@delete',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@delete',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.folders.delete',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.files' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'log-viewer/api/files',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@index',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@index',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.files',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.files.request-download' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'log-viewer/api/files/{fileIdentifier}/download/request',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@requestDownload',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@requestDownload',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.files.request-download',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.files.clear-cache' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'log-viewer/api/files/{fileIdentifier}/clear-cache',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@clearCache',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@clearCache',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.files.clear-cache',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.files.delete' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'log-viewer/api/files/{fileIdentifier}',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@delete',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@delete',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.files.delete',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.files.clear-cache-all' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'log-viewer/api/clear-cache-all',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@clearCacheAll',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@clearCacheAll',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.files.clear-cache-all',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.files.delete-multiple-files' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'log-viewer/api/delete-multiple-files',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@deleteMultipleFiles',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@deleteMultipleFiles',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.files.delete-multiple-files',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.logs' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'log-viewer/api/logs',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Opcodes\\LogViewer\\Http\\Middleware\\ForwardRequestToHostMiddleware',
          3 => 'Opcodes\\LogViewer\\Http\\Middleware\\JsonResourceWithoutWrappingMiddleware',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\LogsController@index',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\LogsController@index',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.logs',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.folders.download' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'log-viewer/api/folders/{folderIdentifier}/download',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Illuminate\\Routing\\Middleware\\ValidateSignature',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@download',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FoldersController@download',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.folders.download',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.files.download' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'log-viewer/api/files/{fileIdentifier}/download',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'Opcodes\\LogViewer\\Http\\Middleware\\EnsureFrontendRequestsAreStateful',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
          2 => 'Illuminate\\Routing\\Middleware\\ValidateSignature',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@download',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\FilesController@download',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer/api',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.files.download',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'log-viewer.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'log-viewer/{view?}',
      'action' => 
      array (
        'domain' => NULL,
        'middleware' => 
        array (
          0 => 'web',
          1 => 'Opcodes\\LogViewer\\Http\\Middleware\\AuthorizeLogViewer',
        ),
        'uses' => 'Opcodes\\LogViewer\\Http\\Controllers\\IndexController@__invoke',
        'controller' => 'Opcodes\\LogViewer\\Http\\Controllers\\IndexController',
        'namespace' => 'Opcodes\\LogViewer\\Http\\Controllers',
        'prefix' => 'log-viewer',
        'where' => 
        array (
        ),
        'as' => 'log-viewer.index',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
        'view' => '(.*)',
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ignition.healthCheck' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '_ignition/health-check',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'Spatie\\LaravelIgnition\\Http\\Middleware\\RunnableSolutionsEnabled',
        ),
        'uses' => 'Spatie\\LaravelIgnition\\Http\\Controllers\\HealthCheckController@__invoke',
        'controller' => 'Spatie\\LaravelIgnition\\Http\\Controllers\\HealthCheckController',
        'as' => 'ignition.healthCheck',
        'namespace' => NULL,
        'prefix' => '_ignition',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ignition.executeSolution' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => '_ignition/execute-solution',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'Spatie\\LaravelIgnition\\Http\\Middleware\\RunnableSolutionsEnabled',
        ),
        'uses' => 'Spatie\\LaravelIgnition\\Http\\Controllers\\ExecuteSolutionController@__invoke',
        'controller' => 'Spatie\\LaravelIgnition\\Http\\Controllers\\ExecuteSolutionController',
        'as' => 'ignition.executeSolution',
        'namespace' => NULL,
        'prefix' => '_ignition',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ignition.updateConfig' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => '_ignition/update-config',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'Spatie\\LaravelIgnition\\Http\\Middleware\\RunnableSolutionsEnabled',
        ),
        'uses' => 'Spatie\\LaravelIgnition\\Http\\Controllers\\UpdateConfigController@__invoke',
        'controller' => 'Spatie\\LaravelIgnition\\Http\\Controllers\\UpdateConfigController',
        'as' => 'ignition.updateConfig',
        'namespace' => NULL,
        'prefix' => '_ignition',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::54SaezhYtBszyJkK' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'api/user',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'api',
          1 => 'auth:sanctum',
        ),
        'uses' => 'O:55:"Laravel\\SerializableClosure\\UnsignedSerializableClosure":1:{s:12:"serializable";O:46:"Laravel\\SerializableClosure\\Serializers\\Native":5:{s:3:"use";a:0:{}s:8:"function";s:77:"function (\\Illuminate\\Http\\Request $request) {
    return $request->user();
}";s:5:"scope";s:37:"Illuminate\\Routing\\RouteFileRegistrar";s:4:"this";N;s:4:"self";s:32:"0000000000000f020000000000000000";}}',
        'namespace' => NULL,
        'prefix' => 'api',
        'where' => 
        array (
        ),
        'as' => 'generated::54SaezhYtBszyJkK',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::9IfsCDZjlTpqaYYc' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => '/',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
        ),
        'uses' => 'O:55:"Laravel\\SerializableClosure\\UnsignedSerializableClosure":1:{s:12:"serializable";O:46:"Laravel\\SerializableClosure\\Serializers\\Native":5:{s:3:"use";a:0:{}s:8:"function";s:330:"function () {
    return \\Inertia\\Inertia::render(\'Welcome\', [
        \'canLogin\' => \\Illuminate\\Support\\Facades\\Route::has(\'login\'),
        \'canRegister\' => \\Illuminate\\Support\\Facades\\Route::has(\'register\'),
        \'laravelVersion\' => \\Illuminate\\Foundation\\Application::VERSION,
        \'phpVersion\' => PHP_VERSION,
    ]);
}";s:5:"scope";s:37:"Illuminate\\Routing\\RouteFileRegistrar";s:4:"this";N;s:4:"self";s:32:"0000000000000f040000000000000000";}}',
        'namespace' => NULL,
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'generated::9IfsCDZjlTpqaYYc',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::fzxzG6X3UI06ysMY' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'send-mail',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
        ),
        'uses' => 'App\\Http\\Controllers\\MailController@index',
        'controller' => 'App\\Http\\Controllers\\MailController@index',
        'namespace' => NULL,
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'generated::fzxzG6X3UI06ysMY',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::lnNCdvMpua9deuAA' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'admin',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'uses' => 'O:55:"Laravel\\SerializableClosure\\UnsignedSerializableClosure":1:{s:12:"serializable";O:46:"Laravel\\SerializableClosure\\Serializers\\Native":5:{s:3:"use";a:0:{}s:8:"function";s:229:"function () {
    return \\Inertia\\Inertia::render(\'Admin/LoginAdmin\', [
        \'canLogin\' => \\Illuminate\\Support\\Facades\\Route::has(\'login\'),
        \'canRegister\' => \\Illuminate\\Support\\Facades\\Route::has(\'register\'),
    ]);
}";s:5:"scope";s:37:"Illuminate\\Routing\\RouteFileRegistrar";s:4:"this";N;s:4:"self";s:32:"0000000000000f0b0000000000000000";}}',
        'namespace' => NULL,
        'prefix' => '/admin',
        'where' => 
        array (
        ),
        'as' => 'generated::lnNCdvMpua9deuAA',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'admin' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'admin/main',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'O:55:"Laravel\\SerializableClosure\\UnsignedSerializableClosure":1:{s:12:"serializable";O:46:"Laravel\\SerializableClosure\\Serializers\\Native":5:{s:3:"use";a:0:{}s:8:"function";s:79:"function () {
        return \\Inertia\\Inertia::render(\'Admin/AdminPage\');
    }";s:5:"scope";s:37:"Illuminate\\Routing\\RouteFileRegistrar";s:4:"this";N;s:4:"self";s:32:"0000000000000f0f0000000000000000";}}',
        'namespace' => NULL,
        'prefix' => '/admin',
        'where' => 
        array (
        ),
        'as' => 'admin',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'atencion_diaria.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/atencion_diaria/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\AtencionDiariaController@search',
        'controller' => 'App\\Http\\Controllers\\AtencionDiariaController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'atencion_diaria.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'atencion_diaria.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/atencion_diaria',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\AtencionDiariaController@consulta',
        'controller' => 'App\\Http\\Controllers\\AtencionDiariaController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'atencion_diaria.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'certificacion.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/certificacion/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\CertificacionController@search',
        'controller' => 'App\\Http\\Controllers\\CertificacionController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'certificacion.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'certificacion.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/certificacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\CertificacionController@consulta',
        'controller' => 'App\\Http\\Controllers\\CertificacionController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'certificacion.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'vacuna.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/vacuna/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\VacunaController@search',
        'controller' => 'App\\Http\\Controllers\\VacunaController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'vacuna.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'vacuna.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/vacuna',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\VacunaController@consulta',
        'controller' => 'App\\Http\\Controllers\\VacunaController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'vacuna.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'licencia.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/licencia/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\LicenciaMedicaController@search',
        'controller' => 'App\\Http\\Controllers\\LicenciaMedicaController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'licencia.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'licencia.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/licencia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\LicenciaMedicaController@consulta',
        'controller' => 'App\\Http\\Controllers\\LicenciaMedicaController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'licencia.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diat.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/diat/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DiatController@search',
        'controller' => 'App\\Http\\Controllers\\DiatController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'diat.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diat.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/diat',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DiatController@consulta',
        'controller' => 'App\\Http\\Controllers\\DiatController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'diat.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diep.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/diep/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DiepController@search',
        'controller' => 'App\\Http\\Controllers\\DiepController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'diep.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diep.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/diep',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DiepController@consulta',
        'controller' => 'App\\Http\\Controllers\\DiepController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'diep.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exalcohol.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exalcohol',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExAlcoholController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExAlcoholController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exalcohol.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exalcohol.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exalcohol/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExAlcoholController@search',
        'controller' => 'App\\Http\\Controllers\\ExAlcoholController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exalcohol.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exaldehido.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exaldehido',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExAldehidoController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExAldehidoController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exaldehido.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exaldehido.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exaldehido/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExAldehidoController@search',
        'controller' => 'App\\Http\\Controllers\\ExAldehidoController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exaldehido.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exhumonegro.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exhumonegro',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExHumoNegroController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExHumoNegroController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exhumonegro.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exhumonegro.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exhumonegro/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExHumoNegroController@search',
        'controller' => 'App\\Http\\Controllers\\ExHumoNegroController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exhumonegro.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exmetales.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exmetales',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExMetalesController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExMetalesController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exmetales.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exmetales.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exmetales/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExMetalesController@search',
        'controller' => 'App\\Http\\Controllers\\ExMetalesController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exmetales.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exepo.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exepo/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExEpoController@search',
        'controller' => 'App\\Http\\Controllers\\ExEpoController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exepo.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exepo.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exepo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExEpoController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExEpoController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exepo.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'expsico.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/expsico',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExPsicoController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExPsicoController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'expsico.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'expsico.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/expsico/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExPsicoController@search',
        'controller' => 'App\\Http\\Controllers\\ExPsicoController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'expsico.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exequilibrio.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exequilibrio',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExEquilibrioController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExEquilibrioController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exequilibrio.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exequilibrio.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exequilibrio/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExEquilibrioController@search',
        'controller' => 'App\\Http\\Controllers\\ExEquilibrioController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exequilibrio.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'expvtmert.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/expvtmert',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExPVTMERTController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExPVTMERTController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'expvtmert.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'expvtmert.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/expvtmert/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExPVTMERTController@search',
        'controller' => 'App\\Http\\Controllers\\ExPVTMERTController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'expvtmert.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exrespirador.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exrespirador',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExRespiradorController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExRespiradorController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exrespirador.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exrespirador.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exrespirador/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExRespiradorController@search',
        'controller' => 'App\\Http\\Controllers\\ExRespiradorController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exrespirador.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exruido.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exruido',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExRuidoController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExRuidoController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exruido.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exruido.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exruido/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExRuidoController@search',
        'controller' => 'App\\Http\\Controllers\\ExRuidoController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exruido.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exsalud.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exsalud',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExSaludController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExSaludController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exsalud.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exsalud.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exsalud/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExSaludController@search',
        'controller' => 'App\\Http\\Controllers\\ExSaludController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exsalud.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exsomnolencia.consulta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exsomnolencia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExSomnolenciaController@consulta',
        'controller' => 'App\\Http\\Controllers\\ExSomnolenciaController@consulta',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exsomnolencia.consulta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exsomnolencia.search' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'consulta/exsomnolencia/search',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\ExSomnolenciaController@search',
        'controller' => 'App\\Http\\Controllers\\ExSomnolenciaController@search',
        'namespace' => NULL,
        'prefix' => '/consulta',
        'where' => 
        array (
        ),
        'as' => 'exsomnolencia.search',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alcohol.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/alcohol',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'alcohol.index',
        'uses' => 'App\\Http\\Controllers\\ExAlcoholController@index',
        'controller' => 'App\\Http\\Controllers\\ExAlcoholController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alcohol.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/alcohol/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'alcohol.create',
        'uses' => 'App\\Http\\Controllers\\ExAlcoholController@create',
        'controller' => 'App\\Http\\Controllers\\ExAlcoholController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alcohol.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/alcohol',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'alcohol.store',
        'uses' => 'App\\Http\\Controllers\\ExAlcoholController@store',
        'controller' => 'App\\Http\\Controllers\\ExAlcoholController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alcohol.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/alcohol/{alcohol}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'alcohol.show',
        'uses' => 'App\\Http\\Controllers\\ExAlcoholController@show',
        'controller' => 'App\\Http\\Controllers\\ExAlcoholController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alcohol.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/alcohol/{alcohol}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'alcohol.edit',
        'uses' => 'App\\Http\\Controllers\\ExAlcoholController@edit',
        'controller' => 'App\\Http\\Controllers\\ExAlcoholController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alcohol.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/alcohol/{alcohol}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'alcohol.update',
        'uses' => 'App\\Http\\Controllers\\ExAlcoholController@update',
        'controller' => 'App\\Http\\Controllers\\ExAlcoholController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alcohol.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/alcohol/{alcohol}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'alcohol.destroy',
        'uses' => 'App\\Http\\Controllers\\ExAlcoholController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExAlcoholController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'aldehido.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/aldehido',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'aldehido.index',
        'uses' => 'App\\Http\\Controllers\\ExAldehidoController@index',
        'controller' => 'App\\Http\\Controllers\\ExAldehidoController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'aldehido.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/aldehido/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'aldehido.create',
        'uses' => 'App\\Http\\Controllers\\ExAldehidoController@create',
        'controller' => 'App\\Http\\Controllers\\ExAldehidoController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'aldehido.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/aldehido',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'aldehido.store',
        'uses' => 'App\\Http\\Controllers\\ExAldehidoController@store',
        'controller' => 'App\\Http\\Controllers\\ExAldehidoController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'aldehido.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/aldehido/{aldehido}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'aldehido.show',
        'uses' => 'App\\Http\\Controllers\\ExAldehidoController@show',
        'controller' => 'App\\Http\\Controllers\\ExAldehidoController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'aldehido.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/aldehido/{aldehido}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'aldehido.edit',
        'uses' => 'App\\Http\\Controllers\\ExAldehidoController@edit',
        'controller' => 'App\\Http\\Controllers\\ExAldehidoController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'aldehido.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/aldehido/{aldehido}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'aldehido.update',
        'uses' => 'App\\Http\\Controllers\\ExAldehidoController@update',
        'controller' => 'App\\Http\\Controllers\\ExAldehidoController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'aldehido.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/aldehido/{aldehido}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'aldehido.destroy',
        'uses' => 'App\\Http\\Controllers\\ExAldehidoController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExAldehidoController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'epo.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/epo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'epo.index',
        'uses' => 'App\\Http\\Controllers\\ExEpoController@index',
        'controller' => 'App\\Http\\Controllers\\ExEpoController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'epo.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/epo/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'epo.create',
        'uses' => 'App\\Http\\Controllers\\ExEpoController@create',
        'controller' => 'App\\Http\\Controllers\\ExEpoController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'epo.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/epo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'epo.store',
        'uses' => 'App\\Http\\Controllers\\ExEpoController@store',
        'controller' => 'App\\Http\\Controllers\\ExEpoController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'epo.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/epo/{epo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'epo.show',
        'uses' => 'App\\Http\\Controllers\\ExEpoController@show',
        'controller' => 'App\\Http\\Controllers\\ExEpoController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'epo.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/epo/{epo}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'epo.edit',
        'uses' => 'App\\Http\\Controllers\\ExEpoController@edit',
        'controller' => 'App\\Http\\Controllers\\ExEpoController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'epo.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/epo/{epo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'epo.update',
        'uses' => 'App\\Http\\Controllers\\ExEpoController@update',
        'controller' => 'App\\Http\\Controllers\\ExEpoController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'epo.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/epo/{epo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'epo.destroy',
        'uses' => 'App\\Http\\Controllers\\ExEpoController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExEpoController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'equilibrio.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/equilibrio',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'equilibrio.index',
        'uses' => 'App\\Http\\Controllers\\ExEquilibrioController@index',
        'controller' => 'App\\Http\\Controllers\\ExEquilibrioController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'equilibrio.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/equilibrio/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'equilibrio.create',
        'uses' => 'App\\Http\\Controllers\\ExEquilibrioController@create',
        'controller' => 'App\\Http\\Controllers\\ExEquilibrioController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'equilibrio.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/equilibrio',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'equilibrio.store',
        'uses' => 'App\\Http\\Controllers\\ExEquilibrioController@store',
        'controller' => 'App\\Http\\Controllers\\ExEquilibrioController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'equilibrio.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/equilibrio/{equilibrio}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'equilibrio.show',
        'uses' => 'App\\Http\\Controllers\\ExEquilibrioController@show',
        'controller' => 'App\\Http\\Controllers\\ExEquilibrioController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'equilibrio.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/equilibrio/{equilibrio}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'equilibrio.edit',
        'uses' => 'App\\Http\\Controllers\\ExEquilibrioController@edit',
        'controller' => 'App\\Http\\Controllers\\ExEquilibrioController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'equilibrio.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/equilibrio/{equilibrio}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'equilibrio.update',
        'uses' => 'App\\Http\\Controllers\\ExEquilibrioController@update',
        'controller' => 'App\\Http\\Controllers\\ExEquilibrioController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'equilibrio.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/equilibrio/{equilibrio}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'equilibrio.destroy',
        'uses' => 'App\\Http\\Controllers\\ExEquilibrioController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExEquilibrioController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'humonegro.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/humonegro',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'humonegro.index',
        'uses' => 'App\\Http\\Controllers\\ExHumoNegroController@index',
        'controller' => 'App\\Http\\Controllers\\ExHumoNegroController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'humonegro.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/humonegro/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'humonegro.create',
        'uses' => 'App\\Http\\Controllers\\ExHumoNegroController@create',
        'controller' => 'App\\Http\\Controllers\\ExHumoNegroController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'humonegro.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/humonegro',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'humonegro.store',
        'uses' => 'App\\Http\\Controllers\\ExHumoNegroController@store',
        'controller' => 'App\\Http\\Controllers\\ExHumoNegroController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'humonegro.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/humonegro/{humonegro}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'humonegro.show',
        'uses' => 'App\\Http\\Controllers\\ExHumoNegroController@show',
        'controller' => 'App\\Http\\Controllers\\ExHumoNegroController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'humonegro.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/humonegro/{humonegro}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'humonegro.edit',
        'uses' => 'App\\Http\\Controllers\\ExHumoNegroController@edit',
        'controller' => 'App\\Http\\Controllers\\ExHumoNegroController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'humonegro.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/humonegro/{humonegro}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'humonegro.update',
        'uses' => 'App\\Http\\Controllers\\ExHumoNegroController@update',
        'controller' => 'App\\Http\\Controllers\\ExHumoNegroController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'humonegro.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/humonegro/{humonegro}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'humonegro.destroy',
        'uses' => 'App\\Http\\Controllers\\ExHumoNegroController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExHumoNegroController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'metal.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/metal',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'metal.index',
        'uses' => 'App\\Http\\Controllers\\ExMetalesController@index',
        'controller' => 'App\\Http\\Controllers\\ExMetalesController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'metal.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/metal/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'metal.create',
        'uses' => 'App\\Http\\Controllers\\ExMetalesController@create',
        'controller' => 'App\\Http\\Controllers\\ExMetalesController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'metal.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/metal',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'metal.store',
        'uses' => 'App\\Http\\Controllers\\ExMetalesController@store',
        'controller' => 'App\\Http\\Controllers\\ExMetalesController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'metal.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/metal/{metal}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'metal.show',
        'uses' => 'App\\Http\\Controllers\\ExMetalesController@show',
        'controller' => 'App\\Http\\Controllers\\ExMetalesController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'metal.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/metal/{metal}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'metal.edit',
        'uses' => 'App\\Http\\Controllers\\ExMetalesController@edit',
        'controller' => 'App\\Http\\Controllers\\ExMetalesController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'metal.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/metal/{metal}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'metal.update',
        'uses' => 'App\\Http\\Controllers\\ExMetalesController@update',
        'controller' => 'App\\Http\\Controllers\\ExMetalesController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'metal.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/metal/{metal}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'metal.destroy',
        'uses' => 'App\\Http\\Controllers\\ExMetalesController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExMetalesController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'psico.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/psico',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'psico.index',
        'uses' => 'App\\Http\\Controllers\\ExPsicoController@index',
        'controller' => 'App\\Http\\Controllers\\ExPsicoController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'psico.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/psico/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'psico.create',
        'uses' => 'App\\Http\\Controllers\\ExPsicoController@create',
        'controller' => 'App\\Http\\Controllers\\ExPsicoController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'psico.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/psico',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'psico.store',
        'uses' => 'App\\Http\\Controllers\\ExPsicoController@store',
        'controller' => 'App\\Http\\Controllers\\ExPsicoController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'psico.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/psico/{psico}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'psico.show',
        'uses' => 'App\\Http\\Controllers\\ExPsicoController@show',
        'controller' => 'App\\Http\\Controllers\\ExPsicoController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'psico.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/psico/{psico}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'psico.edit',
        'uses' => 'App\\Http\\Controllers\\ExPsicoController@edit',
        'controller' => 'App\\Http\\Controllers\\ExPsicoController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'psico.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/psico/{psico}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'psico.update',
        'uses' => 'App\\Http\\Controllers\\ExPsicoController@update',
        'controller' => 'App\\Http\\Controllers\\ExPsicoController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'psico.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/psico/{psico}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'psico.destroy',
        'uses' => 'App\\Http\\Controllers\\ExPsicoController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExPsicoController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pvtmert.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/pvtmert',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pvtmert.index',
        'uses' => 'App\\Http\\Controllers\\ExPVTMERTController@index',
        'controller' => 'App\\Http\\Controllers\\ExPVTMERTController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pvtmert.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/pvtmert/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pvtmert.create',
        'uses' => 'App\\Http\\Controllers\\ExPVTMERTController@create',
        'controller' => 'App\\Http\\Controllers\\ExPVTMERTController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pvtmert.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/pvtmert',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pvtmert.store',
        'uses' => 'App\\Http\\Controllers\\ExPVTMERTController@store',
        'controller' => 'App\\Http\\Controllers\\ExPVTMERTController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pvtmert.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/pvtmert/{pvtmert}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pvtmert.show',
        'uses' => 'App\\Http\\Controllers\\ExPVTMERTController@show',
        'controller' => 'App\\Http\\Controllers\\ExPVTMERTController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pvtmert.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/pvtmert/{pvtmert}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pvtmert.edit',
        'uses' => 'App\\Http\\Controllers\\ExPVTMERTController@edit',
        'controller' => 'App\\Http\\Controllers\\ExPVTMERTController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pvtmert.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/pvtmert/{pvtmert}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pvtmert.update',
        'uses' => 'App\\Http\\Controllers\\ExPVTMERTController@update',
        'controller' => 'App\\Http\\Controllers\\ExPVTMERTController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pvtmert.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/pvtmert/{pvtmert}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pvtmert.destroy',
        'uses' => 'App\\Http\\Controllers\\ExPVTMERTController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExPVTMERTController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'respirador.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/respirador',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'respirador.index',
        'uses' => 'App\\Http\\Controllers\\ExRespiradorController@index',
        'controller' => 'App\\Http\\Controllers\\ExRespiradorController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'respirador.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/respirador/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'respirador.create',
        'uses' => 'App\\Http\\Controllers\\ExRespiradorController@create',
        'controller' => 'App\\Http\\Controllers\\ExRespiradorController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'respirador.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/respirador',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'respirador.store',
        'uses' => 'App\\Http\\Controllers\\ExRespiradorController@store',
        'controller' => 'App\\Http\\Controllers\\ExRespiradorController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'respirador.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/respirador/{respirador}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'respirador.show',
        'uses' => 'App\\Http\\Controllers\\ExRespiradorController@show',
        'controller' => 'App\\Http\\Controllers\\ExRespiradorController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'respirador.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/respirador/{respirador}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'respirador.edit',
        'uses' => 'App\\Http\\Controllers\\ExRespiradorController@edit',
        'controller' => 'App\\Http\\Controllers\\ExRespiradorController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'respirador.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/respirador/{respirador}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'respirador.update',
        'uses' => 'App\\Http\\Controllers\\ExRespiradorController@update',
        'controller' => 'App\\Http\\Controllers\\ExRespiradorController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'respirador.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/respirador/{respirador}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'respirador.destroy',
        'uses' => 'App\\Http\\Controllers\\ExRespiradorController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExRespiradorController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ruido.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/ruido',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ruido.index',
        'uses' => 'App\\Http\\Controllers\\ExRuidoController@index',
        'controller' => 'App\\Http\\Controllers\\ExRuidoController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ruido.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/ruido/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ruido.create',
        'uses' => 'App\\Http\\Controllers\\ExRuidoController@create',
        'controller' => 'App\\Http\\Controllers\\ExRuidoController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ruido.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/ruido',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ruido.store',
        'uses' => 'App\\Http\\Controllers\\ExRuidoController@store',
        'controller' => 'App\\Http\\Controllers\\ExRuidoController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ruido.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/ruido/{ruido}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ruido.show',
        'uses' => 'App\\Http\\Controllers\\ExRuidoController@show',
        'controller' => 'App\\Http\\Controllers\\ExRuidoController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ruido.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/ruido/{ruido}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ruido.edit',
        'uses' => 'App\\Http\\Controllers\\ExRuidoController@edit',
        'controller' => 'App\\Http\\Controllers\\ExRuidoController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ruido.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/ruido/{ruido}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ruido.update',
        'uses' => 'App\\Http\\Controllers\\ExRuidoController@update',
        'controller' => 'App\\Http\\Controllers\\ExRuidoController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ruido.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/ruido/{ruido}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ruido.destroy',
        'uses' => 'App\\Http\\Controllers\\ExRuidoController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExRuidoController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'salud.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/salud',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'salud.index',
        'uses' => 'App\\Http\\Controllers\\ExSaludController@index',
        'controller' => 'App\\Http\\Controllers\\ExSaludController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'salud.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/salud/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'salud.create',
        'uses' => 'App\\Http\\Controllers\\ExSaludController@create',
        'controller' => 'App\\Http\\Controllers\\ExSaludController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'salud.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/salud',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'salud.store',
        'uses' => 'App\\Http\\Controllers\\ExSaludController@store',
        'controller' => 'App\\Http\\Controllers\\ExSaludController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'salud.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/salud/{salud}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'salud.show',
        'uses' => 'App\\Http\\Controllers\\ExSaludController@show',
        'controller' => 'App\\Http\\Controllers\\ExSaludController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'salud.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/salud/{salud}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'salud.edit',
        'uses' => 'App\\Http\\Controllers\\ExSaludController@edit',
        'controller' => 'App\\Http\\Controllers\\ExSaludController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'salud.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/salud/{salud}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'salud.update',
        'uses' => 'App\\Http\\Controllers\\ExSaludController@update',
        'controller' => 'App\\Http\\Controllers\\ExSaludController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'salud.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/salud/{salud}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'salud.destroy',
        'uses' => 'App\\Http\\Controllers\\ExSaludController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExSaludController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'silice.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/silice',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'silice.index',
        'uses' => 'App\\Http\\Controllers\\ExSiliceController@index',
        'controller' => 'App\\Http\\Controllers\\ExSiliceController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'silice.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/silice/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'silice.create',
        'uses' => 'App\\Http\\Controllers\\ExSiliceController@create',
        'controller' => 'App\\Http\\Controllers\\ExSiliceController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'silice.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/silice',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'silice.store',
        'uses' => 'App\\Http\\Controllers\\ExSiliceController@store',
        'controller' => 'App\\Http\\Controllers\\ExSiliceController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'silice.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/silice/{silouse}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'silice.show',
        'uses' => 'App\\Http\\Controllers\\ExSiliceController@show',
        'controller' => 'App\\Http\\Controllers\\ExSiliceController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'silice.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/silice/{silouse}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'silice.edit',
        'uses' => 'App\\Http\\Controllers\\ExSiliceController@edit',
        'controller' => 'App\\Http\\Controllers\\ExSiliceController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'silice.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/silice/{silouse}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'silice.update',
        'uses' => 'App\\Http\\Controllers\\ExSiliceController@update',
        'controller' => 'App\\Http\\Controllers\\ExSiliceController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'silice.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/silice/{silouse}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'silice.destroy',
        'uses' => 'App\\Http\\Controllers\\ExSiliceController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExSiliceController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'solvente.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/solvente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'solvente.index',
        'uses' => 'App\\Http\\Controllers\\ExSolventeController@index',
        'controller' => 'App\\Http\\Controllers\\ExSolventeController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'solvente.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/solvente/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'solvente.create',
        'uses' => 'App\\Http\\Controllers\\ExSolventeController@create',
        'controller' => 'App\\Http\\Controllers\\ExSolventeController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'solvente.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/solvente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'solvente.store',
        'uses' => 'App\\Http\\Controllers\\ExSolventeController@store',
        'controller' => 'App\\Http\\Controllers\\ExSolventeController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'solvente.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/solvente/{solvente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'solvente.show',
        'uses' => 'App\\Http\\Controllers\\ExSolventeController@show',
        'controller' => 'App\\Http\\Controllers\\ExSolventeController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'solvente.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/solvente/{solvente}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'solvente.edit',
        'uses' => 'App\\Http\\Controllers\\ExSolventeController@edit',
        'controller' => 'App\\Http\\Controllers\\ExSolventeController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'solvente.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/solvente/{solvente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'solvente.update',
        'uses' => 'App\\Http\\Controllers\\ExSolventeController@update',
        'controller' => 'App\\Http\\Controllers\\ExSolventeController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'solvente.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/solvente/{solvente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'solvente.destroy',
        'uses' => 'App\\Http\\Controllers\\ExSolventeController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExSolventeController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'somnolencia.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/somnolencia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'somnolencia.index',
        'uses' => 'App\\Http\\Controllers\\ExSomnolenciaController@index',
        'controller' => 'App\\Http\\Controllers\\ExSomnolenciaController@index',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'somnolencia.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/somnolencia/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'somnolencia.create',
        'uses' => 'App\\Http\\Controllers\\ExSomnolenciaController@create',
        'controller' => 'App\\Http\\Controllers\\ExSomnolenciaController@create',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'somnolencia.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'examen/somnolencia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'somnolencia.store',
        'uses' => 'App\\Http\\Controllers\\ExSomnolenciaController@store',
        'controller' => 'App\\Http\\Controllers\\ExSomnolenciaController@store',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'somnolencia.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/somnolencia/{somnolencium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'somnolencia.show',
        'uses' => 'App\\Http\\Controllers\\ExSomnolenciaController@show',
        'controller' => 'App\\Http\\Controllers\\ExSomnolenciaController@show',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'somnolencia.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'examen/somnolencia/{somnolencium}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'somnolencia.edit',
        'uses' => 'App\\Http\\Controllers\\ExSomnolenciaController@edit',
        'controller' => 'App\\Http\\Controllers\\ExSomnolenciaController@edit',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'somnolencia.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'examen/somnolencia/{somnolencium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'somnolencia.update',
        'uses' => 'App\\Http\\Controllers\\ExSomnolenciaController@update',
        'controller' => 'App\\Http\\Controllers\\ExSomnolenciaController@update',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'somnolencia.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'examen/somnolencia/{somnolencium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'somnolencia.destroy',
        'uses' => 'App\\Http\\Controllers\\ExSomnolenciaController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExSomnolenciaController@destroy',
        'namespace' => NULL,
        'prefix' => '/examen',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/accidente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente.index',
        'uses' => 'App\\Http\\Controllers\\AccidenteController@index',
        'controller' => 'App\\Http\\Controllers\\AccidenteController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/accidente/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente.create',
        'uses' => 'App\\Http\\Controllers\\AccidenteController@create',
        'controller' => 'App\\Http\\Controllers\\AccidenteController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/accidente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente.store',
        'uses' => 'App\\Http\\Controllers\\AccidenteController@store',
        'controller' => 'App\\Http\\Controllers\\AccidenteController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/accidente/{accidente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente.show',
        'uses' => 'App\\Http\\Controllers\\AccidenteController@show',
        'controller' => 'App\\Http\\Controllers\\AccidenteController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/accidente/{accidente}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente.edit',
        'uses' => 'App\\Http\\Controllers\\AccidenteController@edit',
        'controller' => 'App\\Http\\Controllers\\AccidenteController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/accidente/{accidente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente.update',
        'uses' => 'App\\Http\\Controllers\\AccidenteController@update',
        'controller' => 'App\\Http\\Controllers\\AccidenteController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/accidente/{accidente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente.destroy',
        'uses' => 'App\\Http\\Controllers\\AccidenteController@destroy',
        'controller' => 'App\\Http\\Controllers\\AccidenteController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente_condicion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/accidente_condicion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente_condicion.index',
        'uses' => 'App\\Http\\Controllers\\AccidenteCondicionController@index',
        'controller' => 'App\\Http\\Controllers\\AccidenteCondicionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente_condicion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/accidente_condicion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente_condicion.create',
        'uses' => 'App\\Http\\Controllers\\AccidenteCondicionController@create',
        'controller' => 'App\\Http\\Controllers\\AccidenteCondicionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente_condicion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/accidente_condicion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente_condicion.store',
        'uses' => 'App\\Http\\Controllers\\AccidenteCondicionController@store',
        'controller' => 'App\\Http\\Controllers\\AccidenteCondicionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente_condicion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/accidente_condicion/{accidente_condicion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente_condicion.show',
        'uses' => 'App\\Http\\Controllers\\AccidenteCondicionController@show',
        'controller' => 'App\\Http\\Controllers\\AccidenteCondicionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente_condicion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/accidente_condicion/{accidente_condicion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente_condicion.edit',
        'uses' => 'App\\Http\\Controllers\\AccidenteCondicionController@edit',
        'controller' => 'App\\Http\\Controllers\\AccidenteCondicionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente_condicion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/accidente_condicion/{accidente_condicion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente_condicion.update',
        'uses' => 'App\\Http\\Controllers\\AccidenteCondicionController@update',
        'controller' => 'App\\Http\\Controllers\\AccidenteCondicionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'accidente_condicion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/accidente_condicion/{accidente_condicion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'accidente_condicion.destroy',
        'uses' => 'App\\Http\\Controllers\\AccidenteCondicionController@destroy',
        'controller' => 'App\\Http\\Controllers\\AccidenteCondicionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'afp.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/afp',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'afp.index',
        'uses' => 'App\\Http\\Controllers\\AfpController@index',
        'controller' => 'App\\Http\\Controllers\\AfpController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'afp.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/afp/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'afp.create',
        'uses' => 'App\\Http\\Controllers\\AfpController@create',
        'controller' => 'App\\Http\\Controllers\\AfpController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'afp.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/afp',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'afp.store',
        'uses' => 'App\\Http\\Controllers\\AfpController@store',
        'controller' => 'App\\Http\\Controllers\\AfpController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'afp.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/afp/{afp}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'afp.show',
        'uses' => 'App\\Http\\Controllers\\AfpController@show',
        'controller' => 'App\\Http\\Controllers\\AfpController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'afp.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/afp/{afp}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'afp.edit',
        'uses' => 'App\\Http\\Controllers\\AfpController@edit',
        'controller' => 'App\\Http\\Controllers\\AfpController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'afp.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/afp/{afp}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'afp.update',
        'uses' => 'App\\Http\\Controllers\\AfpController@update',
        'controller' => 'App\\Http\\Controllers\\AfpController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'afp.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/afp/{afp}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'afp.destroy',
        'uses' => 'App\\Http\\Controllers\\AfpController@destroy',
        'controller' => 'App\\Http\\Controllers\\AfpController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'area.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/area',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'area.index',
        'uses' => 'App\\Http\\Controllers\\AreaController@index',
        'controller' => 'App\\Http\\Controllers\\AreaController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'area.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/area/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'area.create',
        'uses' => 'App\\Http\\Controllers\\AreaController@create',
        'controller' => 'App\\Http\\Controllers\\AreaController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'area.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/area',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'area.store',
        'uses' => 'App\\Http\\Controllers\\AreaController@store',
        'controller' => 'App\\Http\\Controllers\\AreaController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'area.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/area/{area}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'area.show',
        'uses' => 'App\\Http\\Controllers\\AreaController@show',
        'controller' => 'App\\Http\\Controllers\\AreaController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'area.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/area/{area}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'area.edit',
        'uses' => 'App\\Http\\Controllers\\AreaController@edit',
        'controller' => 'App\\Http\\Controllers\\AreaController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'area.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/area/{area}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'area.update',
        'uses' => 'App\\Http\\Controllers\\AreaController@update',
        'controller' => 'App\\Http\\Controllers\\AreaController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'area.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/area/{area}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'area.destroy',
        'uses' => 'App\\Http\\Controllers\\AreaController@destroy',
        'controller' => 'App\\Http\\Controllers\\AreaController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'bateria.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/bateria',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'bateria.index',
        'uses' => 'App\\Http\\Controllers\\BateriaController@index',
        'controller' => 'App\\Http\\Controllers\\BateriaController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'bateria.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/bateria/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'bateria.create',
        'uses' => 'App\\Http\\Controllers\\BateriaController@create',
        'controller' => 'App\\Http\\Controllers\\BateriaController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'bateria.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/bateria',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'bateria.store',
        'uses' => 'App\\Http\\Controllers\\BateriaController@store',
        'controller' => 'App\\Http\\Controllers\\BateriaController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'bateria.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/bateria/{baterium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'bateria.show',
        'uses' => 'App\\Http\\Controllers\\BateriaController@show',
        'controller' => 'App\\Http\\Controllers\\BateriaController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'bateria.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/bateria/{baterium}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'bateria.edit',
        'uses' => 'App\\Http\\Controllers\\BateriaController@edit',
        'controller' => 'App\\Http\\Controllers\\BateriaController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'bateria.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/bateria/{baterium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'bateria.update',
        'uses' => 'App\\Http\\Controllers\\BateriaController@update',
        'controller' => 'App\\Http\\Controllers\\BateriaController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'bateria.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/bateria/{baterium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'bateria.destroy',
        'uses' => 'App\\Http\\Controllers\\BateriaController@destroy',
        'controller' => 'App\\Http\\Controllers\\BateriaController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'calificacion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/calificacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'calificacion.index',
        'uses' => 'App\\Http\\Controllers\\CalificacionController@index',
        'controller' => 'App\\Http\\Controllers\\CalificacionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'calificacion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/calificacion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'calificacion.create',
        'uses' => 'App\\Http\\Controllers\\CalificacionController@create',
        'controller' => 'App\\Http\\Controllers\\CalificacionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'calificacion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/calificacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'calificacion.store',
        'uses' => 'App\\Http\\Controllers\\CalificacionController@store',
        'controller' => 'App\\Http\\Controllers\\CalificacionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'calificacion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/calificacion/{calificacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'calificacion.show',
        'uses' => 'App\\Http\\Controllers\\CalificacionController@show',
        'controller' => 'App\\Http\\Controllers\\CalificacionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'calificacion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/calificacion/{calificacion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'calificacion.edit',
        'uses' => 'App\\Http\\Controllers\\CalificacionController@edit',
        'controller' => 'App\\Http\\Controllers\\CalificacionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'calificacion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/calificacion/{calificacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'calificacion.update',
        'uses' => 'App\\Http\\Controllers\\CalificacionController@update',
        'controller' => 'App\\Http\\Controllers\\CalificacionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'calificacion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/calificacion/{calificacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'calificacion.destroy',
        'uses' => 'App\\Http\\Controllers\\CalificacionController@destroy',
        'controller' => 'App\\Http\\Controllers\\CalificacionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ceco.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/ceco',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ceco.index',
        'uses' => 'App\\Http\\Controllers\\CecoController@index',
        'controller' => 'App\\Http\\Controllers\\CecoController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ceco.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/ceco/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ceco.create',
        'uses' => 'App\\Http\\Controllers\\CecoController@create',
        'controller' => 'App\\Http\\Controllers\\CecoController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ceco.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/ceco',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ceco.store',
        'uses' => 'App\\Http\\Controllers\\CecoController@store',
        'controller' => 'App\\Http\\Controllers\\CecoController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ceco.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/ceco/{ceco}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ceco.show',
        'uses' => 'App\\Http\\Controllers\\CecoController@show',
        'controller' => 'App\\Http\\Controllers\\CecoController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ceco.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/ceco/{ceco}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ceco.edit',
        'uses' => 'App\\Http\\Controllers\\CecoController@edit',
        'controller' => 'App\\Http\\Controllers\\CecoController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ceco.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/ceco/{ceco}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ceco.update',
        'uses' => 'App\\Http\\Controllers\\CecoController@update',
        'controller' => 'App\\Http\\Controllers\\CecoController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ceco.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/ceco/{ceco}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ceco.destroy',
        'uses' => 'App\\Http\\Controllers\\CecoController@destroy',
        'controller' => 'App\\Http\\Controllers\\CecoController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cie10.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/cie10',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'cie10.index',
        'uses' => 'App\\Http\\Controllers\\Cie10Controller@index',
        'controller' => 'App\\Http\\Controllers\\Cie10Controller@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cie10.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/cie10/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'cie10.create',
        'uses' => 'App\\Http\\Controllers\\Cie10Controller@create',
        'controller' => 'App\\Http\\Controllers\\Cie10Controller@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cie10.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/cie10',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'cie10.store',
        'uses' => 'App\\Http\\Controllers\\Cie10Controller@store',
        'controller' => 'App\\Http\\Controllers\\Cie10Controller@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cie10.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/cie10/{cie10}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'cie10.show',
        'uses' => 'App\\Http\\Controllers\\Cie10Controller@show',
        'controller' => 'App\\Http\\Controllers\\Cie10Controller@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cie10.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/cie10/{cie10}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'cie10.edit',
        'uses' => 'App\\Http\\Controllers\\Cie10Controller@edit',
        'controller' => 'App\\Http\\Controllers\\Cie10Controller@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cie10.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/cie10/{cie10}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'cie10.update',
        'uses' => 'App\\Http\\Controllers\\Cie10Controller@update',
        'controller' => 'App\\Http\\Controllers\\Cie10Controller@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cie10.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/cie10/{cie10}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'cie10.destroy',
        'uses' => 'App\\Http\\Controllers\\Cie10Controller@destroy',
        'controller' => 'App\\Http\\Controllers\\Cie10Controller@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'derivacion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/derivacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'derivacion.index',
        'uses' => 'App\\Http\\Controllers\\DerivacionController@index',
        'controller' => 'App\\Http\\Controllers\\DerivacionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'derivacion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/derivacion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'derivacion.create',
        'uses' => 'App\\Http\\Controllers\\DerivacionController@create',
        'controller' => 'App\\Http\\Controllers\\DerivacionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'derivacion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/derivacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'derivacion.store',
        'uses' => 'App\\Http\\Controllers\\DerivacionController@store',
        'controller' => 'App\\Http\\Controllers\\DerivacionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'derivacion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/derivacion/{derivacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'derivacion.show',
        'uses' => 'App\\Http\\Controllers\\DerivacionController@show',
        'controller' => 'App\\Http\\Controllers\\DerivacionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'derivacion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/derivacion/{derivacion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'derivacion.edit',
        'uses' => 'App\\Http\\Controllers\\DerivacionController@edit',
        'controller' => 'App\\Http\\Controllers\\DerivacionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'derivacion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/derivacion/{derivacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'derivacion.update',
        'uses' => 'App\\Http\\Controllers\\DerivacionController@update',
        'controller' => 'App\\Http\\Controllers\\DerivacionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'derivacion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/derivacion/{derivacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'derivacion.destroy',
        'uses' => 'App\\Http\\Controllers\\DerivacionController@destroy',
        'controller' => 'App\\Http\\Controllers\\DerivacionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'empresa.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/empresa',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'empresa.index',
        'uses' => 'App\\Http\\Controllers\\EmpresaController@index',
        'controller' => 'App\\Http\\Controllers\\EmpresaController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'empresa.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/empresa/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'empresa.create',
        'uses' => 'App\\Http\\Controllers\\EmpresaController@create',
        'controller' => 'App\\Http\\Controllers\\EmpresaController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'empresa.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/empresa',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'empresa.store',
        'uses' => 'App\\Http\\Controllers\\EmpresaController@store',
        'controller' => 'App\\Http\\Controllers\\EmpresaController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'empresa.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/empresa/{empresa}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'empresa.show',
        'uses' => 'App\\Http\\Controllers\\EmpresaController@show',
        'controller' => 'App\\Http\\Controllers\\EmpresaController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'empresa.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/empresa/{empresa}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'empresa.edit',
        'uses' => 'App\\Http\\Controllers\\EmpresaController@edit',
        'controller' => 'App\\Http\\Controllers\\EmpresaController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'empresa.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/empresa/{empresa}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'empresa.update',
        'uses' => 'App\\Http\\Controllers\\EmpresaController@update',
        'controller' => 'App\\Http\\Controllers\\EmpresaController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'empresa.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/empresa/{empresa}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'empresa.destroy',
        'uses' => 'App\\Http\\Controllers\\EmpresaController@destroy',
        'controller' => 'App\\Http\\Controllers\\EmpresaController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'error_critico.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/error_critico',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'error_critico.index',
        'uses' => 'App\\Http\\Controllers\\ErrorCriticoController@index',
        'controller' => 'App\\Http\\Controllers\\ErrorCriticoController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'error_critico.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/error_critico/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'error_critico.create',
        'uses' => 'App\\Http\\Controllers\\ErrorCriticoController@create',
        'controller' => 'App\\Http\\Controllers\\ErrorCriticoController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'error_critico.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/error_critico',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'error_critico.store',
        'uses' => 'App\\Http\\Controllers\\ErrorCriticoController@store',
        'controller' => 'App\\Http\\Controllers\\ErrorCriticoController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'error_critico.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/error_critico/{error_critico}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'error_critico.show',
        'uses' => 'App\\Http\\Controllers\\ErrorCriticoController@show',
        'controller' => 'App\\Http\\Controllers\\ErrorCriticoController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'error_critico.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/error_critico/{error_critico}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'error_critico.edit',
        'uses' => 'App\\Http\\Controllers\\ErrorCriticoController@edit',
        'controller' => 'App\\Http\\Controllers\\ErrorCriticoController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'error_critico.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/error_critico/{error_critico}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'error_critico.update',
        'uses' => 'App\\Http\\Controllers\\ErrorCriticoController@update',
        'controller' => 'App\\Http\\Controllers\\ErrorCriticoController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'error_critico.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/error_critico/{error_critico}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'error_critico.destroy',
        'uses' => 'App\\Http\\Controllers\\ErrorCriticoController@destroy',
        'controller' => 'App\\Http\\Controllers\\ErrorCriticoController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_certificacion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_certificacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_certificacion.index',
        'uses' => 'App\\Http\\Controllers\\EstadoCertificacionController@index',
        'controller' => 'App\\Http\\Controllers\\EstadoCertificacionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_certificacion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_certificacion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_certificacion.create',
        'uses' => 'App\\Http\\Controllers\\EstadoCertificacionController@create',
        'controller' => 'App\\Http\\Controllers\\EstadoCertificacionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_certificacion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/estado_certificacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_certificacion.store',
        'uses' => 'App\\Http\\Controllers\\EstadoCertificacionController@store',
        'controller' => 'App\\Http\\Controllers\\EstadoCertificacionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_certificacion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_certificacion/{estado_certificacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_certificacion.show',
        'uses' => 'App\\Http\\Controllers\\EstadoCertificacionController@show',
        'controller' => 'App\\Http\\Controllers\\EstadoCertificacionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_certificacion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_certificacion/{estado_certificacion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_certificacion.edit',
        'uses' => 'App\\Http\\Controllers\\EstadoCertificacionController@edit',
        'controller' => 'App\\Http\\Controllers\\EstadoCertificacionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_certificacion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/estado_certificacion/{estado_certificacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_certificacion.update',
        'uses' => 'App\\Http\\Controllers\\EstadoCertificacionController@update',
        'controller' => 'App\\Http\\Controllers\\EstadoCertificacionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_certificacion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/estado_certificacion/{estado_certificacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_certificacion.destroy',
        'uses' => 'App\\Http\\Controllers\\EstadoCertificacionController@destroy',
        'controller' => 'App\\Http\\Controllers\\EstadoCertificacionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_civil.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_civil',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_civil.index',
        'uses' => 'App\\Http\\Controllers\\EstadoCivilController@index',
        'controller' => 'App\\Http\\Controllers\\EstadoCivilController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_civil.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_civil/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_civil.create',
        'uses' => 'App\\Http\\Controllers\\EstadoCivilController@create',
        'controller' => 'App\\Http\\Controllers\\EstadoCivilController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_civil.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/estado_civil',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_civil.store',
        'uses' => 'App\\Http\\Controllers\\EstadoCivilController@store',
        'controller' => 'App\\Http\\Controllers\\EstadoCivilController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_civil.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_civil/{estado_civil}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_civil.show',
        'uses' => 'App\\Http\\Controllers\\EstadoCivilController@show',
        'controller' => 'App\\Http\\Controllers\\EstadoCivilController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_civil.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_civil/{estado_civil}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_civil.edit',
        'uses' => 'App\\Http\\Controllers\\EstadoCivilController@edit',
        'controller' => 'App\\Http\\Controllers\\EstadoCivilController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_civil.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/estado_civil/{estado_civil}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_civil.update',
        'uses' => 'App\\Http\\Controllers\\EstadoCivilController@update',
        'controller' => 'App\\Http\\Controllers\\EstadoCivilController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_civil.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/estado_civil/{estado_civil}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_civil.destroy',
        'uses' => 'App\\Http\\Controllers\\EstadoCivilController@destroy',
        'controller' => 'App\\Http\\Controllers\\EstadoCivilController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_epo.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_epo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_epo.index',
        'uses' => 'App\\Http\\Controllers\\EstadoEpoController@index',
        'controller' => 'App\\Http\\Controllers\\EstadoEpoController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_epo.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_epo/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_epo.create',
        'uses' => 'App\\Http\\Controllers\\EstadoEpoController@create',
        'controller' => 'App\\Http\\Controllers\\EstadoEpoController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_epo.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/estado_epo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_epo.store',
        'uses' => 'App\\Http\\Controllers\\EstadoEpoController@store',
        'controller' => 'App\\Http\\Controllers\\EstadoEpoController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_epo.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_epo/{estado_epo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_epo.show',
        'uses' => 'App\\Http\\Controllers\\EstadoEpoController@show',
        'controller' => 'App\\Http\\Controllers\\EstadoEpoController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_epo.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_epo/{estado_epo}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_epo.edit',
        'uses' => 'App\\Http\\Controllers\\EstadoEpoController@edit',
        'controller' => 'App\\Http\\Controllers\\EstadoEpoController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_epo.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/estado_epo/{estado_epo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_epo.update',
        'uses' => 'App\\Http\\Controllers\\EstadoEpoController@update',
        'controller' => 'App\\Http\\Controllers\\EstadoEpoController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_epo.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/estado_epo/{estado_epo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_epo.destroy',
        'uses' => 'App\\Http\\Controllers\\EstadoEpoController@destroy',
        'controller' => 'App\\Http\\Controllers\\EstadoEpoController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_mental.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_mental',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_mental.index',
        'uses' => 'App\\Http\\Controllers\\EstadoMentalController@index',
        'controller' => 'App\\Http\\Controllers\\EstadoMentalController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_mental.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_mental/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_mental.create',
        'uses' => 'App\\Http\\Controllers\\EstadoMentalController@create',
        'controller' => 'App\\Http\\Controllers\\EstadoMentalController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_mental.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/estado_mental',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_mental.store',
        'uses' => 'App\\Http\\Controllers\\EstadoMentalController@store',
        'controller' => 'App\\Http\\Controllers\\EstadoMentalController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_mental.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_mental/{estado_mental}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_mental.show',
        'uses' => 'App\\Http\\Controllers\\EstadoMentalController@show',
        'controller' => 'App\\Http\\Controllers\\EstadoMentalController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_mental.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/estado_mental/{estado_mental}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_mental.edit',
        'uses' => 'App\\Http\\Controllers\\EstadoMentalController@edit',
        'controller' => 'App\\Http\\Controllers\\EstadoMentalController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_mental.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/estado_mental/{estado_mental}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_mental.update',
        'uses' => 'App\\Http\\Controllers\\EstadoMentalController@update',
        'controller' => 'App\\Http\\Controllers\\EstadoMentalController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'estado_mental.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/estado_mental/{estado_mental}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'estado_mental.destroy',
        'uses' => 'App\\Http\\Controllers\\EstadoMentalController@destroy',
        'controller' => 'App\\Http\\Controllers\\EstadoMentalController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exposicion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/exposicion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'exposicion.index',
        'uses' => 'App\\Http\\Controllers\\ExposicionController@index',
        'controller' => 'App\\Http\\Controllers\\ExposicionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exposicion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/exposicion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'exposicion.create',
        'uses' => 'App\\Http\\Controllers\\ExposicionController@create',
        'controller' => 'App\\Http\\Controllers\\ExposicionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exposicion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/exposicion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'exposicion.store',
        'uses' => 'App\\Http\\Controllers\\ExposicionController@store',
        'controller' => 'App\\Http\\Controllers\\ExposicionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exposicion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/exposicion/{exposicion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'exposicion.show',
        'uses' => 'App\\Http\\Controllers\\ExposicionController@show',
        'controller' => 'App\\Http\\Controllers\\ExposicionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exposicion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/exposicion/{exposicion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'exposicion.edit',
        'uses' => 'App\\Http\\Controllers\\ExposicionController@edit',
        'controller' => 'App\\Http\\Controllers\\ExposicionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exposicion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/exposicion/{exposicion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'exposicion.update',
        'uses' => 'App\\Http\\Controllers\\ExposicionController@update',
        'controller' => 'App\\Http\\Controllers\\ExposicionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'exposicion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/exposicion/{exposicion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'exposicion.destroy',
        'uses' => 'App\\Http\\Controllers\\ExposicionController@destroy',
        'controller' => 'App\\Http\\Controllers\\ExposicionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'fuente_incidente.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/fuente_incidente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'fuente_incidente.index',
        'uses' => 'App\\Http\\Controllers\\FuenteIncidenteController@index',
        'controller' => 'App\\Http\\Controllers\\FuenteIncidenteController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'fuente_incidente.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/fuente_incidente/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'fuente_incidente.create',
        'uses' => 'App\\Http\\Controllers\\FuenteIncidenteController@create',
        'controller' => 'App\\Http\\Controllers\\FuenteIncidenteController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'fuente_incidente.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/fuente_incidente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'fuente_incidente.store',
        'uses' => 'App\\Http\\Controllers\\FuenteIncidenteController@store',
        'controller' => 'App\\Http\\Controllers\\FuenteIncidenteController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'fuente_incidente.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/fuente_incidente/{fuente_incidente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'fuente_incidente.show',
        'uses' => 'App\\Http\\Controllers\\FuenteIncidenteController@show',
        'controller' => 'App\\Http\\Controllers\\FuenteIncidenteController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'fuente_incidente.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/fuente_incidente/{fuente_incidente}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'fuente_incidente.edit',
        'uses' => 'App\\Http\\Controllers\\FuenteIncidenteController@edit',
        'controller' => 'App\\Http\\Controllers\\FuenteIncidenteController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'fuente_incidente.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/fuente_incidente/{fuente_incidente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'fuente_incidente.update',
        'uses' => 'App\\Http\\Controllers\\FuenteIncidenteController@update',
        'controller' => 'App\\Http\\Controllers\\FuenteIncidenteController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'fuente_incidente.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/fuente_incidente/{fuente_incidente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'fuente_incidente.destroy',
        'uses' => 'App\\Http\\Controllers\\FuenteIncidenteController@destroy',
        'controller' => 'App\\Http\\Controllers\\FuenteIncidenteController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'genero.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/genero',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'genero.index',
        'uses' => 'App\\Http\\Controllers\\GeneroController@index',
        'controller' => 'App\\Http\\Controllers\\GeneroController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'genero.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/genero/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'genero.create',
        'uses' => 'App\\Http\\Controllers\\GeneroController@create',
        'controller' => 'App\\Http\\Controllers\\GeneroController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'genero.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/genero',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'genero.store',
        'uses' => 'App\\Http\\Controllers\\GeneroController@store',
        'controller' => 'App\\Http\\Controllers\\GeneroController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'genero.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/genero/{genero}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'genero.show',
        'uses' => 'App\\Http\\Controllers\\GeneroController@show',
        'controller' => 'App\\Http\\Controllers\\GeneroController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'genero.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/genero/{genero}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'genero.edit',
        'uses' => 'App\\Http\\Controllers\\GeneroController@edit',
        'controller' => 'App\\Http\\Controllers\\GeneroController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'genero.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/genero/{genero}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'genero.update',
        'uses' => 'App\\Http\\Controllers\\GeneroController@update',
        'controller' => 'App\\Http\\Controllers\\GeneroController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'genero.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/genero/{genero}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'genero.destroy',
        'uses' => 'App\\Http\\Controllers\\GeneroController@destroy',
        'controller' => 'App\\Http\\Controllers\\GeneroController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'grupo_sanguineo.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/grupo_sanguineo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'grupo_sanguineo.index',
        'uses' => 'App\\Http\\Controllers\\GrupoSanguineoController@index',
        'controller' => 'App\\Http\\Controllers\\GrupoSanguineoController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'grupo_sanguineo.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/grupo_sanguineo/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'grupo_sanguineo.create',
        'uses' => 'App\\Http\\Controllers\\GrupoSanguineoController@create',
        'controller' => 'App\\Http\\Controllers\\GrupoSanguineoController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'grupo_sanguineo.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/grupo_sanguineo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'grupo_sanguineo.store',
        'uses' => 'App\\Http\\Controllers\\GrupoSanguineoController@store',
        'controller' => 'App\\Http\\Controllers\\GrupoSanguineoController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'grupo_sanguineo.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/grupo_sanguineo/{grupo_sanguineo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'grupo_sanguineo.show',
        'uses' => 'App\\Http\\Controllers\\GrupoSanguineoController@show',
        'controller' => 'App\\Http\\Controllers\\GrupoSanguineoController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'grupo_sanguineo.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/grupo_sanguineo/{grupo_sanguineo}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'grupo_sanguineo.edit',
        'uses' => 'App\\Http\\Controllers\\GrupoSanguineoController@edit',
        'controller' => 'App\\Http\\Controllers\\GrupoSanguineoController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'grupo_sanguineo.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/grupo_sanguineo/{grupo_sanguineo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'grupo_sanguineo.update',
        'uses' => 'App\\Http\\Controllers\\GrupoSanguineoController@update',
        'controller' => 'App\\Http\\Controllers\\GrupoSanguineoController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'grupo_sanguineo.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/grupo_sanguineo/{grupo_sanguineo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'grupo_sanguineo.destroy',
        'uses' => 'App\\Http\\Controllers\\GrupoSanguineoController@destroy',
        'controller' => 'App\\Http\\Controllers\\GrupoSanguineoController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'instruccion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/instruccion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'instruccion.index',
        'uses' => 'App\\Http\\Controllers\\InstruccionController@index',
        'controller' => 'App\\Http\\Controllers\\InstruccionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'instruccion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/instruccion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'instruccion.create',
        'uses' => 'App\\Http\\Controllers\\InstruccionController@create',
        'controller' => 'App\\Http\\Controllers\\InstruccionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'instruccion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/instruccion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'instruccion.store',
        'uses' => 'App\\Http\\Controllers\\InstruccionController@store',
        'controller' => 'App\\Http\\Controllers\\InstruccionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'instruccion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/instruccion/{instruccion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'instruccion.show',
        'uses' => 'App\\Http\\Controllers\\InstruccionController@show',
        'controller' => 'App\\Http\\Controllers\\InstruccionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'instruccion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/instruccion/{instruccion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'instruccion.edit',
        'uses' => 'App\\Http\\Controllers\\InstruccionController@edit',
        'controller' => 'App\\Http\\Controllers\\InstruccionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'instruccion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/instruccion/{instruccion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'instruccion.update',
        'uses' => 'App\\Http\\Controllers\\InstruccionController@update',
        'controller' => 'App\\Http\\Controllers\\InstruccionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'instruccion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/instruccion/{instruccion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'instruccion.destroy',
        'uses' => 'App\\Http\\Controllers\\InstruccionController@destroy',
        'controller' => 'App\\Http\\Controllers\\InstruccionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ley_social.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/ley_social',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ley_social.index',
        'uses' => 'App\\Http\\Controllers\\LeySocialController@index',
        'controller' => 'App\\Http\\Controllers\\LeySocialController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ley_social.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/ley_social/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ley_social.create',
        'uses' => 'App\\Http\\Controllers\\LeySocialController@create',
        'controller' => 'App\\Http\\Controllers\\LeySocialController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ley_social.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/ley_social',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ley_social.store',
        'uses' => 'App\\Http\\Controllers\\LeySocialController@store',
        'controller' => 'App\\Http\\Controllers\\LeySocialController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ley_social.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/ley_social/{ley_social}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ley_social.show',
        'uses' => 'App\\Http\\Controllers\\LeySocialController@show',
        'controller' => 'App\\Http\\Controllers\\LeySocialController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ley_social.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/ley_social/{ley_social}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ley_social.edit',
        'uses' => 'App\\Http\\Controllers\\LeySocialController@edit',
        'controller' => 'App\\Http\\Controllers\\LeySocialController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ley_social.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/ley_social/{ley_social}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ley_social.update',
        'uses' => 'App\\Http\\Controllers\\LeySocialController@update',
        'controller' => 'App\\Http\\Controllers\\LeySocialController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'ley_social.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/ley_social/{ley_social}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'ley_social.destroy',
        'uses' => 'App\\Http\\Controllers\\LeySocialController@destroy',
        'controller' => 'App\\Http\\Controllers\\LeySocialController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'lugar_atencion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/lugar_atencion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'lugar_atencion.index',
        'uses' => 'App\\Http\\Controllers\\LugarAtencionController@index',
        'controller' => 'App\\Http\\Controllers\\LugarAtencionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'lugar_atencion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/lugar_atencion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'lugar_atencion.create',
        'uses' => 'App\\Http\\Controllers\\LugarAtencionController@create',
        'controller' => 'App\\Http\\Controllers\\LugarAtencionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'lugar_atencion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/lugar_atencion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'lugar_atencion.store',
        'uses' => 'App\\Http\\Controllers\\LugarAtencionController@store',
        'controller' => 'App\\Http\\Controllers\\LugarAtencionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'lugar_atencion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/lugar_atencion/{lugar_atencion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'lugar_atencion.show',
        'uses' => 'App\\Http\\Controllers\\LugarAtencionController@show',
        'controller' => 'App\\Http\\Controllers\\LugarAtencionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'lugar_atencion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/lugar_atencion/{lugar_atencion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'lugar_atencion.edit',
        'uses' => 'App\\Http\\Controllers\\LugarAtencionController@edit',
        'controller' => 'App\\Http\\Controllers\\LugarAtencionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'lugar_atencion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/lugar_atencion/{lugar_atencion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'lugar_atencion.update',
        'uses' => 'App\\Http\\Controllers\\LugarAtencionController@update',
        'controller' => 'App\\Http\\Controllers\\LugarAtencionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'lugar_atencion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/lugar_atencion/{lugar_atencion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'lugar_atencion.destroy',
        'uses' => 'App\\Http\\Controllers\\LugarAtencionController@destroy',
        'controller' => 'App\\Http\\Controllers\\LugarAtencionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medio_derivacion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/medio_derivacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'medio_derivacion.index',
        'uses' => 'App\\Http\\Controllers\\MedioDerivacionController@index',
        'controller' => 'App\\Http\\Controllers\\MedioDerivacionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medio_derivacion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/medio_derivacion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'medio_derivacion.create',
        'uses' => 'App\\Http\\Controllers\\MedioDerivacionController@create',
        'controller' => 'App\\Http\\Controllers\\MedioDerivacionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medio_derivacion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/medio_derivacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'medio_derivacion.store',
        'uses' => 'App\\Http\\Controllers\\MedioDerivacionController@store',
        'controller' => 'App\\Http\\Controllers\\MedioDerivacionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medio_derivacion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/medio_derivacion/{medio_derivacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'medio_derivacion.show',
        'uses' => 'App\\Http\\Controllers\\MedioDerivacionController@show',
        'controller' => 'App\\Http\\Controllers\\MedioDerivacionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medio_derivacion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/medio_derivacion/{medio_derivacion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'medio_derivacion.edit',
        'uses' => 'App\\Http\\Controllers\\MedioDerivacionController@edit',
        'controller' => 'App\\Http\\Controllers\\MedioDerivacionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medio_derivacion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/medio_derivacion/{medio_derivacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'medio_derivacion.update',
        'uses' => 'App\\Http\\Controllers\\MedioDerivacionController@update',
        'controller' => 'App\\Http\\Controllers\\MedioDerivacionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medio_derivacion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/medio_derivacion/{medio_derivacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'medio_derivacion.destroy',
        'uses' => 'App\\Http\\Controllers\\MedioDerivacionController@destroy',
        'controller' => 'App\\Http\\Controllers\\MedioDerivacionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nacionalidad.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/nacionalidad',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nacionalidad.index',
        'uses' => 'App\\Http\\Controllers\\NacionalidadController@index',
        'controller' => 'App\\Http\\Controllers\\NacionalidadController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nacionalidad.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/nacionalidad/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nacionalidad.create',
        'uses' => 'App\\Http\\Controllers\\NacionalidadController@create',
        'controller' => 'App\\Http\\Controllers\\NacionalidadController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nacionalidad.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/nacionalidad',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nacionalidad.store',
        'uses' => 'App\\Http\\Controllers\\NacionalidadController@store',
        'controller' => 'App\\Http\\Controllers\\NacionalidadController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nacionalidad.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/nacionalidad/{nacionalidad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nacionalidad.show',
        'uses' => 'App\\Http\\Controllers\\NacionalidadController@show',
        'controller' => 'App\\Http\\Controllers\\NacionalidadController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nacionalidad.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/nacionalidad/{nacionalidad}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nacionalidad.edit',
        'uses' => 'App\\Http\\Controllers\\NacionalidadController@edit',
        'controller' => 'App\\Http\\Controllers\\NacionalidadController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nacionalidad.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/nacionalidad/{nacionalidad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nacionalidad.update',
        'uses' => 'App\\Http\\Controllers\\NacionalidadController@update',
        'controller' => 'App\\Http\\Controllers\\NacionalidadController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nacionalidad.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/nacionalidad/{nacionalidad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nacionalidad.destroy',
        'uses' => 'App\\Http\\Controllers\\NacionalidadController@destroy',
        'controller' => 'App\\Http\\Controllers\\NacionalidadController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nivel_riesgo.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/nivel_riesgo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nivel_riesgo.index',
        'uses' => 'App\\Http\\Controllers\\NivelRiesgoController@index',
        'controller' => 'App\\Http\\Controllers\\NivelRiesgoController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nivel_riesgo.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/nivel_riesgo/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nivel_riesgo.create',
        'uses' => 'App\\Http\\Controllers\\NivelRiesgoController@create',
        'controller' => 'App\\Http\\Controllers\\NivelRiesgoController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nivel_riesgo.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/nivel_riesgo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nivel_riesgo.store',
        'uses' => 'App\\Http\\Controllers\\NivelRiesgoController@store',
        'controller' => 'App\\Http\\Controllers\\NivelRiesgoController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nivel_riesgo.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/nivel_riesgo/{nivel_riesgo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nivel_riesgo.show',
        'uses' => 'App\\Http\\Controllers\\NivelRiesgoController@show',
        'controller' => 'App\\Http\\Controllers\\NivelRiesgoController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nivel_riesgo.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/nivel_riesgo/{nivel_riesgo}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nivel_riesgo.edit',
        'uses' => 'App\\Http\\Controllers\\NivelRiesgoController@edit',
        'controller' => 'App\\Http\\Controllers\\NivelRiesgoController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nivel_riesgo.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/nivel_riesgo/{nivel_riesgo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nivel_riesgo.update',
        'uses' => 'App\\Http\\Controllers\\NivelRiesgoController@update',
        'controller' => 'App\\Http\\Controllers\\NivelRiesgoController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'nivel_riesgo.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/nivel_riesgo/{nivel_riesgo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'nivel_riesgo.destroy',
        'uses' => 'App\\Http\\Controllers\\NivelRiesgoController@destroy',
        'controller' => 'App\\Http\\Controllers\\NivelRiesgoController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'planta.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/planta',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'planta.index',
        'uses' => 'App\\Http\\Controllers\\PlantaController@index',
        'controller' => 'App\\Http\\Controllers\\PlantaController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'planta.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/planta/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'planta.create',
        'uses' => 'App\\Http\\Controllers\\PlantaController@create',
        'controller' => 'App\\Http\\Controllers\\PlantaController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'planta.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/planta',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'planta.store',
        'uses' => 'App\\Http\\Controllers\\PlantaController@store',
        'controller' => 'App\\Http\\Controllers\\PlantaController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'planta.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/planta/{plantum}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'planta.show',
        'uses' => 'App\\Http\\Controllers\\PlantaController@show',
        'controller' => 'App\\Http\\Controllers\\PlantaController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'planta.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/planta/{plantum}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'planta.edit',
        'uses' => 'App\\Http\\Controllers\\PlantaController@edit',
        'controller' => 'App\\Http\\Controllers\\PlantaController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'planta.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/planta/{plantum}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'planta.update',
        'uses' => 'App\\Http\\Controllers\\PlantaController@update',
        'controller' => 'App\\Http\\Controllers\\PlantaController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'planta.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/planta/{plantum}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'planta.destroy',
        'uses' => 'App\\Http\\Controllers\\PlantaController@destroy',
        'controller' => 'App\\Http\\Controllers\\PlantaController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'prevision.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/prevision',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'prevision.index',
        'uses' => 'App\\Http\\Controllers\\PrevisionController@index',
        'controller' => 'App\\Http\\Controllers\\PrevisionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'prevision.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/prevision/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'prevision.create',
        'uses' => 'App\\Http\\Controllers\\PrevisionController@create',
        'controller' => 'App\\Http\\Controllers\\PrevisionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'prevision.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/prevision',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'prevision.store',
        'uses' => 'App\\Http\\Controllers\\PrevisionController@store',
        'controller' => 'App\\Http\\Controllers\\PrevisionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'prevision.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/prevision/{prevision}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'prevision.show',
        'uses' => 'App\\Http\\Controllers\\PrevisionController@show',
        'controller' => 'App\\Http\\Controllers\\PrevisionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'prevision.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/prevision/{prevision}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'prevision.edit',
        'uses' => 'App\\Http\\Controllers\\PrevisionController@edit',
        'controller' => 'App\\Http\\Controllers\\PrevisionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'prevision.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/prevision/{prevision}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'prevision.update',
        'uses' => 'App\\Http\\Controllers\\PrevisionController@update',
        'controller' => 'App\\Http\\Controllers\\PrevisionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'prevision.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/prevision/{prevision}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'prevision.destroy',
        'uses' => 'App\\Http\\Controllers\\PrevisionController@destroy',
        'controller' => 'App\\Http\\Controllers\\PrevisionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pueblo.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/pueblo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pueblo.index',
        'uses' => 'App\\Http\\Controllers\\PuebloController@index',
        'controller' => 'App\\Http\\Controllers\\PuebloController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pueblo.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/pueblo/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pueblo.create',
        'uses' => 'App\\Http\\Controllers\\PuebloController@create',
        'controller' => 'App\\Http\\Controllers\\PuebloController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pueblo.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/pueblo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pueblo.store',
        'uses' => 'App\\Http\\Controllers\\PuebloController@store',
        'controller' => 'App\\Http\\Controllers\\PuebloController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pueblo.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/pueblo/{pueblo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pueblo.show',
        'uses' => 'App\\Http\\Controllers\\PuebloController@show',
        'controller' => 'App\\Http\\Controllers\\PuebloController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pueblo.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/pueblo/{pueblo}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pueblo.edit',
        'uses' => 'App\\Http\\Controllers\\PuebloController@edit',
        'controller' => 'App\\Http\\Controllers\\PuebloController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pueblo.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/pueblo/{pueblo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pueblo.update',
        'uses' => 'App\\Http\\Controllers\\PuebloController@update',
        'controller' => 'App\\Http\\Controllers\\PuebloController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'pueblo.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/pueblo/{pueblo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'pueblo.destroy',
        'uses' => 'App\\Http\\Controllers\\PuebloController@destroy',
        'controller' => 'App\\Http\\Controllers\\PuebloController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'religion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/religion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'religion.index',
        'uses' => 'App\\Http\\Controllers\\ReligionController@index',
        'controller' => 'App\\Http\\Controllers\\ReligionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'religion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/religion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'religion.create',
        'uses' => 'App\\Http\\Controllers\\ReligionController@create',
        'controller' => 'App\\Http\\Controllers\\ReligionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'religion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/religion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'religion.store',
        'uses' => 'App\\Http\\Controllers\\ReligionController@store',
        'controller' => 'App\\Http\\Controllers\\ReligionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'religion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/religion/{religion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'religion.show',
        'uses' => 'App\\Http\\Controllers\\ReligionController@show',
        'controller' => 'App\\Http\\Controllers\\ReligionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'religion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/religion/{religion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'religion.edit',
        'uses' => 'App\\Http\\Controllers\\ReligionController@edit',
        'controller' => 'App\\Http\\Controllers\\ReligionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'religion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/religion/{religion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'religion.update',
        'uses' => 'App\\Http\\Controllers\\ReligionController@update',
        'controller' => 'App\\Http\\Controllers\\ReligionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'religion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/religion/{religion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'religion.destroy',
        'uses' => 'App\\Http\\Controllers\\ReligionController@destroy',
        'controller' => 'App\\Http\\Controllers\\ReligionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'responsable.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/responsable',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'responsable.index',
        'uses' => 'App\\Http\\Controllers\\ResponsableController@index',
        'controller' => 'App\\Http\\Controllers\\ResponsableController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'responsable.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/responsable/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'responsable.create',
        'uses' => 'App\\Http\\Controllers\\ResponsableController@create',
        'controller' => 'App\\Http\\Controllers\\ResponsableController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'responsable.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/responsable',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'responsable.store',
        'uses' => 'App\\Http\\Controllers\\ResponsableController@store',
        'controller' => 'App\\Http\\Controllers\\ResponsableController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'responsable.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/responsable/{responsable}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'responsable.show',
        'uses' => 'App\\Http\\Controllers\\ResponsableController@show',
        'controller' => 'App\\Http\\Controllers\\ResponsableController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'responsable.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/responsable/{responsable}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'responsable.edit',
        'uses' => 'App\\Http\\Controllers\\ResponsableController@edit',
        'controller' => 'App\\Http\\Controllers\\ResponsableController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'responsable.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/responsable/{responsable}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'responsable.update',
        'uses' => 'App\\Http\\Controllers\\ResponsableController@update',
        'controller' => 'App\\Http\\Controllers\\ResponsableController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'responsable.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/responsable/{responsable}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'responsable.destroy',
        'uses' => 'App\\Http\\Controllers\\ResponsableController@destroy',
        'controller' => 'App\\Http\\Controllers\\ResponsableController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'semaforo.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/semaforo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'semaforo.index',
        'uses' => 'App\\Http\\Controllers\\SemaforoController@index',
        'controller' => 'App\\Http\\Controllers\\SemaforoController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'semaforo.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/semaforo/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'semaforo.create',
        'uses' => 'App\\Http\\Controllers\\SemaforoController@create',
        'controller' => 'App\\Http\\Controllers\\SemaforoController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'semaforo.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/semaforo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'semaforo.store',
        'uses' => 'App\\Http\\Controllers\\SemaforoController@store',
        'controller' => 'App\\Http\\Controllers\\SemaforoController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'semaforo.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/semaforo/{semaforo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'semaforo.show',
        'uses' => 'App\\Http\\Controllers\\SemaforoController@show',
        'controller' => 'App\\Http\\Controllers\\SemaforoController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'semaforo.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/semaforo/{semaforo}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'semaforo.edit',
        'uses' => 'App\\Http\\Controllers\\SemaforoController@edit',
        'controller' => 'App\\Http\\Controllers\\SemaforoController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'semaforo.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/semaforo/{semaforo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'semaforo.update',
        'uses' => 'App\\Http\\Controllers\\SemaforoController@update',
        'controller' => 'App\\Http\\Controllers\\SemaforoController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'semaforo.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/semaforo/{semaforo}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'semaforo.destroy',
        'uses' => 'App\\Http\\Controllers\\SemaforoController@destroy',
        'controller' => 'App\\Http\\Controllers\\SemaforoController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'seguro.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/seguro',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'seguro.index',
        'uses' => 'App\\Http\\Controllers\\SeguroController@index',
        'controller' => 'App\\Http\\Controllers\\SeguroController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'seguro.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/seguro/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'seguro.create',
        'uses' => 'App\\Http\\Controllers\\SeguroController@create',
        'controller' => 'App\\Http\\Controllers\\SeguroController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'seguro.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/seguro',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'seguro.store',
        'uses' => 'App\\Http\\Controllers\\SeguroController@store',
        'controller' => 'App\\Http\\Controllers\\SeguroController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'seguro.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/seguro/{seguro}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'seguro.show',
        'uses' => 'App\\Http\\Controllers\\SeguroController@show',
        'controller' => 'App\\Http\\Controllers\\SeguroController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'seguro.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/seguro/{seguro}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'seguro.edit',
        'uses' => 'App\\Http\\Controllers\\SeguroController@edit',
        'controller' => 'App\\Http\\Controllers\\SeguroController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'seguro.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/seguro/{seguro}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'seguro.update',
        'uses' => 'App\\Http\\Controllers\\SeguroController@update',
        'controller' => 'App\\Http\\Controllers\\SeguroController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'seguro.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/seguro/{seguro}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'seguro.destroy',
        'uses' => 'App\\Http\\Controllers\\SeguroController@destroy',
        'controller' => 'App\\Http\\Controllers\\SeguroController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'sistema_afectado.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/sistema_afectado',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'sistema_afectado.index',
        'uses' => 'App\\Http\\Controllers\\SistemaAfectadoController@index',
        'controller' => 'App\\Http\\Controllers\\SistemaAfectadoController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'sistema_afectado.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/sistema_afectado/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'sistema_afectado.create',
        'uses' => 'App\\Http\\Controllers\\SistemaAfectadoController@create',
        'controller' => 'App\\Http\\Controllers\\SistemaAfectadoController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'sistema_afectado.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/sistema_afectado',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'sistema_afectado.store',
        'uses' => 'App\\Http\\Controllers\\SistemaAfectadoController@store',
        'controller' => 'App\\Http\\Controllers\\SistemaAfectadoController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'sistema_afectado.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/sistema_afectado/{sistema_afectado}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'sistema_afectado.show',
        'uses' => 'App\\Http\\Controllers\\SistemaAfectadoController@show',
        'controller' => 'App\\Http\\Controllers\\SistemaAfectadoController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'sistema_afectado.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/sistema_afectado/{sistema_afectado}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'sistema_afectado.edit',
        'uses' => 'App\\Http\\Controllers\\SistemaAfectadoController@edit',
        'controller' => 'App\\Http\\Controllers\\SistemaAfectadoController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'sistema_afectado.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/sistema_afectado/{sistema_afectado}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'sistema_afectado.update',
        'uses' => 'App\\Http\\Controllers\\SistemaAfectadoController@update',
        'controller' => 'App\\Http\\Controllers\\SistemaAfectadoController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'sistema_afectado.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/sistema_afectado/{sistema_afectado}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'sistema_afectado.destroy',
        'uses' => 'App\\Http\\Controllers\\SistemaAfectadoController@destroy',
        'controller' => 'App\\Http\\Controllers\\SistemaAfectadoController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'test_drogas.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/test_drogas',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'test_drogas.index',
        'uses' => 'App\\Http\\Controllers\\TestDrogaController@index',
        'controller' => 'App\\Http\\Controllers\\TestDrogaController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'test_drogas.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/test_drogas/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'test_drogas.create',
        'uses' => 'App\\Http\\Controllers\\TestDrogaController@create',
        'controller' => 'App\\Http\\Controllers\\TestDrogaController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'test_drogas.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/test_drogas',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'test_drogas.store',
        'uses' => 'App\\Http\\Controllers\\TestDrogaController@store',
        'controller' => 'App\\Http\\Controllers\\TestDrogaController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'test_drogas.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/test_drogas/{test_droga}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'test_drogas.show',
        'uses' => 'App\\Http\\Controllers\\TestDrogaController@show',
        'controller' => 'App\\Http\\Controllers\\TestDrogaController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'test_drogas.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/test_drogas/{test_droga}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'test_drogas.edit',
        'uses' => 'App\\Http\\Controllers\\TestDrogaController@edit',
        'controller' => 'App\\Http\\Controllers\\TestDrogaController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'test_drogas.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/test_drogas/{test_droga}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'test_drogas.update',
        'uses' => 'App\\Http\\Controllers\\TestDrogaController@update',
        'controller' => 'App\\Http\\Controllers\\TestDrogaController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'test_drogas.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/test_drogas/{test_droga}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'test_drogas.destroy',
        'uses' => 'App\\Http\\Controllers\\TestDrogaController@destroy',
        'controller' => 'App\\Http\\Controllers\\TestDrogaController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'trastorno_cronico.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/trastorno_cronico',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'trastorno_cronico.index',
        'uses' => 'App\\Http\\Controllers\\TrastornoCronicoController@index',
        'controller' => 'App\\Http\\Controllers\\TrastornoCronicoController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'trastorno_cronico.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/trastorno_cronico/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'trastorno_cronico.create',
        'uses' => 'App\\Http\\Controllers\\TrastornoCronicoController@create',
        'controller' => 'App\\Http\\Controllers\\TrastornoCronicoController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'trastorno_cronico.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/trastorno_cronico',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'trastorno_cronico.store',
        'uses' => 'App\\Http\\Controllers\\TrastornoCronicoController@store',
        'controller' => 'App\\Http\\Controllers\\TrastornoCronicoController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'trastorno_cronico.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/trastorno_cronico/{trastorno_cronico}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'trastorno_cronico.show',
        'uses' => 'App\\Http\\Controllers\\TrastornoCronicoController@show',
        'controller' => 'App\\Http\\Controllers\\TrastornoCronicoController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'trastorno_cronico.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/trastorno_cronico/{trastorno_cronico}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'trastorno_cronico.edit',
        'uses' => 'App\\Http\\Controllers\\TrastornoCronicoController@edit',
        'controller' => 'App\\Http\\Controllers\\TrastornoCronicoController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'trastorno_cronico.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/trastorno_cronico/{trastorno_cronico}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'trastorno_cronico.update',
        'uses' => 'App\\Http\\Controllers\\TrastornoCronicoController@update',
        'controller' => 'App\\Http\\Controllers\\TrastornoCronicoController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'trastorno_cronico.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/trastorno_cronico/{trastorno_cronico}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'trastorno_cronico.destroy',
        'uses' => 'App\\Http\\Controllers\\TrastornoCronicoController@destroy',
        'controller' => 'App\\Http\\Controllers\\TrastornoCronicoController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_accidente.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_accidente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_accidente.index',
        'uses' => 'App\\Http\\Controllers\\TipoAccidenteController@index',
        'controller' => 'App\\Http\\Controllers\\TipoAccidenteController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_accidente.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_accidente/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_accidente.create',
        'uses' => 'App\\Http\\Controllers\\TipoAccidenteController@create',
        'controller' => 'App\\Http\\Controllers\\TipoAccidenteController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_accidente.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/tipo_accidente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_accidente.store',
        'uses' => 'App\\Http\\Controllers\\TipoAccidenteController@store',
        'controller' => 'App\\Http\\Controllers\\TipoAccidenteController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_accidente.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_accidente/{tipo_accidente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_accidente.show',
        'uses' => 'App\\Http\\Controllers\\TipoAccidenteController@show',
        'controller' => 'App\\Http\\Controllers\\TipoAccidenteController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_accidente.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_accidente/{tipo_accidente}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_accidente.edit',
        'uses' => 'App\\Http\\Controllers\\TipoAccidenteController@edit',
        'controller' => 'App\\Http\\Controllers\\TipoAccidenteController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_accidente.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/tipo_accidente/{tipo_accidente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_accidente.update',
        'uses' => 'App\\Http\\Controllers\\TipoAccidenteController@update',
        'controller' => 'App\\Http\\Controllers\\TipoAccidenteController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_accidente.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/tipo_accidente/{tipo_accidente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_accidente.destroy',
        'uses' => 'App\\Http\\Controllers\\TipoAccidenteController@destroy',
        'controller' => 'App\\Http\\Controllers\\TipoAccidenteController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_atencion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_atencion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_atencion.index',
        'uses' => 'App\\Http\\Controllers\\TipoAtencionController@index',
        'controller' => 'App\\Http\\Controllers\\TipoAtencionController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_atencion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_atencion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_atencion.create',
        'uses' => 'App\\Http\\Controllers\\TipoAtencionController@create',
        'controller' => 'App\\Http\\Controllers\\TipoAtencionController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_atencion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/tipo_atencion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_atencion.store',
        'uses' => 'App\\Http\\Controllers\\TipoAtencionController@store',
        'controller' => 'App\\Http\\Controllers\\TipoAtencionController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_atencion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_atencion/{tipo_atencion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_atencion.show',
        'uses' => 'App\\Http\\Controllers\\TipoAtencionController@show',
        'controller' => 'App\\Http\\Controllers\\TipoAtencionController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_atencion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_atencion/{tipo_atencion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_atencion.edit',
        'uses' => 'App\\Http\\Controllers\\TipoAtencionController@edit',
        'controller' => 'App\\Http\\Controllers\\TipoAtencionController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_atencion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/tipo_atencion/{tipo_atencion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_atencion.update',
        'uses' => 'App\\Http\\Controllers\\TipoAtencionController@update',
        'controller' => 'App\\Http\\Controllers\\TipoAtencionController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_atencion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/tipo_atencion/{tipo_atencion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_atencion.destroy',
        'uses' => 'App\\Http\\Controllers\\TipoAtencionController@destroy',
        'controller' => 'App\\Http\\Controllers\\TipoAtencionController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_enfermedad.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_enfermedad',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_enfermedad.index',
        'uses' => 'App\\Http\\Controllers\\TipoEnfermedadController@index',
        'controller' => 'App\\Http\\Controllers\\TipoEnfermedadController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_enfermedad.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_enfermedad/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_enfermedad.create',
        'uses' => 'App\\Http\\Controllers\\TipoEnfermedadController@create',
        'controller' => 'App\\Http\\Controllers\\TipoEnfermedadController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_enfermedad.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/tipo_enfermedad',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_enfermedad.store',
        'uses' => 'App\\Http\\Controllers\\TipoEnfermedadController@store',
        'controller' => 'App\\Http\\Controllers\\TipoEnfermedadController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_enfermedad.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_enfermedad/{tipo_enfermedad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_enfermedad.show',
        'uses' => 'App\\Http\\Controllers\\TipoEnfermedadController@show',
        'controller' => 'App\\Http\\Controllers\\TipoEnfermedadController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_enfermedad.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_enfermedad/{tipo_enfermedad}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_enfermedad.edit',
        'uses' => 'App\\Http\\Controllers\\TipoEnfermedadController@edit',
        'controller' => 'App\\Http\\Controllers\\TipoEnfermedadController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_enfermedad.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/tipo_enfermedad/{tipo_enfermedad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_enfermedad.update',
        'uses' => 'App\\Http\\Controllers\\TipoEnfermedadController@update',
        'controller' => 'App\\Http\\Controllers\\TipoEnfermedadController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_enfermedad.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/tipo_enfermedad/{tipo_enfermedad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_enfermedad.destroy',
        'uses' => 'App\\Http\\Controllers\\TipoEnfermedadController@destroy',
        'controller' => 'App\\Http\\Controllers\\TipoEnfermedadController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_examen.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_examen',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_examen.index',
        'uses' => 'App\\Http\\Controllers\\TipoExamenController@index',
        'controller' => 'App\\Http\\Controllers\\TipoExamenController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_examen.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_examen/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_examen.create',
        'uses' => 'App\\Http\\Controllers\\TipoExamenController@create',
        'controller' => 'App\\Http\\Controllers\\TipoExamenController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_examen.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/tipo_examen',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_examen.store',
        'uses' => 'App\\Http\\Controllers\\TipoExamenController@store',
        'controller' => 'App\\Http\\Controllers\\TipoExamenController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_examen.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_examen/{tipo_examan}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_examen.show',
        'uses' => 'App\\Http\\Controllers\\TipoExamenController@show',
        'controller' => 'App\\Http\\Controllers\\TipoExamenController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_examen.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_examen/{tipo_examan}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_examen.edit',
        'uses' => 'App\\Http\\Controllers\\TipoExamenController@edit',
        'controller' => 'App\\Http\\Controllers\\TipoExamenController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_examen.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/tipo_examen/{tipo_examan}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_examen.update',
        'uses' => 'App\\Http\\Controllers\\TipoExamenController@update',
        'controller' => 'App\\Http\\Controllers\\TipoExamenController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_examen.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/tipo_examen/{tipo_examan}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_examen.destroy',
        'uses' => 'App\\Http\\Controllers\\TipoExamenController@destroy',
        'controller' => 'App\\Http\\Controllers\\TipoExamenController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_licencia.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_licencia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_licencia.index',
        'uses' => 'App\\Http\\Controllers\\TipoLicenciaController@index',
        'controller' => 'App\\Http\\Controllers\\TipoLicenciaController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_licencia.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_licencia/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_licencia.create',
        'uses' => 'App\\Http\\Controllers\\TipoLicenciaController@create',
        'controller' => 'App\\Http\\Controllers\\TipoLicenciaController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_licencia.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/tipo_licencia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_licencia.store',
        'uses' => 'App\\Http\\Controllers\\TipoLicenciaController@store',
        'controller' => 'App\\Http\\Controllers\\TipoLicenciaController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_licencia.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_licencia/{tipo_licencium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_licencia.show',
        'uses' => 'App\\Http\\Controllers\\TipoLicenciaController@show',
        'controller' => 'App\\Http\\Controllers\\TipoLicenciaController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_licencia.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/tipo_licencia/{tipo_licencium}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_licencia.edit',
        'uses' => 'App\\Http\\Controllers\\TipoLicenciaController@edit',
        'controller' => 'App\\Http\\Controllers\\TipoLicenciaController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_licencia.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/tipo_licencia/{tipo_licencium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_licencia.update',
        'uses' => 'App\\Http\\Controllers\\TipoLicenciaController@update',
        'controller' => 'App\\Http\\Controllers\\TipoLicenciaController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'tipo_licencia.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/tipo_licencia/{tipo_licencium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'tipo_licencia.destroy',
        'uses' => 'App\\Http\\Controllers\\TipoLicenciaController@destroy',
        'controller' => 'App\\Http\\Controllers\\TipoLicenciaController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'turno.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/turno',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'turno.index',
        'uses' => 'App\\Http\\Controllers\\TurnoController@index',
        'controller' => 'App\\Http\\Controllers\\TurnoController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'turno.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/turno/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'turno.create',
        'uses' => 'App\\Http\\Controllers\\TurnoController@create',
        'controller' => 'App\\Http\\Controllers\\TurnoController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'turno.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/turno',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'turno.store',
        'uses' => 'App\\Http\\Controllers\\TurnoController@store',
        'controller' => 'App\\Http\\Controllers\\TurnoController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'turno.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/turno/{turno}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'turno.show',
        'uses' => 'App\\Http\\Controllers\\TurnoController@show',
        'controller' => 'App\\Http\\Controllers\\TurnoController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'turno.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/turno/{turno}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'turno.edit',
        'uses' => 'App\\Http\\Controllers\\TurnoController@edit',
        'controller' => 'App\\Http\\Controllers\\TurnoController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'turno.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/turno/{turno}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'turno.update',
        'uses' => 'App\\Http\\Controllers\\TurnoController@update',
        'controller' => 'App\\Http\\Controllers\\TurnoController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'turno.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/turno/{turno}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'turno.destroy',
        'uses' => 'App\\Http\\Controllers\\TurnoController@destroy',
        'controller' => 'App\\Http\\Controllers\\TurnoController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'unidad.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/unidad',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'unidad.index',
        'uses' => 'App\\Http\\Controllers\\UnidadController@index',
        'controller' => 'App\\Http\\Controllers\\UnidadController@index',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'unidad.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/unidad/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'unidad.create',
        'uses' => 'App\\Http\\Controllers\\UnidadController@create',
        'controller' => 'App\\Http\\Controllers\\UnidadController@create',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'unidad.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'secundaria/unidad',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'unidad.store',
        'uses' => 'App\\Http\\Controllers\\UnidadController@store',
        'controller' => 'App\\Http\\Controllers\\UnidadController@store',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'unidad.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/unidad/{unidad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'unidad.show',
        'uses' => 'App\\Http\\Controllers\\UnidadController@show',
        'controller' => 'App\\Http\\Controllers\\UnidadController@show',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'unidad.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'secundaria/unidad/{unidad}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'unidad.edit',
        'uses' => 'App\\Http\\Controllers\\UnidadController@edit',
        'controller' => 'App\\Http\\Controllers\\UnidadController@edit',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'unidad.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'secundaria/unidad/{unidad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'unidad.update',
        'uses' => 'App\\Http\\Controllers\\UnidadController@update',
        'controller' => 'App\\Http\\Controllers\\UnidadController@update',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'unidad.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'secundaria/unidad/{unidad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'as' => 'unidad.destroy',
        'uses' => 'App\\Http\\Controllers\\UnidadController@destroy',
        'controller' => 'App\\Http\\Controllers\\UnidadController@destroy',
        'namespace' => NULL,
        'prefix' => '/secundaria',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::rtpMXVrqCCYOFcjD' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => '\\Inertia\\Controller@__invoke',
        'controller' => '\\Inertia\\Controller',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'generated::rtpMXVrqCCYOFcjD',
      ),
      'fallback' => false,
      'defaults' => 
      array (
        'component' => 'Dashboard',
        'props' => 
        array (
        ),
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'personasPorEmpresa' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard/personasPorEmpresa',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DashboardController@personasPorEmpresa',
        'controller' => 'App\\Http\\Controllers\\DashboardController@personasPorEmpresa',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'personasPorEmpresa',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'personasPorUnidad' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard/personasPorUnidad',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DashboardController@personasPorUnidad',
        'controller' => 'App\\Http\\Controllers\\DashboardController@personasPorUnidad',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'personasPorUnidad',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'personasPorPlanta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard/personasPorPlanta',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DashboardController@personasPorPlanta',
        'controller' => 'App\\Http\\Controllers\\DashboardController@personasPorPlanta',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'personasPorPlanta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'personasPorCeco' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard/personasPorCeco',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DashboardController@personasPorCeco',
        'controller' => 'App\\Http\\Controllers\\DashboardController@personasPorCeco',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'personasPorCeco',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'personasPorExpo' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard/personasPorExpo',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DashboardController@personasPorExpo',
        'controller' => 'App\\Http\\Controllers\\DashboardController@personasPorExpo',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'personasPorExpo',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'expo_empresa' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard/expo_empresa',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DashboardController@expo_empresa',
        'controller' => 'App\\Http\\Controllers\\DashboardController@expo_empresa',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'expo_empresa',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'expo_planta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard/expo_planta',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DashboardController@expo_planta',
        'controller' => 'App\\Http\\Controllers\\DashboardController@expo_planta',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'expo_planta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'enfermedad_empresa' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard/enfermedad_empresa',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DashboardController@enfermedad_empresa',
        'controller' => 'App\\Http\\Controllers\\DashboardController@enfermedad_empresa',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'enfermedad_empresa',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'enfermedades_planta' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'dashboard/enfermedades_planta',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
          4 => 'auth:sanctum',
          5 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          6 => 'verified',
        ),
        'uses' => 'App\\Http\\Controllers\\DashboardController@enfermedades_planta',
        'controller' => 'App\\Http\\Controllers\\DashboardController@enfermedades_planta',
        'namespace' => NULL,
        'prefix' => '/dashboard',
        'where' => 
        array (
        ),
        'as' => 'enfermedades_planta',
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'generated::nOIhxMd0w77kpV7g' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'ficha',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'uses' => '\\Inertia\\Controller@__invoke',
        'controller' => '\\Inertia\\Controller',
        'namespace' => NULL,
        'prefix' => '',
        'where' => 
        array (
        ),
        'as' => 'generated::nOIhxMd0w77kpV7g',
      ),
      'fallback' => false,
      'defaults' => 
      array (
        'component' => 'SubPages/FichaMedica',
        'props' => 
        array (
        ),
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alergia.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'alergia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'alergia.index',
        'uses' => 'App\\Http\\Controllers\\AlergiaController@index',
        'controller' => 'App\\Http\\Controllers\\AlergiaController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alergia.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'alergia/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'alergia.create',
        'uses' => 'App\\Http\\Controllers\\AlergiaController@create',
        'controller' => 'App\\Http\\Controllers\\AlergiaController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alergia.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'alergia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'alergia.store',
        'uses' => 'App\\Http\\Controllers\\AlergiaController@store',
        'controller' => 'App\\Http\\Controllers\\AlergiaController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alergia.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'alergia/{alergium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'alergia.show',
        'uses' => 'App\\Http\\Controllers\\AlergiaController@show',
        'controller' => 'App\\Http\\Controllers\\AlergiaController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alergia.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'alergia/{alergium}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'alergia.edit',
        'uses' => 'App\\Http\\Controllers\\AlergiaController@edit',
        'controller' => 'App\\Http\\Controllers\\AlergiaController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alergia.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'alergia/{alergium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'alergia.update',
        'uses' => 'App\\Http\\Controllers\\AlergiaController@update',
        'controller' => 'App\\Http\\Controllers\\AlergiaController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'alergia.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'alergia/{alergium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'alergia.destroy',
        'uses' => 'App\\Http\\Controllers\\AlergiaController@destroy',
        'controller' => 'App\\Http\\Controllers\\AlergiaController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'atencion_diaria.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'atencion_diaria',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'atencion_diaria.index',
        'uses' => 'App\\Http\\Controllers\\AtencionDiariaController@index',
        'controller' => 'App\\Http\\Controllers\\AtencionDiariaController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'atencion_diaria.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'atencion_diaria/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'atencion_diaria.create',
        'uses' => 'App\\Http\\Controllers\\AtencionDiariaController@create',
        'controller' => 'App\\Http\\Controllers\\AtencionDiariaController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'atencion_diaria.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'atencion_diaria',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'atencion_diaria.store',
        'uses' => 'App\\Http\\Controllers\\AtencionDiariaController@store',
        'controller' => 'App\\Http\\Controllers\\AtencionDiariaController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'atencion_diaria.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'atencion_diaria/{atencion_diarium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'atencion_diaria.show',
        'uses' => 'App\\Http\\Controllers\\AtencionDiariaController@show',
        'controller' => 'App\\Http\\Controllers\\AtencionDiariaController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'atencion_diaria.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'atencion_diaria/{atencion_diarium}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'atencion_diaria.edit',
        'uses' => 'App\\Http\\Controllers\\AtencionDiariaController@edit',
        'controller' => 'App\\Http\\Controllers\\AtencionDiariaController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'atencion_diaria.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'atencion_diaria/{atencion_diarium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'atencion_diaria.update',
        'uses' => 'App\\Http\\Controllers\\AtencionDiariaController@update',
        'controller' => 'App\\Http\\Controllers\\AtencionDiariaController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'atencion_diaria.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'atencion_diaria/{atencion_diarium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'atencion_diaria.destroy',
        'uses' => 'App\\Http\\Controllers\\AtencionDiariaController@destroy',
        'controller' => 'App\\Http\\Controllers\\AtencionDiariaController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'certificacion.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'certificacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'certificacion.index',
        'uses' => 'App\\Http\\Controllers\\CertificacionController@index',
        'controller' => 'App\\Http\\Controllers\\CertificacionController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'certificacion.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'certificacion/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'certificacion.create',
        'uses' => 'App\\Http\\Controllers\\CertificacionController@create',
        'controller' => 'App\\Http\\Controllers\\CertificacionController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'certificacion.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'certificacion',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'certificacion.store',
        'uses' => 'App\\Http\\Controllers\\CertificacionController@store',
        'controller' => 'App\\Http\\Controllers\\CertificacionController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'certificacion.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'certificacion/{certificacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'certificacion.show',
        'uses' => 'App\\Http\\Controllers\\CertificacionController@show',
        'controller' => 'App\\Http\\Controllers\\CertificacionController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'certificacion.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'certificacion/{certificacion}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'certificacion.edit',
        'uses' => 'App\\Http\\Controllers\\CertificacionController@edit',
        'controller' => 'App\\Http\\Controllers\\CertificacionController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'certificacion.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'certificacion/{certificacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'certificacion.update',
        'uses' => 'App\\Http\\Controllers\\CertificacionController@update',
        'controller' => 'App\\Http\\Controllers\\CertificacionController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'certificacion.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'certificacion/{certificacion}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'certificacion.destroy',
        'uses' => 'App\\Http\\Controllers\\CertificacionController@destroy',
        'controller' => 'App\\Http\\Controllers\\CertificacionController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cirugia.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'cirugia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'cirugia.index',
        'uses' => 'App\\Http\\Controllers\\CirugiaController@index',
        'controller' => 'App\\Http\\Controllers\\CirugiaController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cirugia.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'cirugia/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'cirugia.create',
        'uses' => 'App\\Http\\Controllers\\CirugiaController@create',
        'controller' => 'App\\Http\\Controllers\\CirugiaController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cirugia.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'cirugia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'cirugia.store',
        'uses' => 'App\\Http\\Controllers\\CirugiaController@store',
        'controller' => 'App\\Http\\Controllers\\CirugiaController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cirugia.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'cirugia/{cirugium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'cirugia.show',
        'uses' => 'App\\Http\\Controllers\\CirugiaController@show',
        'controller' => 'App\\Http\\Controllers\\CirugiaController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cirugia.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'cirugia/{cirugium}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'cirugia.edit',
        'uses' => 'App\\Http\\Controllers\\CirugiaController@edit',
        'controller' => 'App\\Http\\Controllers\\CirugiaController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cirugia.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'cirugia/{cirugium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'cirugia.update',
        'uses' => 'App\\Http\\Controllers\\CirugiaController@update',
        'controller' => 'App\\Http\\Controllers\\CirugiaController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'cirugia.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'cirugia/{cirugium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'cirugia.destroy',
        'uses' => 'App\\Http\\Controllers\\CirugiaController@destroy',
        'controller' => 'App\\Http\\Controllers\\CirugiaController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diat.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'diat',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diat.index',
        'uses' => 'App\\Http\\Controllers\\DiatController@index',
        'controller' => 'App\\Http\\Controllers\\DiatController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diat.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'diat/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diat.create',
        'uses' => 'App\\Http\\Controllers\\DiatController@create',
        'controller' => 'App\\Http\\Controllers\\DiatController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diat.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'diat',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diat.store',
        'uses' => 'App\\Http\\Controllers\\DiatController@store',
        'controller' => 'App\\Http\\Controllers\\DiatController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diat.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'diat/{diat}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diat.show',
        'uses' => 'App\\Http\\Controllers\\DiatController@show',
        'controller' => 'App\\Http\\Controllers\\DiatController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diat.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'diat/{diat}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diat.edit',
        'uses' => 'App\\Http\\Controllers\\DiatController@edit',
        'controller' => 'App\\Http\\Controllers\\DiatController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diat.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'diat/{diat}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diat.update',
        'uses' => 'App\\Http\\Controllers\\DiatController@update',
        'controller' => 'App\\Http\\Controllers\\DiatController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diat.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'diat/{diat}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diat.destroy',
        'uses' => 'App\\Http\\Controllers\\DiatController@destroy',
        'controller' => 'App\\Http\\Controllers\\DiatController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diep.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'diep',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diep.index',
        'uses' => 'App\\Http\\Controllers\\DiepController@index',
        'controller' => 'App\\Http\\Controllers\\DiepController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diep.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'diep/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diep.create',
        'uses' => 'App\\Http\\Controllers\\DiepController@create',
        'controller' => 'App\\Http\\Controllers\\DiepController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diep.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'diep',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diep.store',
        'uses' => 'App\\Http\\Controllers\\DiepController@store',
        'controller' => 'App\\Http\\Controllers\\DiepController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diep.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'diep/{diep}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diep.show',
        'uses' => 'App\\Http\\Controllers\\DiepController@show',
        'controller' => 'App\\Http\\Controllers\\DiepController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diep.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'diep/{diep}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diep.edit',
        'uses' => 'App\\Http\\Controllers\\DiepController@edit',
        'controller' => 'App\\Http\\Controllers\\DiepController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diep.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'diep/{diep}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diep.update',
        'uses' => 'App\\Http\\Controllers\\DiepController@update',
        'controller' => 'App\\Http\\Controllers\\DiepController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'diep.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'diep/{diep}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'diep.destroy',
        'uses' => 'App\\Http\\Controllers\\DiepController@destroy',
        'controller' => 'App\\Http\\Controllers\\DiepController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'enfermedad.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'enfermedad',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'enfermedad.index',
        'uses' => 'App\\Http\\Controllers\\EnfermedadController@index',
        'controller' => 'App\\Http\\Controllers\\EnfermedadController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'enfermedad.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'enfermedad/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'enfermedad.create',
        'uses' => 'App\\Http\\Controllers\\EnfermedadController@create',
        'controller' => 'App\\Http\\Controllers\\EnfermedadController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'enfermedad.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'enfermedad',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'enfermedad.store',
        'uses' => 'App\\Http\\Controllers\\EnfermedadController@store',
        'controller' => 'App\\Http\\Controllers\\EnfermedadController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'enfermedad.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'enfermedad/{enfermedad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'enfermedad.show',
        'uses' => 'App\\Http\\Controllers\\EnfermedadController@show',
        'controller' => 'App\\Http\\Controllers\\EnfermedadController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'enfermedad.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'enfermedad/{enfermedad}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'enfermedad.edit',
        'uses' => 'App\\Http\\Controllers\\EnfermedadController@edit',
        'controller' => 'App\\Http\\Controllers\\EnfermedadController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'enfermedad.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'enfermedad/{enfermedad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'enfermedad.update',
        'uses' => 'App\\Http\\Controllers\\EnfermedadController@update',
        'controller' => 'App\\Http\\Controllers\\EnfermedadController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'enfermedad.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'enfermedad/{enfermedad}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'enfermedad.destroy',
        'uses' => 'App\\Http\\Controllers\\EnfermedadController@destroy',
        'controller' => 'App\\Http\\Controllers\\EnfermedadController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'factor.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'factor',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'factor.index',
        'uses' => 'App\\Http\\Controllers\\FactorRiesgoController@index',
        'controller' => 'App\\Http\\Controllers\\FactorRiesgoController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'factor.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'factor/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'factor.create',
        'uses' => 'App\\Http\\Controllers\\FactorRiesgoController@create',
        'controller' => 'App\\Http\\Controllers\\FactorRiesgoController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'factor.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'factor',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'factor.store',
        'uses' => 'App\\Http\\Controllers\\FactorRiesgoController@store',
        'controller' => 'App\\Http\\Controllers\\FactorRiesgoController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'factor.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'factor/{factor}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'factor.show',
        'uses' => 'App\\Http\\Controllers\\FactorRiesgoController@show',
        'controller' => 'App\\Http\\Controllers\\FactorRiesgoController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'factor.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'factor/{factor}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'factor.edit',
        'uses' => 'App\\Http\\Controllers\\FactorRiesgoController@edit',
        'controller' => 'App\\Http\\Controllers\\FactorRiesgoController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'factor.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'factor/{factor}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'factor.update',
        'uses' => 'App\\Http\\Controllers\\FactorRiesgoController@update',
        'controller' => 'App\\Http\\Controllers\\FactorRiesgoController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'factor.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'factor/{factor}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'factor.destroy',
        'uses' => 'App\\Http\\Controllers\\FactorRiesgoController@destroy',
        'controller' => 'App\\Http\\Controllers\\FactorRiesgoController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'familiar.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'familiar',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'familiar.index',
        'uses' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@index',
        'controller' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'familiar.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'familiar/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'familiar.create',
        'uses' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@create',
        'controller' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'familiar.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'familiar',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'familiar.store',
        'uses' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@store',
        'controller' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'familiar.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'familiar/{familiar}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'familiar.show',
        'uses' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@show',
        'controller' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'familiar.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'familiar/{familiar}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'familiar.edit',
        'uses' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@edit',
        'controller' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'familiar.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'familiar/{familiar}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'familiar.update',
        'uses' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@update',
        'controller' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'familiar.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'familiar/{familiar}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'familiar.destroy',
        'uses' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@destroy',
        'controller' => 'App\\Http\\Controllers\\AntecedenteFamiliarController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'licencia.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'licencia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'licencia.index',
        'uses' => 'App\\Http\\Controllers\\LicenciaMedicaController@index',
        'controller' => 'App\\Http\\Controllers\\LicenciaMedicaController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'licencia.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'licencia/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'licencia.create',
        'uses' => 'App\\Http\\Controllers\\LicenciaMedicaController@create',
        'controller' => 'App\\Http\\Controllers\\LicenciaMedicaController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'licencia.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'licencia',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'licencia.store',
        'uses' => 'App\\Http\\Controllers\\LicenciaMedicaController@store',
        'controller' => 'App\\Http\\Controllers\\LicenciaMedicaController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'licencia.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'licencia/{licencium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'licencia.show',
        'uses' => 'App\\Http\\Controllers\\LicenciaMedicaController@show',
        'controller' => 'App\\Http\\Controllers\\LicenciaMedicaController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'licencia.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'licencia/{licencium}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'licencia.edit',
        'uses' => 'App\\Http\\Controllers\\LicenciaMedicaController@edit',
        'controller' => 'App\\Http\\Controllers\\LicenciaMedicaController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'licencia.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'licencia/{licencium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'licencia.update',
        'uses' => 'App\\Http\\Controllers\\LicenciaMedicaController@update',
        'controller' => 'App\\Http\\Controllers\\LicenciaMedicaController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'licencia.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'licencia/{licencium}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'licencia.destroy',
        'uses' => 'App\\Http\\Controllers\\LicenciaMedicaController@destroy',
        'controller' => 'App\\Http\\Controllers\\LicenciaMedicaController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medicamento.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'medicamento',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'medicamento.index',
        'uses' => 'App\\Http\\Controllers\\MedicamentoController@index',
        'controller' => 'App\\Http\\Controllers\\MedicamentoController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medicamento.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'medicamento/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'medicamento.create',
        'uses' => 'App\\Http\\Controllers\\MedicamentoController@create',
        'controller' => 'App\\Http\\Controllers\\MedicamentoController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medicamento.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'medicamento',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'medicamento.store',
        'uses' => 'App\\Http\\Controllers\\MedicamentoController@store',
        'controller' => 'App\\Http\\Controllers\\MedicamentoController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medicamento.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'medicamento/{medicamento}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'medicamento.show',
        'uses' => 'App\\Http\\Controllers\\MedicamentoController@show',
        'controller' => 'App\\Http\\Controllers\\MedicamentoController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medicamento.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'medicamento/{medicamento}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'medicamento.edit',
        'uses' => 'App\\Http\\Controllers\\MedicamentoController@edit',
        'controller' => 'App\\Http\\Controllers\\MedicamentoController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medicamento.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'medicamento/{medicamento}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'medicamento.update',
        'uses' => 'App\\Http\\Controllers\\MedicamentoController@update',
        'controller' => 'App\\Http\\Controllers\\MedicamentoController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'medicamento.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'medicamento/{medicamento}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'medicamento.destroy',
        'uses' => 'App\\Http\\Controllers\\MedicamentoController@destroy',
        'controller' => 'App\\Http\\Controllers\\MedicamentoController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'paciente.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'paciente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'paciente.index',
        'uses' => 'App\\Http\\Controllers\\PacienteController@index',
        'controller' => 'App\\Http\\Controllers\\PacienteController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'paciente.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'paciente/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'paciente.create',
        'uses' => 'App\\Http\\Controllers\\PacienteController@create',
        'controller' => 'App\\Http\\Controllers\\PacienteController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'paciente.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'paciente',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'paciente.store',
        'uses' => 'App\\Http\\Controllers\\PacienteController@store',
        'controller' => 'App\\Http\\Controllers\\PacienteController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'paciente.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'paciente/{paciente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'paciente.show',
        'uses' => 'App\\Http\\Controllers\\PacienteController@show',
        'controller' => 'App\\Http\\Controllers\\PacienteController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'paciente.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'paciente/{paciente}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'paciente.edit',
        'uses' => 'App\\Http\\Controllers\\PacienteController@edit',
        'controller' => 'App\\Http\\Controllers\\PacienteController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'paciente.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'paciente/{paciente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'paciente.update',
        'uses' => 'App\\Http\\Controllers\\PacienteController@update',
        'controller' => 'App\\Http\\Controllers\\PacienteController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'paciente.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'paciente/{paciente}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'paciente.destroy',
        'uses' => 'App\\Http\\Controllers\\PacienteController@destroy',
        'controller' => 'App\\Http\\Controllers\\PacienteController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'vacuna.index' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'vacuna',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'vacuna.index',
        'uses' => 'App\\Http\\Controllers\\VacunaController@index',
        'controller' => 'App\\Http\\Controllers\\VacunaController@index',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'vacuna.create' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'vacuna/create',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'vacuna.create',
        'uses' => 'App\\Http\\Controllers\\VacunaController@create',
        'controller' => 'App\\Http\\Controllers\\VacunaController@create',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'vacuna.store' => 
    array (
      'methods' => 
      array (
        0 => 'POST',
      ),
      'uri' => 'vacuna',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'vacuna.store',
        'uses' => 'App\\Http\\Controllers\\VacunaController@store',
        'controller' => 'App\\Http\\Controllers\\VacunaController@store',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'vacuna.show' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'vacuna/{vacuna}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'vacuna.show',
        'uses' => 'App\\Http\\Controllers\\VacunaController@show',
        'controller' => 'App\\Http\\Controllers\\VacunaController@show',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'vacuna.edit' => 
    array (
      'methods' => 
      array (
        0 => 'GET',
        1 => 'HEAD',
      ),
      'uri' => 'vacuna/{vacuna}/edit',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'vacuna.edit',
        'uses' => 'App\\Http\\Controllers\\VacunaController@edit',
        'controller' => 'App\\Http\\Controllers\\VacunaController@edit',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'vacuna.update' => 
    array (
      'methods' => 
      array (
        0 => 'PUT',
        1 => 'PATCH',
      ),
      'uri' => 'vacuna/{vacuna}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'vacuna.update',
        'uses' => 'App\\Http\\Controllers\\VacunaController@update',
        'controller' => 'App\\Http\\Controllers\\VacunaController@update',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
    'vacuna.destroy' => 
    array (
      'methods' => 
      array (
        0 => 'DELETE',
      ),
      'uri' => 'vacuna/{vacuna}',
      'action' => 
      array (
        'middleware' => 
        array (
          0 => 'web',
          1 => 'auth:sanctum',
          2 => 'Laravel\\Jetstream\\Http\\Middleware\\AuthenticateSession',
          3 => 'verified',
        ),
        'as' => 'vacuna.destroy',
        'uses' => 'App\\Http\\Controllers\\VacunaController@destroy',
        'controller' => 'App\\Http\\Controllers\\VacunaController@destroy',
        'namespace' => NULL,
        'prefix' => '/',
        'where' => 
        array (
        ),
      ),
      'fallback' => false,
      'defaults' => 
      array (
      ),
      'wheres' => 
      array (
      ),
      'bindingFields' => 
      array (
      ),
      'lockSeconds' => NULL,
      'waitSeconds' => NULL,
      'withTrashed' => false,
    ),
  ),
)
);
