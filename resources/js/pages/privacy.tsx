import { Head } from '@inertiajs/react';
import PageLayout from '@site/layouts/page-layout';

export default function PrivacyPage() {
    return (
        <PageLayout headerTransparent headerNavTextClass="text-deep-red" headerNavHoverClass="hover:text-white" headerCtaTextClass="text-deep-red" headerCtaHoverClass="hover:text-deep-red hover:bg-white">
            <Head title="Privacy Policy" />
            <section id="privacy" className="bg-cream text-black">
                <div className="container mx-auto px-4 pt-28 pb-12 md:px-8 md:pt-32 md:pb-16">
                    <header className="mb-10 md:mb-14">
                        <h1 className="font-milyuna text-[40px] leading-none tracking-[.02em] sm:text-[56px] md:text-[80px]">Privacy Policy</h1>
                        <p className="font-outfit mt-3 text-sm text-gray-700 md:text-base">Effective date: October 24, 2025</p>
                    </header>

                    <div className="prose max-w-none">
                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">1. Introduction</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                Sabrina’s Spanish Cuisine ("Sabrina’s", "we", "our", or "us") respects your privacy. This Privacy Policy explains how
                                we collect, use, disclose, and safeguard your information when you use our website and services, including submitting
                                reservations and contact forms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">2. Information We Collect</h2>
                            <ul className="font-outfit list-disc space-y-2 pl-6 text-base leading-relaxed">
                                <li>
                                    <span className="font-semibold">Contact details</span> (e.g., name, email, phone) when you submit forms.
                                </li>
                                <li>
                                    <span className="font-semibold">Reservation details</span> (e.g., date, party size, notes).
                                </li>
                                <li>
                                    <span className="font-semibold">Usage data</span> such as pages visited and interactions, collected via
                                    cookies/analytics.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">3. How We Use Information</h2>
                            <ul className="font-outfit list-disc space-y-2 pl-6 text-base leading-relaxed">
                                <li>To process and manage reservations and respond to inquiries.</li>
                                <li>To improve site performance, user experience, and our services.</li>
                                <li>To communicate important updates related to your requests or our services.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">4. Cookies & Analytics</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                We may use cookies and similar technologies to understand site usage. You can adjust your browser settings to refuse
                                cookies; however, some features may not function properly without them.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">5. Sharing of Information</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                We do not sell your personal information. We may share data with trusted service providers to operate our website and
                                deliver services (e.g., email providers), subject to confidentiality obligations and only as necessary.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">6. Data Retention</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a
                                longer retention period is required or permitted by law.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">7. Your Choices & Rights</h2>
                            <ul className="font-outfit list-disc space-y-2 pl-6 text-base leading-relaxed">
                                <li>You may request access to, or correction of, your personal information.</li>
                                <li>You may request deletion of your information, subject to legal and operational limitations.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">8. Security</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                We implement reasonable administrative, technical, and physical safeguards designed to protect personal information.
                                However, no method of transmission or storage is completely secure.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">9. Children’s Privacy</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                Our services are not directed to children under 13. We do not knowingly collect personal information from children. If
                                you believe a child provided information to us, please contact us so we can remove it.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">10. Changes to This Policy</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                We may update this Privacy Policy from time to time. Changes are effective when posted on this page. Please review
                                periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="font-milyuna mb-3 text-2xl leading-none md:text-3xl">Contact Us</h2>
                            <p className="font-outfit text-base leading-relaxed">
                                Questions about this Privacy Policy? Contact us at <a href="tel:+0012125551234" className="underline">+00 1 212 555 1234</a> or visit us at Sabrina’s Spanish Cuisine, 123
                                Calle del Sol, Worcester, MA.
                            </p>
                        </section>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
