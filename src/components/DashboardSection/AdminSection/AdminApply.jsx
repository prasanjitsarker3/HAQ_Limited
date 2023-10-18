import React from 'react';
import useApply from '../../DashboardCustomHook/useApply';
import CustomTable from '../../CustomData/CustomTable/CustomTable';
import { FaEye, FaTrash } from 'react-icons/fa6';

const AdminApply = () => {
    const [applyData, isLoading, refetch] = useApply();
    console.log("Apply Data", applyData);
    const tableHead = [
        { name: "Name", dataKey: "name" },
        { name: "Email", dataKey: "email" },
        { name: "Date", dataKey: "data" },
        { name: "location", dataKey: "location" },
        { name: "Action", dataKey: null },
    ];
    const userView = () => {

    }
    const handleDeleteApply = () => {

    }
    const option = [
        { name: "View", icon: <FaEye className=' text-blue-600' />, fun: userView },
        { name: "Delete", icon: <FaTrash className=' text-red-600' />, fun: handleDeleteApply },
    ];
    return (
        <div>
            <div className='px-5'>
                <CustomTable
                    tableHead={tableHead}
                    tableRow={applyData}
                    option={option}
                ></CustomTable>
            </div>
        </div>
    );
};

export default AdminApply;