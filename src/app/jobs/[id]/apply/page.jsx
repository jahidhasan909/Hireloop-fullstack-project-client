import { getSession } from '@/lib/core/sassion';
import { redirect } from 'next/navigation';
import React from 'react';
import ApplyJobForm from './ApplyJobForm';
import { getJobssingle } from '@/lib/api/jobs';
import { getApplicationbyApplicantId } from '@/lib/action/application';
import Link from 'next/link';

const ApplyPage = async (props) => {
    // Unwrapping params safely in standard JS
    const params = await props.params;
    const { id } = params;

    const user = await getSession();
    if (!user) {
        redirect(`/singin?redirect=/jobs/${id}/apply`);
    }

    // Modern Access Denied Screen
    if (user.role !== 'seeker') {
        return (
            <div className='flex flex-col justify-center items-center min-h-[70vh] px-4 text-center'>
                <div className='bg-red-50 text-red-600 p-4 rounded-full mb-4 dark:bg-red-950/30 dark:text-red-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                    </svg>
                </div>
                <h1 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Access Denied</h1>
                <p className='text-slate-500 dark:text-slate-400 mt-2 max-w-sm'>
                    Job applications are exclusively reserved for Job Seekers. Please log in with a seeker account.
                </p>
            </div>
        );
    }

    const application = await getApplicationbyApplicantId(user.id);
    const job = await getJobssingle(id);

    const plan = {
        plan: 'Free',
        maxapply: 3
    };

    const hasReachedLimit = application.length >= plan.maxapply;

    return (
        <div className='max-w-3xl mx-auto px-4 py-12 md:py-20'>
            
            {/* Top Stats Banner */}
            <div className='mb-8 mt-20 p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
                <div>
                    <p className='text-xs font-semibold uppercase tracking-wider text-slate-400'>Current Plan</p>
                    <p className='text-sm font-bold text-slate-700 dark:text-slate-300'>{plan.plan} Plan</p>
                </div>
                <div className='w-full sm:w-auto flex flex-col sm:items-end gap-1'>
                    <div className='flex justify-between sm:justify-end gap-2 text-sm text-slate-600 dark:text-slate-400'>
                        <span>Applications Sent:</span>
                        <span className='font-semibold text-slate-900 dark:text-white'>{application.length} / {plan.maxapply}</span>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className='w-full sm:w-48 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden'>
                        <div 
                            className={`h-full rounded-full ${hasReachedLimit ? 'bg-red-500' : 'bg-blue-600'}`}
                            style={{ width: `${Math.min((application.length / plan.maxapply) * 100, 100)}%` }}
                        />
                    </div>
                </div>
            </div>

            {hasReachedLimit ? (
                /* Premium Upgrade Card */
                <div className='text-center py-12 px-6 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-950 shadow-sm'>
                    <div className='inline-flex p-3 bg-blue-50 dark:bg-blue-950/50 rounded-full text-blue-600 dark:text-blue-400 mb-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className='text-xl font-bold text-slate-900 dark:text-white'>Application Limit Reached</h3>
                    <p className='text-slate-500 dark:text-slate-400 mt-2 max-w-md mx-auto text-sm leading-relaxed'>
                        You have used all {plan.maxapply} available applications on your Free Plan. Upgrade your subscription to keep applying for unlimited opportunities.
                    </p>
                    <div className='mt-6'>
                        <Link 
                            className='inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg transition-colors shadow-sm shadow-blue-500/10' 
                            href='/subscription'
                        >
                            Buy Subscription
                        </Link>
                    </div>
                </div>
            ) : (
                /* Form Block */
                <div className='space-y-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-6 md:p-8 rounded-2xl shadow-sm'>
                    <div className='text-center max-w-xl mx-auto'>
                        <h1 className='text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight'>
                            Submit Your Application
                        </h1>
                        <p className='text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed'>
                            Please fill out the form below to apply for this position. Make sure all information is accurate and updated before submitting.
                        </p>
                    </div>
                    
                    <hr className='border-slate-200 dark:border-slate-800' />
                    
                    <ApplyJobForm job={job} user={user} />
                </div>
            )}

        </div>
    );
};

export default ApplyPage;