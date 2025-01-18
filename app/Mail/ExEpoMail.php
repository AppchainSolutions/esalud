<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;

class ExEpoMail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;
    public $range;
    public $title;

    public function __construct(Collection $data, string $range, string $title)
    {
        $this->data = $data;
        $this->range = $range;
        $this->title = $title;
    }

    public function build()
    {
        return $this->from(config('mail.from.address'), config('mail.from.name'))
                    ->subject($this->range)
                    ->with([
                        'examenes' => $this->data,
                        'range' => $this->range,
                        'title' => $this->title
                    ])
                    ->view('emails.notificaciones');
    }
}