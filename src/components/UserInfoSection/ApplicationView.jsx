import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomViewTable from '../CusromTable/CustomViewTable';

const ApplicationView = () => {
    const [data, setData] = useState([]);
    const [application, setApplication] = useState(null); // Initialize as null, not an empty array
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:5000/candidate')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        if (data.length > 0 && id) { // Check if data is not empty and id is valid
            const foundApplication = data.find((item) => item._id === id);
            const info = [
                { key: "Name", value: foundApplication.name + ' ' + foundApplication.secondName },
                { key: "Address", value: foundApplication.state + ',' + foundApplication.city + ',' + foundApplication.country },
                { key: "Email", value: foundApplication.email },
                { key: "Birth", value: foundApplication.birth },
                { key: "Phone", value: foundApplication.phone },
                { key: "Object", value: foundApplication.object },
            ]
            const education = [
                { key: "College", value: foundApplication.institution },
                { key: "Degree", value: foundApplication.degree },
                { key: "Start", value: foundApplication.uniStart },
                { key: "End", value: foundApplication.uniEnd },
                { key: "Occupation", value: foundApplication.occupation },
                { key: "Description", value: foundApplication.des },
            ]
            const career = [
                { key: "Company", value: foundApplication.companyName },
                { key: "Title", value: foundApplication.experienceTile },
                { key: "Location", value: foundApplication.location },
                { key: "Experience Start", value: foundApplication.startExperience },
                { key: "Experience End", value: foundApplication.endExperience },
                { key: "Professional", value: foundApplication.professional },
            ]
            setApplication({info, education, career}); // Set the found application object
        }
    }, [data, id]);

    return (
        <div>
            <div className='grid md:grid-cols-3 gap-6 py-12 px-12  '>

                <CustomViewTable
                    tableHead={"Personal Information"}
                    data={application ? application.info : []} // Add a null check for company
                />
                <CustomViewTable
                    tableHead={"Eduction Information"} // Corrected the table head
                    data={application ? application.education : []} // Add a null check for company
                />
                <CustomViewTable
                    tableHead={"Career Information"} // Corrected the table head
                    data={application ? application.career : []} // Add a null check for company
                />
            </div>
        </div>
    );
};

export default ApplicationView;
