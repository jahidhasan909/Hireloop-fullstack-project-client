import { SideBar } from '@/Components/DashBoardComponents/SideBar/SideBar';
import React from 'react';

const DashBoardlayout = ({children}) => {
    return (
        <div className='mt-32 flex '>
            <SideBar/>
            <div className='flex-1'>
                {children}
            </div>
        </div>
    );
};

export default DashBoardlayout;