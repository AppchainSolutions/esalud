<?php

namespace App\Http\Controllers;

use App\Models\ExEpo;
use App\Notifications\ExamenExpirationNotification;

class ExamenExpirationController extends Controller
{
    public function show(ExEpo $examen)
    {
        if ($examen->isExpiringSoon()) {
            $examen->user->notify(new ExamenExpirationNotification);
        }

        // ...
    }
}