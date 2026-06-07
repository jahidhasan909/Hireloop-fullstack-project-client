import React from 'react';
import PostJobPage from './CompanyForm';
import { getSession } from '@/lib/core/sassion';
import { getCompanis } from '@/lib/api/companis';


const CompanyPage = async () => {

    const user = await getSession()
    const company = await getCompanis(user?.id)



    return (
        <div>
            <PostJobPage company={company}></PostJobPage>
        </div>
    );
};

export default CompanyPage;