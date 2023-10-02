import React from 'react';
import useAllMessage from '../../DashboardCustomHook/useAllMessage';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../CustomData/CustomTable/CustomTable'; 
import { HiCheckCircle, HiMinusSm } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminMessage = () => {
    const [allMessage, isLoading, refetch] = useAllMessage();
    console.log("All Message", allMessage)
    const navigate = useNavigate();
    const tableHead = [
        { name: "Name", dataKey: "name" },
        { name: "Email", dataKey: "email" },
        { name: "Contract", dataKey: "contract" },
        { name: "Date", dataKey: "date" },
        { name: "Action", dataKey: null },
    ];

    const userView = (id) => {
        console.log(id)
        navigate(`/viewApplication/${id}`);
    };
    const add = (itemId) => {  
        console.log("Clicked", itemId);
        alert("Add Some Data Client To ");
    };
    const option = [
        { name: "View", icon: <FaEye />, fun: userView },
        { name: "Add", icon: <HiMinusSm />, fun: add },
    ];
    return (
        <div className='px-5'>
            <CustomTable
                tableHead={tableHead}
                tableRow={allMessage}
                option={option}
            >
            </CustomTable>
        </div>
    );
};

export default AdminMessage;