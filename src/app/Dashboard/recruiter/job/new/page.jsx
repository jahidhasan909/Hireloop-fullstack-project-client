import React from 'react';
import PostJobPage from './CompanyForm';
import { getCompanyloginrecruiter } from '@/lib/api/companis';

const CompanyPage = async () => {

    const company = await getCompanyloginrecruiter()


    return (
        <div>
            <PostJobPage company={company}></PostJobPage>
        </div>
    );
};

export default CompanyPage;