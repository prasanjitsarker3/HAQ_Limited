import React from 'react';
import YearBarChart from '../../ChartSection/YearBarChart';


const AdminInfo = () => {
    const newData= [44, 55, 57, 56, 61, 58, 63, 60, 66]
    return (
        <div>
            <div className=' w-[500px] h-[400px]'>
            <YearBarChart newData={newData}/>
            </div>
        </div>
    );
};

export default AdminInfo;