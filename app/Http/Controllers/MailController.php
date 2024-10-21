<?php

namespace App\Http\Controllers;

use App\Mail\TestMail;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function index()
    {
        Mail::to('omar.ahumadag@gmail.com')->send(new TestMail([
            'title' => 'The Title',
            'body' => 'The Body',
        ]));
    }
}
