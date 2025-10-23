import React from 'react';
import { Head } from '@inertiajs/react';
import HeroSection from './home/hero-section';
import OurStory from './home/our-story';
import MenuSection from './home/menu-section';
import ReservationsSection from './home/reservations-section';
import ContactUsSection from './home/contact-us-section';
import PageLayout from '@site/layouts/page-layout';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Welcome() {

    // useSmoothScroll();

    return (
        <PageLayout>
            <Head title="Welcome to Sabrina's" />
            
                <HeroSection />
                <OurStory />
                <MenuSection />
                <ReservationsSection />
                <ContactUsSection />
        </PageLayout>
    );
}