import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomViewTable from '../CusromTable/CustomViewTable';


const CompanyViewPage = () => {
    const [data, setData] = useState([]);
    const [company, setCompany] = useState(null); // Initialize as null, not an empty array
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/company')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        if (data.length > 0 && id) { // Check if data is not empty and id is valid
            const foundCompany = data.find((item) => item._id === id);
            console.log("Company Data",foundCompany)
            const info = [
                { key: "Company", value: foundCompany.name },
                { key: "Country", value: foundCompany.country },
                { key: "Location", value: foundCompany.location }
            ];
            const aditional = [
                { key: "Slogan", value: foundCompany.slogan },
                { key: "Email", value: foundCompany.email },
                { key: "State", value: foundCompany.state }
            ];
            setCompany({ info, aditional }); // Set the found company object
        }
    }, [data, id]);

    return (
        <div className=' grid md:grid-cols-2 py-12 px-12'>
            <CustomViewTable
                tableHead={"Company Information"}
                data={company ? company.info : []} // Add a null check for company
            />
            <CustomViewTable
                tableHead={"Additional Information"} // Corrected the table head
                data={company ? company.aditional : []} // Add a null check for company
            />
        </div>
    );
};

export default CompanyViewPage;
