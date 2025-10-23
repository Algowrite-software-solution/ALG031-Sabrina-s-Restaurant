<?php
// app/Http/Controllers/FormSubmissionController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmitted;
use App\Mail\ReservationMade;
use App\Mail\ReservationConfirmation;
use Throwable;

class FormSubmissionController extends Controller
{
    /**
     * Handle the contact form submission.
     */
    public function storeContact(Request $request)
    {
        
        // dd('Controller method was reached successfully!');

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|min:10',
        ]);
        try {
            // Send an email to the restaurant admin
            Mail::to('info.sabrinas@algowrite.com')->send(new ContactFormSubmitted($validatedData));
        } catch (Throwable $e) {
            return back()->with('error_message', 'Sorry, something went wrong. Please try again.');
        }


        return back()->with('success_message', 'Thank you! Your message has been sent.');
    }

    /**
     * Handle the reservation form submission.
     */
    public function storeReservation(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'date' => 'required|date',
            'adults' => 'required|integer|min:1',
            'children' => 'nullable|integer|min:0',
        ]);

        // Email 1: Send a notification to the restaurant's reservation desk
        Mail::to('info.sabrinas@algowrite.com')->send(new ReservationMade($validatedData));

        // Email 2: Send a confirmation email to the customer
        Mail::to($validatedData['email'])->send(new ReservationConfirmation($validatedData));

        return back()->with('success_message', 'Reservation received! A confirmation has been sent to your email.');
    }
}