import React from "react";
import useCompany from "../UserCustomHook/useCompany";
import CustomTable from "../CustomData/CustomTable/CustomTable";
import { FaEye, FaTrash } from "react-icons/fa";
import { HiMinusSm } from "react-icons/hi";
import { useNavigate, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";

const CompanyTable = () => {
  const [company, isLoading, refetch] = useCompany();
  const navigate = useNavigate();
  console.log("Company", company);
  const tableHead = [
    { name: "Name", dataKey: "name" },
    { name: "Country", dataKey: "country" },
    { name: "Email", dataKey: "email" },
    { name: "Date", dataKey: "date" },
    { name: "Action", dataKey: null },
  ];

  const userView = (id) => {
    navigate(`/viewCompany/${id}`);
  };
  const handleDeleteCompany = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Deleted `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/company/${id}`, {
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
    { name: "View", icon: <FaEye />, fun: userView },
    { name: "Delete", icon: <FaTrash />, fun: handleDeleteCompany },
  ];
  return (
    <div className=" px-12 py-5">
      <CustomTable
        tableHead={tableHead}
        tableRow={company}
        option={option}
      ></CustomTable>
    </div>
  );
};

export default CompanyTable;
