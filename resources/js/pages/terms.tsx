import { Head } from '@inertiajs/react';
import PageLayout from '@site/layouts/page-layout';

export default function Terms() {
    return (
        <PageLayout headerTransparent headerNavTextClass="text-deep-red" headerNavHoverClass="hover:text-white" headerCtaTextClass="text-deep-red" headerCtaHoverClass="hover:text-deep-red hover:bg-white">
            <Head title="Terms & Conditions" />
            <section id="terms" className="bg-cream text-black">
                <div className="container mx-auto px-4 pt-28 pb-12 md:px-8 md:pt-32 md:pb-16">
                    <header className="mb-10 md:mb-14">
                        <h1 className="font-milyuna text-[40px] leading-none tracking-[.02em] sm:text-[56px] md:text-[80px]">Terms & Conditions</h1>
                        <p className="font-outfit mt-3 text-sm text-gray-700 md:text-base">Effective date: October 24, 2025</p>
                    </header>

                    <div className="prose max-w-none">
                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">1. Introduction</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                Welcome to Sabrina’s Spanish Cuisine ("Sabrina’s", "we", "our", or "us"). These Terms & Conditions govern your use of
                                our website and services, including placing reservations and contacting our team. By accessing or using this site, you
                                agree to these Terms. If you do not agree, please do not use the site.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">2. Reservations & Cancellations</h2>
                            <ul className="font-outfit list-disc space-y-2 pl-6 text-base leading-relaxed">
                                <li>
                                    Submitting a reservation request does not guarantee a table. You will receive a confirmation once availability is
                                    verified.
                                </li>
                                <li>Please notify us as early as possible if you need to modify or cancel your reservation.</li>
                                <li>Late arrivals may result in a reduced seating time or cancellation during peak hours.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">3. Dining Policies</h2>
                            <ul className="font-outfit list-disc space-y-2 pl-6 text-base leading-relaxed">
                                <li>Outside food and beverages are generally not permitted unless previously agreed in writing.</li>
                                <li>We may limit seating time during busy periods to accommodate all guests fairly.</li>
                                <li>Management reserves the right to refuse service for safety or policy reasons.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">4. Allergies & Dietary Needs</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                We take allergies seriously. Please inform us of any allergies or dietary restrictions when booking and again when
                                dining. While we strive to accommodate, cross‑contact may occur in a shared kitchen environment.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">5. Pricing & Payment</h2>
                            <ul className="font-outfit list-disc space-y-2 pl-6 text-base leading-relaxed">
                                <li>Menu prices and availability are subject to change without notice.</li>
                                <li>Applicable taxes and service charges may apply.</li>
                                <li>We accept common payment methods available at the restaurant; please ask staff for details.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">6. Gift Cards & Promotions</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                Gift cards, vouchers, and promotions may carry specific terms, including expiration dates, blackout periods, and
                                exclusions. Unless required by law, they are not redeemable for cash.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">7. Website Use</h2>
                            <ul className="font-outfit list-disc space-y-2 pl-6 text-base leading-relaxed">
                                <li>You agree not to misuse the site, attempt to breach security, or interfere with site operations.</li>
                                <li>
                                    Content is provided for general information; we make reasonable efforts but do not warrant completeness or
                                    accuracy.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">8. Reviews & User Content</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                If you submit reviews or content, you grant us a non‑exclusive right to use, reproduce, and display that content in
                                connection with our services. Do not submit unlawful, infringing, or offensive material.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">9. Intellectual Property</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                All trademarks, logos, and content on this site are the property of their respective owners and protected by
                                applicable laws. You may not use our intellectual property without prior written permission.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">10. Third‑Party Links</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                This site may contain links to third‑party websites we do not control. We are not responsible for their content or
                                practices. Access them at your own discretion.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">11. Limitation of Liability</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                To the fullest extent permitted by law, Sabrina’s is not liable for any indirect, incidental, or consequential damages
                                arising from your use of the site or services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">12. Indemnification</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                You agree to indemnify and hold Sabrina’s harmless from claims, losses, or damages resulting from your breach of these
                                Terms or misuse of the site.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">13. Governing Law</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                These Terms are governed by the laws of the Commonwealth of Massachusetts, USA, without regard to conflict of law
                                rules.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">14. Changes to These Terms</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                We may update these Terms from time to time. Changes take effect when posted on this page. Please review periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">Contact Us</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                Questions about these Terms? Contact us at <a href="tel:+0012125551234" className="underline">+00 1 212 555 1234</a> or visit us at Sabrina’s Spanish Cuisine, 123 Calle del
                                Sol, Worcester, MA.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
