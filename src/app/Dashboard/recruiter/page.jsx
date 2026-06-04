'use client'
import { useSession } from '@/lib/auth-client';
import React from 'react';
import { IconFileDescription,IconUsers,IconBolt,IconCheck } from '@tabler/icons-react';
import StatesCard from '@/Components/DashBoardComponents/StatesCard/StatesCard';

const RecruiterPage = () => {



    const dashboardStats = [
        {
            title: "Total Job Posts",
            value: 48,
            icon: IconFileDescription ,
        },
        {
            title: "Total Applicants",
            value: 1284,
            icon: IconUsers ,
        },
        {
            title: "Active Jobs",
            value: 18,
            icon: IconBolt ,
        },
        {
            title: "Jobs Closed",
            value: 32,
            icon: IconCheck ,
        },
    ];

    const { data, isPending } = useSession()


    const user = data?.user


    if (isPending) {
        return <div>loading..</div>
    }


    return (
        <div className='border-t border-default p-4'>
            <h1 className='font-bold text-2xl mb-3'>Welcome back, {user?.name}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl">
                {dashboardStats.map((stat, index) => (
                    <StatesCard
                        key={index}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                    />
                ))}
            </div>
        </div>
    );
};

export default RecruiterPage;