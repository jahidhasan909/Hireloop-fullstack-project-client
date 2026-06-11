'use client';

import React, { useState } from 'react';

const SubscriptionPage = () => {
    // State to toggle between Seeker and Recruiter plans
    const [userType, setUserType] = useState('seeker');
    // State to handle FAQ accordion toggles
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const seekerPlans = [
        {
            name: 'Free',
            price: '$0',
            period: '/forever',
            description: 'Essential features to start your job hunt.',
            features: [
                'Browse & save up to 10 jobs',
                'Apply to up to 3 jobs per month',
                'Basic profile setup',
                'Standard email alerts'
            ],
            cta: 'Get Started',
            popular: false
        },
        {
            name: 'Pro',
            price: '$19',
            period: '/month',
            description: 'Perfect for active job hunters looking to accelerate their search.',
            features: [
                'Apply to up to 30 jobs per month',
                'Unlimited saved jobs',
                'Advanced application tracking',
                'Salary insights & trends'
            ],
            cta: 'Upgrade to Pro',
            popular: true
        },
        {
            name: 'Premium',
            price: '$39',
            period: '/month',
            description: 'Ultimate visibility and tools to land your dream job fast.',
            features: [
                'Everything in Pro Included',
                'Unlimited job applications',
                'Profile boost to top recruiters',
                'Early access to new job posts',
                'Priority customer support'
            ],
            cta: 'Go Premium',
            popular: false
        }
    ];

    const recruiterPlans = [
        {
            name: 'Free',
            price: '$0',
            period: '/forever',
            description: 'Perfect for managing your company\'s first year of hiring.',
            features: [
                'Up to 3 active job posts',
                'Basic applicant management',
                'Standard listing visibility'
            ],
            cta: 'Post a Job Free',
            popular: false
        },
        {
            name: 'Growth',
            price: '$49',
            period: '/month',
            description: 'Ideal for scaling startups and expanding core teams.',
            features: [
                'Up to 10 active job posts',
                'Applicant tracking system (ATS)',
                'Basic performance analytics',
                'Standard email support'
            ],
            cta: 'Start Growth Plan',
            popular: true
        },
        {
            name: 'Enterprise',
            price: '$149',
            period: '/month',
            description: 'Full-suite hiring toolkit designed for large corporate teams.',
            features: [
                'Up to 50 active job posts',
                'Advanced analytics dashboard',
                'Featured job listings',
                'Team collaboration features',
                'Custom employer branding',
                'Priority 24/7 support'
            ],
            cta: 'Contact Sales',
            popular: false
        }
    ];

    const faqs = [
        {
            question: "Can I switch plans later?",
            answer: "Absolutely! You can upgrade, downgrade, or switch between plans at any point right from your account billing dashboard. Changes are prorated automatically."
        },
        {
            question: "How does the cancellation policy work?",
            answer: "You can cancel your subscription at any time. Once cancelled, your paid features will remain active until the end of your current billing cycle."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We securely accept all major credit and debit cards, including Visa, Mastercard, American Express, as well as digital wallets like PayPal and Apple Pay."
        },
        {
            question: "Can I request a refund?",
            answer: "If you're not satisfied with your purchase, we offer a hassle-free 14-day money-back guarantee for all initial subscriptions. Reach out to our support team to get started."
        }
    ];

    const currentPlans = userType === 'seeker' ? seekerPlans : recruiterPlans;

    return (
        <div className='min-h-screen pt-49 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8'>
            
            {/* Header Section */}
            <div className='max-w-3xl mx-auto text-center mb-12'>
                <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent'>
                    Flexible Pricing for Everyone
                </h1>
                <p className='mt-4 text-lg text-slate-500 dark:text-slate-400'>
                    Choose the plan that best fits your goals—whether you are scouting for your next opportunity or hiring top tier talent.
                </p>

                {/* Tab Switcher Button */}
                <div className='mt-8 inline-flex p-1 bg-slate-200 dark:bg-slate-900 rounded-xl border border-slate-300/30'>
                    <button
                        onClick={() => setUserType('seeker')}
                        className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                            userType === 'seeker'
                                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                        }`}
                    >
                        For Job Seekers
                    </button>
                    <button
                        onClick={() => setUserType('recruiter')}
                        className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                            userType === 'recruiter'
                                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-white shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                        }`}
                    >
                        For Recruiters
                    </button>
                </div>
            </div>

            {/* Pricing Cards Grid */}
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-24'>
                {currentPlans.map((plan, idx) => (
                    <div 
                        key={idx}
                        className={`relative rounded-2xl p-8 bg-white dark:bg-slate-900 border transition-all duration-300 ${
                            plan.popular 
                                ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-xl scale-105 z-10 md:-translate-y-2' 
                                : 'border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md'
                        }`}
                    >
                        {plan.popular && (
                            <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider'>
                                Most Popular
                            </span>
                        )}

                        <div className='mb-6'>
                            <h3 className='text-xl font-bold text-slate-900 dark:text-white'>{plan.name}</h3>
                            <p className='mt-2 text-sm text-slate-500 dark:text-slate-400 min-h-[40px]'>{plan.description}</p>
                            <div className='mt-4 flex items-baseline'>
                                <span className='text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white'>{plan.price}</span>
                                <span className='ml-1 text-sm text-slate-500 dark:text-slate-400'>{plan.period}</span>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button 
                            className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                                plan.popular
                                    ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white'
                                    : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
                            }`}
                        >
                            {plan.cta}
                        </button>

                        <hr className='my-6 border-slate-100 dark:border-slate-800' />

                        {/* Features List */}
                        <ul className='space-y-3.5'>
                            {plan.features.map((feature, fIdx) => (
                                <li key={fIdx} className='flex items-start text-sm text-slate-600 dark:text-slate-300'>
                                    <svg className='h-5 w-5 text-emerald-500 shrink-0 mr-2.5' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2.5'>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                                    </svg>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* FAQ Section Accordion */}
            <div className='max-w-3xl mx-auto border-t border-slate-200 dark:border-slate-800 pt-16'>
                <h2 className='text-3xl font-bold text-center tracking-tight mb-8 text-slate-900 dark:text-white'>
                    Frequently Asked Questions
                </h2>
                <div className='space-y-4'>
                    {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;
                        return (
                            <div 
                                key={index} 
                                className='bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm transition-all'
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className='w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors'
                                >
                                    <span>{faq.question}</span>
                                    <svg 
                                        className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                
                                <div 
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        isOpen ? 'max-h-40 border-t border-slate-100 dark:border-slate-800' : 'max-h-0'
                                    }`}
                                >
                                    <p className='p-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50/50 dark:bg-slate-900/50'>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default SubscriptionPage;