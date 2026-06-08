
import { getSession } from '@/lib/core/sassion';
import { redirect } from 'next/navigation';
import React from 'react';
import ApplyJobForm from './ApplyJobForm';
import { getJobssingle } from '@/lib/api/jobs';

const ApplyPage = async ({ params }) => {

    const { id } = await params

    const user = await getSession()
    if (!user) {
        redirect(`/singin?redirect=/jobs/${id}/apply`)
    }

    if (user.role !== 'seeker') {
        return (
            <div className='flex justify-center items-center min-h-screen'>
                <h1>Apply Only for job seeker</h1>
            </div>
        )
    }

    const job = await getJobssingle(id)

    return (
        <div className='max-w-7xl mx-auto mt-37 mb-10'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>Submit Your Application</h1>
                <p className='text-[0.90rem] text-gray-300 my-2'>Please fill out the form below to apply for this position.  Make sure all information is <br /> correct before submitting.</p>
            </div>
            <ApplyJobForm job={job} user={user}></ApplyJobForm>
        </div>
    );
};

export default ApplyPage;