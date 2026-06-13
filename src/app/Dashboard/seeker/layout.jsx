import { requireRole } from '@/lib/core/sassion';
import React from 'react';

const SeekerLayout = async ({ children }) => {
    await requireRole('seeker')
    return children
};

export default SeekerLayout;