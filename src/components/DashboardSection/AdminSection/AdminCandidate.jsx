import React from "react";
import useAllCandidate from "../../DashboardCustomHook/useAllCandidate";
import CustomTable from "../../CustomData/CustomTable/CustomTable";
import { HiCheckCircle, HiMinusSm } from "react-icons/hi";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../CustomLoading/Loading";
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
    console.log(id);
    navigate(`/dashboard/viewAdminApplication/${id}`);
  };
  const handleDeleteCandidate = (itemId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/candidate/${itemId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  const option = [
    { name: "View", icon: <FaEye className=" text-blue-600" />, fun: userView },
    {
      name: "Delete",
      icon: <FaTrash className=" text-red-600" />,
      fun: handleDeleteCandidate,
    },
  ];

  return (
    <div className="px-5">
      {isLoading ? (
        <Loading />
      ) : (
        <CustomTable
          className="px-2"
          tableHead={tableHead}
          tableRow={allCandidate}
          option={option}
        ></CustomTable>
      )}
    </div>
  );
};

export default AdminCandidate;
