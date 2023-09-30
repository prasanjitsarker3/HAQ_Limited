import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AdminSidebar from '../DashboardSection/AdminSection/AdminSidebar';

const DashboardLayout = () => {

    const isAdmin = true;
    return (
        <div className='flex  gap-1 bg-gray-200'>
            <div className='text-xl flex flex-col '>
                <AdminSidebar></AdminSidebar>
            </div>
            <div className='mt-4 w-full'>
                <Outlet></Outlet>
            </div>
        </div>


    );
};

export default DashboardLayout;