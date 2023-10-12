import { Spinner, Typography } from '@material-tailwind/react';
import React from 'react';

const Loading = () => {
    return (
        <div className=' flex justify-center items-center'>
            <div className="flex gap-8">
                <Typography className="text-lg text-blue-500 transition duration-300 ease-in-out group-hover:text-red-500">
                    Loading Data..
                </Typography>
                <Spinner color="blue" />
                <Spinner color="red" />
                <Spinner color="green" />
            </div>
        </div>
    );
};

export default Loading;