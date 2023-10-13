import React from 'react';
import YearBarChart from '../../ChartSection/YearBarChart';
import ApplyChart from '../../ChartSection/ApplyChart';


const AdminInfo = () => {
    const newData = [44, 55, 57, 56, 61, 58, 63, 60, 66]
    const data = [11, 32, 45, 32, 34, 52, 41]
    const divStyles = {
        background: 'linear-gradient(45deg, #FFA0A0, #FF7070)',
        animation: 'backgroundAnimation 5s linear infinite',
    };
    const divStyle = {
        background: 'linear-gradient(45deg, #2ecc71, #1abc9c)',
        animation: 'backgroundAnimation 5s linear infinite',
    };
    const divStyl = {
        background: 'linear-gradient(45deg, #2980b9, #3498db)',
        animation: 'backgroundAnimation 5s linear infinite',
    };
    return (
        <div className=' pt-2'>
            <div className=' grid md:grid-cols-3 gap-12 pb-5 px-12 mr-3'>
                <div style={divStyles} className='flex justify-center items-center text-gray-900 gap-5 py-8 rounded shadow-md bg-red-100'>
                    <h1 className='text-xl font-sans '>Total Candidate</h1>
                    <h1 className='text-xl'>120</h1>
                </div>
                <div style={divStyle} className='flex justify-center items-center text-gray-900 gap-5 py-8 rounded shadow-md bg-red-100'>
                    <h1 className='text-xl font-sans'>Total Company</h1>
                    <h1 className='text-xl'>120</h1>
                </div>
                <div style={divStyl} className='flex justify-center items-center text-gray-900 gap-5 py-8 rounded shadow-md bg-red-100'>
                    <h1 className='text-xl font-sans'>Total User</h1>
                    <h1 className='text-xl'>120</h1>
                </div>
               
            </div>
            <div className='grid md:grid-cols-2 gap-5 px-12  h-[350px] overflow-hidden'>
                <div className='w-[500px] h-[350px] bg-white'>
                    <YearBarChart newData={newData} />
                </div>
                <div className='w-[500px] h-[350px] bg-white'>
                    <ApplyChart data={data} />
                </div>
            </div>
        </div>
    );
};

export default AdminInfo;