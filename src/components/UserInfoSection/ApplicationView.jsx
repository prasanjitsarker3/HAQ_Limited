import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ApplicationView = () => {
    const [data, setData] = useState([]);
    const [application, setApplication] = useState(null); // Initialize as null, not an empty array
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/candidate')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        if (data.length > 0 && id) { // Check if data is not empty and id is valid
            const foundApplication = data.find((item) => item._id === id);
            setApplication(foundApplication); // Set the found application object
        }
    }, [data, id]);

    return (
        <div>
            <div className='grid md:grid-cols-3 gap-6 py-5 px-5 '>
                <div className=' text-lg space-y-2 p-3 shadow-lg'>
                    <h1 className=' text-center text-2xl font-semibold bg-blue-gray-50 p-2'>Personal Information</h1>
                    <h1 className='pl-5 p-1'>Name:  {application?.name} {application?.secondName}</h1>
                    <h1 className=' bg-blue-gray-50 pl-5 p-1'>Address:  {application?.state}, {application?.city}, {application?.country}</h1>
                    <h1 className='pl-5 p-1'>Email:  {application?.email}</h1>
                    <h1 className='bg-blue-gray-50 pl-5 p-1'>Birth:  {application?.birth}</h1>
                    <h1 className='  pl-5 p-1'>Phone:  {application?.phone}</h1>
                    <h1 className='bg-blue-gray-50 pl-5 p-1'>Object:  {application?.profileSummary}</h1>
                </div>
                <div className=' text-lg space-y-2 p-3 shadow-lg'>
                    <h1 className=' text-center text-2xl font-semibold bg-blue-gray-50 py-2'>Eduction Information</h1>
                    <h1 className='pl-5 p-1'>College:  {application?.institution}</h1>
                    <h1 className=' bg-blue-gray-50 pl-5 p-1'>Degree:  {application?.degree}</h1>
                    <h1 className='pl-5 p-1'>Start:  {application?.uniStart}</h1>
                    <h1 className=' bg-blue-gray-50 pl-5 p-1'>End:  {application?.uniEnd}</h1>
                    <h1 className='  pl-5 p-1'>Occupation:  {application?.occupation}</h1>
                    <h1 className=' bg-blue-gray-50 pl-5 p-1'>Description:  {application?.des}</h1>
                </div>
                <div className=' text-lg space-y-2 p-3 shadow-lg'>
                    <h1 className=' text-center text-2xl font-semibold bg-blue-gray-50 py-2'>Career Information</h1>
                    <h1 className='pl-5 p-1'>Company:  {application?.companyName}</h1>
                    <h1 className=' bg-blue-gray-50 pl-5 p-1'>Title:  {application?.experienceTile}</h1>
                    <h1 className='pl-5 p-1'>location:  {application?.location || "Dhaka"}</h1>
                    <h1 className='bg-blue-gray-50 pl-5 p-1'>Experience Start:  {application?.startExperience}</h1>
                    <h1 className=' pl-5 p-1'>Experience End:  {application?.endExperience}</h1>
                    <h1 className='bg-blue-gray-50 pl-5 p-1'>Professional:  {application?.professional}</h1>
                </div>
            </div>
        </div>
    );
};

export default ApplicationView;
