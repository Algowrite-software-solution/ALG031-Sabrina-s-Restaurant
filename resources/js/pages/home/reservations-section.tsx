import { useForm, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FormField } from '../../components/custom/form-field';

export default function ReservationsSection() {
    const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 200 });
    const { ref: paraRef, inView: paraInView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 300 });
    const { ref: divRef, inView: divInView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 600 });
    const { ref: buttonRef, inView: buttonInView } = useInView({ triggerOnce: true, threshold: 0.1, delay: 700 });

    const { data, setData, post, processing, errors, reset, wasSuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        adults: '',
        children: '',
    });

    const { props } = usePage();

    const flash = (props.flash as { success_message?: string; error_message?: string }) || {};

    const [localSuccessMessage, setLocalSuccessMessage] = useState<string | null>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('reservation.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                if (!flash.success_message) {
                    setLocalSuccessMessage('Reservation submitted successfully.');
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

    const successText = flash.success_message || localSuccessMessage || '';
    const showInlineError = Object.keys(errors).length > 0 && !successText;
    const errorText = flash.error_message || (showInlineError ? 'Please correct the highlighted fields.' : '');

    return (
        <section id="reservations" className="bg-cream flex h-full items-center justify-center px-4 py-8 text-black md:h-screen md:px-0 md:py-4">
            <div className="relative w-full">
                <svg
                    viewBox="0 0 1438 540"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="pointer-events-none absolute inset-x-0 top-0 z-0 h-auto w-full"
                    aria-hidden="true"
                >
                    <path
                        d="M0.0881348 8.81881C131.543 -14.7292 390.653 -2.30031 375.458 235.8C356.464 533.425 79.5606 406.203 248.502 317.313C365.961 255.511 525.406 272.585 736.833 415.128C905.974 529.162 1276.81 468.494 1441.09 423.906"
                        stroke="#D9D9D9"
                    />
                </svg>

                <div className="container mx-auto">
                    <h2
                        ref={h2Ref}
                        className={`font-milyuna mb-8 text-center text-[48px] leading-none font-normal tracking-normal sm:text-[64px] md:text-left md:text-[112px] ${h2InView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                    >
                        Reservations
                    </h2>

                    <div className="flex flex-col gap-12 md:flex-row md:gap-10">
                        <div className="order-1 w-full md:w-1/3">
                            <p
                                ref={paraRef}
                                className={`font-outfit text-center text-[14px] leading-snug font-thin tracking-normal md:text-left md:text-[18px] lg:text-[21px] ${paraInView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                            >
                                An intimate dining experience awaits. Secure your spot and enjoy elegant Spanish cuisine, fine wine, and warm
                                hospitality at Sabrina’s.
                            </p>
                        </div>

                        <div className="order-2 w-full pl-0 md:w-2/3 md:pl-20">
                            <form
                                ref={divRef}
                                onSubmit={handleSubmit}
                                id="reservations-form"
                                className={`flex flex-col gap-2 ${divInView ? 'fade-in-up-visible' : 'fade-in-up-initial'} `}
                            >
                                <FormField
                                    label="Name"
                                    id="name"
                                    value={data.name}
                                    type="text"
                                    placeholder="enter your name"
                                    onChange={(e) => setData('name', e.target.value)}
                                />
                                {errors.name && <div className="error text-red-500">{errors.name}</div>}
                                <FormField
                                    label="Email"
                                    id="email"
                                    value={data.email}
                                    type="email"
                                    placeholder="enter your email"
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                {errors.email && <div className="error text-red-500">{errors.email}</div>}
                                <FormField
                                    label="Phone"
                                    id="phone"
                                    value={data.phone}
                                    type="tel"
                                    placeholder="enter your number"
                                    onChange={(e) => setData('phone', e.target.value)}
                                />
                                {errors.phone && <div className="error text-red-500">{errors.phone}</div>}
                                <FormField
                                    label="Date"
                                    id="date"
                                    value={data.date}
                                    type="date"
                                    placeholder="Select the date"
                                    onChange={(e) => setData('date', e.target.value)}
                                />
                                {errors.date && <div className="error text-red-500">{errors.date}</div>}

                                <div className="flex w-full flex-col md:flex-row md:items-center">
                                    <label className="font-outfit mb-1 w-full text-left text-[14px] font-normal md:mb-0 md:w-1/4 md:text-[18px] lg:text-[21px]">
                                        Party Size
                                    </label>
                                    <div className="flex w-full gap-4 md:w-3/4">
                                        <div className="w-1/2">
                                            <input
                                                type="number"
                                                placeholder="Adults"
                                                min={0}
                                                step={1}
                                                value={data.adults}
                                                onChange={(e) => setData('adults', e.target.value)}
                                                className="font-outfit focus:border-deep-red w-full border-b-1 border-black bg-transparent py-2 text-[14px] font-light placeholder:text-gray-500 focus:outline-none md:text-[18px] lg:text-[21px]"
                                            />
                                            {errors.adults && <div className="mt-1 text-sm text-red-500">{errors.adults}</div>}
                                        </div>
                                        <div className="w-1/2">
                                            <input
                                                type="number"
                                                placeholder="Children"
                                                min={0}
                                                step={1}
                                                value={data.children}
                                                onChange={(e) => setData('children', e.target.value)}
                                                className="font-outfit focus:border-deep-red w-full border-b-1 border-black bg-transparent py-2 text-[14px] font-light placeholder:text-gray-500 focus:outline-none md:text-[18px] lg:text-[21px]"
                                            />
                                            {errors.children && <div className="mt-1 text-sm text-red-500">{errors.children}</div>}
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {(successText || errorText) && (
                                <div className="mt-4" role="status" aria-live="polite">
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
                    </div>

                    <div className="mt-12 flex justify-center md:mt-16 md:justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            form="reservations-form"
                            ref={buttonRef}
                            className={`font-milyuna border-deep-red text-deep-red bg-deep-red-hover border-1 bg-transparent p-4 text-[20px] leading-none font-normal tracking-[.05em] transition-colors hover:text-white md:p-3 md:text-[36px] ${buttonInView ? 'fade-in-up-visible' : 'fade-in-up-short-initial'} `}
                        >
                            Reserve
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
