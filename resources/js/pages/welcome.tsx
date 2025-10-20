import React from 'react';
import { Head } from '@inertiajs/react';
import HeroSection from './home/hero-section';
import OurStory from './home/our-story';
import MenuSection from './home/menu-section';
import ReservationsSection from './home/reservations-section';
import ContactUsSection from './home/contact-us-section';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome to Sabrina's" />
            
            <main>
                <HeroSection />
                <OurStory />
                <MenuSection />
                <ReservationsSection />
                <ContactUsSection />
            </main>
        </>
    );
}