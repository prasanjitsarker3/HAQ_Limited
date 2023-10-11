import React from 'react';
import useAllCompany from '../../DashboardCustomHook/useAllCompany';
import CustomTable from '../../CustomData/CustomTable/CustomTable';
import { HiCheckCircle, HiMinusSm } from "react-icons/hi";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

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
        navigate(`/dashboard/viewAdminCompany/${id}`);
    };
    const handleDeleteCompany = (itemId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://hqa-server-prasanjitsarker3.vercel.app/company/${itemId}`, {
                    method: 'DELETE'
                })
                    .then((response) => {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        // Handle network errors or other exceptions here
                    });
            }
        });
    };

    const option = [
        { name: "View", icon: <FaEye className=' text-blue-600' />, fun: userView },
        { name: "Delete", icon: <FaTrash className=' text-red-600' />, fun: handleDeleteCompany },
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