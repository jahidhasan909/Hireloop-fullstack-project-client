import React from 'react';
import CompanyProfile from './CompanyProfile';
import { getSession } from '@/lib/core/sassion';
import { getCompanis } from '@/lib/api/companis';

const Companypage = async () => {

    const user = await getSession()
    const company = await getCompanis()



    return (
        <div>
            <CompanyProfile recruiter={user} recruiterCompany={company}></CompanyProfile>
        </div>
    );
};

export default Companypage;