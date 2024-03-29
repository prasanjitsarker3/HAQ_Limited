import { HiCheckCircle, HiMinusSm } from "react-icons/hi";
import CustomTable from "../CustomData/CustomTable/CustomTable";
import { FaEye, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ApplicationTable = ({ applications, refetch }) => {
  const navigate = useNavigate();
  const tableHead = [
    { name: "Name", dataKey: "name" },
    { name: "Country", dataKey: "country" },
    { name: "Email", dataKey: "email" },
    { name: "Date", dataKey: "date" },
    { name: "Action", dataKey: null },
  ];
  // const tableRow = [
  //     {
  //         id: "1",
  //         name: "John Michael",
  //         job: "Manager",
  //         date: "23/04/18",
  //     },
  //     {
  //         id: "2",
  //         name: "Alexa Liras",
  //         job: "Developer",
  //         date: "23/04/18",
  //     },
  //     {
  //         id: "3",
  //         name: "Laurent Perrier",
  //         job: "Executive",
  //         date: "19/09/17",
  //     },
  //     {
  //         id: "4",
  //         name: "Emily Johnson",
  //         job: "Designer",
  //         date: "12/03/19",
  //     },
  //     {
  //         id: "5",
  //         name: "David Smith",
  //         job: "Engineer",
  //         date: "05/07/20",
  //     },
  //     {
  //         id: "6",
  //         name: "Sarah Brown",
  //         job: "Analyst",
  //         date: "30/01/21",
  //     },
  //     {
  //         id: "7",
  //         name: "Michael Davis",
  //         job: "Manager",
  //         date: "14/11/19",
  //     },
  //     {
  //         id: "8",
  //         name: "Jennifer Lee",
  //         job: "Developer",
  //         date: "02/06/20",
  //     },
  //     {
  //         id: "9",
  //         name: "Daniel Wilson",
  //         job: "Executive",
  //         date: "09/12/18",
  //     },
  //     {
  //         id: "10",
  //         name: "Olivia Miller",
  //         job: "Designer",
  //         date: "27/08/19",
  //     },
  //     {
  //         id: "11",
  //         name: "James Taylor",
  //         job: "Engineer",
  //         date: "18/05/21",
  //     },
  //     {
  //         id: "12",
  //         name: "Sophia Johnson",
  //         job: "Analyst",
  //         date: "10/10/17",
  //     },
  //     {
  //         id: "13",
  //         name: "William Harris",
  //         job: "Manager",
  //         date: "03/02/19",
  //     },
  //     {
  //         id: "14",
  //         name: "Emma Clark",
  //         job: "Developer",
  //         date: "22/06/18",
  //     },
  //     {
  //         id: "15",
  //         name: "Benjamin Anderson",
  //         job: "Executive",
  //         date: "17/11/20",
  //     },
  //     {
  //         id: "16",
  //         name: "Mia Garcia",
  //         job: "Designer",
  //         date: "11/04/17",
  //     },
  // ];
  const userView = (id) => {
    console.log(id);
    navigate(`/viewApplication/${id}`);
  };
  const add = (id) => {
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
        fetch(`http://localhost:5000/candidate/${id}`, {
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
    { name: "View", icon: <FaEye style={{ color: "blue" }} />, fun: userView },
    { name: "Delete", icon: <FaTrash style={{ color: "red" }} />, fun: add },
  ];
  return (
    <div className="px-4">
      <CustomTable
        tableHead={tableHead}
        tableRow={applications}
        option={option}
      ></CustomTable>
    </div>
  );
};

export default ApplicationTable;
