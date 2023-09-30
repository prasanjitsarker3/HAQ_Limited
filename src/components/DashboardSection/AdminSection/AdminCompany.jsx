import React from 'react';
import useAllCompany from '../../DashboardCustomHook/useAllCompany';
import CustomTable from '../../CustomData/CustomTable/CustomTable';
import { HiCheckCircle, HiMinusSm } from "react-icons/hi";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AdminCompany = () => {
    const [allCompany, isLoading, refetch] = useAllCompany();
    const navigate = useNavigate();
    const tableHead = [
        { name: "Name", dataKey: "name" },
        { name: "Email", dataKey: "email" },
        { name: "State", dataKey: "state" },
        { name: "location", dataKey: "location" },
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
    console.log("Company data", allCompany)
    return (
        <div className='px-5'>
            <CustomTable
                tableHead={tableHead}
                tableRow={allCompany}
                option={option}
            ></CustomTable>
        </div>
    );
};

export default AdminCompany;