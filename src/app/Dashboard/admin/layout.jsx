import { requireRole } from '@/lib/core/sassion';
import React from 'react';

const Adminlayout = async({children}) => {
    await requireRole('admin')
    return children
};

export default Adminlayout;