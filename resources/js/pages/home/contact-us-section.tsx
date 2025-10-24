import { useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FormField } from '../../components/custom/form-field';

export default function ContactUsSection() {
    const { ref: image1Ref, inView: image1InView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 200 });
    const { ref: text1Ref, inView: text1InView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 300 });
    const { ref: para1Ref, inView: para1InView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 400 });
    const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 500 });
    const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 600 });
    const { ref: text2Ref, inView: text2InView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 500 });
    const { ref: image2Ref, inView: image2InView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 600 });

    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const { props } = usePage();
    const flash = (props.flash as { success_message?: string; error_message?: string }) || {};

    const [localSuccessMessage, setLocalSuccessMessage] = useState<string | null>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('contact.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                if (!flash.success_message) {
                    setLocalSuccessMessage('Message sent successfully.');
                    setTimeout(() => setLocalSuccessMessage(null), 5000);
                }
            },
        });
    }

    useEffect(() => {
        if (wasSuccessful) {
            reset();
        }
    }, [wasSuccessful]);

    const successText = (flash.success_message as string) || localSuccessMessage || '';
    const showInlineError = Object.keys(errors).length > 0 && !successText;
    const errorText = (flash.error_message as string) || (showInlineError ? 'Please correct the highlighted fields.' : '');

    return (
        <section id="contact-us" className="bg-cream w-full text-black">
            <div className="relative w-full">
                <svg
                    viewBox="0 0 1438 540"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none absolute inset-x-0 top-80 z-0 h-auto w-full"
                    aria-hidden="true"
                >
                    <path
                        d="M1441.39 0.499939C1369.73 1.59646 1272.68 60.1376 1191.89 229.947C1008.39 615.649 372.893 752.988 0.393311 278.468"
                        stroke="#D9D9D9"
                    />
                </svg>

                <div className="container mx-auto flex min-h-screen flex-col justify-center">
                    <div className="w-full py-10">
                        <div
                            ref={image1Ref}
                            className={`h-64 w-full bg-cover bg-center ${image1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                            style={{ backgroundImage: `url('/storage/images/home/contact-us-image.webp')` }}
                        ></div>
                    </div>

                    <div className="w-full px-4 py-8 md:px-0 md:py-16">
                        <div className="mb-8 flex flex-col gap-8 md:flex-row md:items-start">
                            <div className="w-full md:w-2/3">
                                <h2
                                    ref={text1Ref}
                                    className={`font-milyuna text-left text-[72px] leading-none font-normal sm:text-[96px] md:text-[128px] ${text1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                                >
                                    Contact Us
                                </h2>
                            </div>
                            <div className="w-full md:w-1/3">
                                <p
                                    ref={para1Ref}
                                    className={`font-outfit text-center text-base leading-snug font-thin md:text-left md:text-2xl ${para1InView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                                >
                                    Have questions or special requests? We’re here to help. Reach out to Sabrina’s and let us make your visit seamless
                                    and memorable.
                                </p>
                            </div>
                        </div>

                        <div className="mb-0 flex flex-col items-start gap-8 md:mb-8 md:flex-row md:gap-16">
                            <form
                                onSubmit={handleSubmit}
                                ref={divRef}
                                id="contact-form"
                                className={`flex w-full flex-col gap-6 md:w-2/3 ${divInView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                            >
                                <FormField
                                    label="Name"
                                    id="contact-name"
                                    type="text"
                                    placeholder="Ex: Samuel Iglesias"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && <div className="text-red-500">{errors.name}</div>}
                                <FormField
                                    label="Email"
                                    id="contact-email"
                                    type="email"
                                    placeholder="email@example.com"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && <div className="text-red-500">{errors.email}</div>}
                                <FormField
                                    label="Your message"
                                    id="contact-message"
                                    placeholder="How can we help you...?"
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                />
                                {errors.message && <div className="text-red-500">{errors.message}</div>}
                            </form>

                            <div className="flex max-h-full w-full items-end justify-center pt-0 md:w-1/3 md:justify-start md:pt-8">
                                <button
                                    type="submit"
                                    form="contact-form"
                                    disabled={processing}
                                    ref={buttonRef}
                                    className={`font-outfit flex items-center gap-4 border-1 border-black bg-transparent px-5 py-3 text-2xl font-normal text-black transition-colors hover:bg-black hover:text-white md:text-3xl ${buttonInView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                                >
                                    Send
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {(successText || errorText) && (
                            <div className="mt-4 w-full md:w-2/3" role="status" aria-live="polite">
                                <div
                                    className={`inline-flex items-center gap-3 border-1 bg-transparent px-4 py-2 ${successText ? 'border-deep-red text-deep-red' : 'border-black text-black'}`}
                                >
                                    {successText ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="12" cy="12" r="10" />
                                            <line x1="12" y1="8" x2="12" y2="12" />
                                            <line x1="12" y1="16" x2="12" y2="16" />
                                        </svg>
                                    )}
                                    <span className="font-outfit text-xs tracking-wide md:text-sm">{successText || errorText}</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mb-4 text-center">
                        <p
                            ref={text2Ref}
                            className={`font-outfit text-sm leading-relaxed font-light text-gray-500 md:text-2xl ${text2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                        >
                            <a href="tel:+0012125551234" className="text-inherit no-underline hover:no-underline">
                                +00 1 212 555 1234
                            </a>
                            {' | '}
                            <a
                                href="https://maps.google.com/?q=Sabrina’s Spanish Cuisine, 123 Calle del Sol, Worcester, MA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-inherit no-underline hover:no-underline"
                            >
                                Sabrina’s Spanish Cuisine, 123 Calle del Sol, Worcester, MA
                            </a>
                        </p>
                    </div>
                </div>

                <div ref={image2Ref} className={`mt-8 h-auto w-full ${image2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.489112423588!2d-71.8043003239327!3d42.26834117120304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4066c0d8b0e8b%3A0x296f30d0d866a237!2sWorcester%2C%20MA%2C%20USA!5e0!3m2!1sen!2sca!4v1678886400000"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
