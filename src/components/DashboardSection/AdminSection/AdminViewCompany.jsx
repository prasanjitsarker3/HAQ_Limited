import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomViewTable from '../../CusromTable/CustomViewTable';
import Loading from '../../CustomLoading/Loading';

const AdminViewCompany = () => {
    const [data, setData] = useState([]);
    const [company, setCompany] = useState(null); // Initialize as null, not an empty array
    const { id } = useParams();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://hqa-server-prasanjitsarker3.vercel.app/company')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        if (data.length > 0 && id) { // Check if data is not empty and id is valid
            const foundCompany = data.find((item) => item._id === id);
            console.log("Company Data", foundCompany)
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
            setCompany({ info, aditional });
            setLoading(false);
        }
    }, [data, id]);

    return (
        <div>
            {
                loading ? <Loading /> :
                    <div className=' grid md:grid-cols-2 gap-6 py-12 px-12'>
                        <CustomViewTable
                            tableHead={"Company Information"}
                            data={company ? company.info : []} // Add a null check for company
                        />
                        <CustomViewTable
                            tableHead={"Additional Information"} // Corrected the table head
                            data={company ? company.aditional : []} // Add a null check for company
                        />
                    </div>
            }
        </div>
    );
};

export default AdminViewCompany;