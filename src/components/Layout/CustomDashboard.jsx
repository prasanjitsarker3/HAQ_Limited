import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const CustomDashboard = () => {
    return (
        <div className=' pt-6'>
            <div className=' flex justify-center gap-5'>
                <Button color='blue'>All Video</Button>
                <Button color='blue'>Recent Video</Button>
                <Link to="/">
                    <Button color='blue'>Home</Button>
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default CustomDashboard;