import React from 'react';
import useAllMessage from '../../DashboardCustomHook/useAllMessage';
import { useNavigate } from 'react-router-dom';
import CustomTable from '../../CustomData/CustomTable/CustomTable';
import { HiCheckCircle, HiMinusSm } from "react-icons/hi";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Loading from '../../CustomLoading/Loading';

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
        navigate(`/dashboard/viewMessage/${id}`);
    };
    const handleDeletedMessage = (itemId) => {
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
                fetch(`http://localhost:5000/message/${itemId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    };
    const option = [
        { name: "View", icon: <FaEye />, fun: userView },
        { name: "Delete", icon: <FaTrash />, fun: handleDeletedMessage },
    ];
    return (
        <div className='px-5'>
            {
                isLoading ? <Loading /> : 
                    <CustomTable
                        tableHead={tableHead}
                        tableRow={allMessage}
                        option={option}
                    >
                    </CustomTable>
            }

        </div>
    );
};

export default AdminMessage;