import React from 'react';
import useAllCandidate from '../../DashboardCustomHook/useAllCandidate';
import CustomTable from '../../CustomData/CustomTable/CustomTable';
import { HiCheckCircle, HiMinusSm } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const AdminCandidate = () => {
    const [allCandidate, isLoading, refetch] = useAllCandidate();
    const navigate = useNavigate();
    const tableHead = [
        { name: "Name", dataKey: "name" },
        { name: "State", dataKey: "state" },
        { name: "Email", dataKey: "email" },
        { name: "Date", dataKey: "birth" },
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
            <CustomTable className="px-2"
                tableHead={tableHead}
                tableRow={allCandidate}
                option={option}
            ></CustomTable>
        </div>
    );
};

export default AdminCandidate;