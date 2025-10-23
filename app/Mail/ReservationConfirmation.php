<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReservationConfirmation extends Mailable
{
    use Queueable, SerializesModels;
    public $data;
    public function __construct(array $data) { $this->data = $data; }
    public function envelope(): Envelope {
        return new Envelope(subject: 'Your Reservation Confirmation at Sabrina\'s Restaurant');
    }
    public function content(): Content {
        return new Content(view: 'mail.reservations.confirmation');
    }
}