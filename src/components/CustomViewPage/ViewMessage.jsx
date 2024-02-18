import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomViewTable from "../CusromTable/CustomViewTable";
import Loading from "../CustomLoading/Loading";

const ViewMessage = () => {
  const [data, setData] = useState([]);
  const [application, setApplication] = useState(null); // Initialize as null, not an empty array
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/message")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log("Message", data);
  useEffect(() => {
    if (data.length > 0 && id) {
      // Check if data is not empty and id is valid
      const foundMessage = data.find((item) => item._id === id);
      const info = [
        { key: "Name", value: foundMessage.name },
        { key: "Contract", value: foundMessage.contract },
        { key: "Email", value: foundMessage.email },
      ];
      const message = [
        { key: "Subject", value: foundMessage.subject },
        { key: "Message", value: foundMessage.message },
      ];

      setApplication({ info, message });
      setLoading(false); // Set the found application object
    }
  }, [data, id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid md:grid-cols-2 py-12 px-12 gap-5">
          <CustomViewTable
            tableHead={"Personal Information"}
            data={application ? application.info : []} // Add a null check for company
          />
          <CustomViewTable
            tableHead={"Additional Information"} // Corrected the table head
            data={application ? application.message : []} // Add a null check for company
          />
        </div>
      )}
    </>
  );
};

export default ViewMessage;
