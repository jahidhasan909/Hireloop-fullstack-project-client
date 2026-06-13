import { requireRole } from '@/lib/core/sassion';
import React from 'react';

const RecruiterLayout = async ({ children }) => {
    await requireRole('recruiter')
    return children
};

export default RecruiterLayout;