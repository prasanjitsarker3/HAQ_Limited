import React, { useEffect, useState } from 'react';
import useAllUser from '../../DashboardCustomHook/useAllUser';
import { Input, Typography } from '@material-tailwind/react';
import UserTable from '../../CustomData/UserTable/UserTable';

const AllUser = () => {
    const [allUser, isLoading, refetch] = useAllUser();
    const [selectedImage, setSelectedImage] = useState(null);
    const [adminUser, setAdminUser] = useState([])
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const newAdminUser = allUser.filter(item => item.role === 'admin');
        setAdminUser(newAdminUser);
    }, [allUser]);

    console.log("Admin User", adminUser)

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const imageURL = URL.createObjectURL(selectedFile);
            setSelectedImage(imageURL);
        }
    };
    console.log("Selected file:", selectedImage);

    useEffect(() => {
        const handleOnlineStatusChange = () => {
            setIsOnline(navigator.onLine);
        };

        window.addEventListener("online", handleOnlineStatusChange);
        window.addEventListener("offline", handleOnlineStatusChange);

        return () => {
            // Clean up the event listeners when the component unmounts
            window.removeEventListener("online", handleOnlineStatusChange);
            window.removeEventListener("offline", handleOnlineStatusChange);
        };
    }, []);
    const allUsers = [
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
            name: "John Michael",
            email: "john@creative-tim.com",
            job: "Manager",
            org: "Organization",

            date: "23/04/18",
            role: "user",
        },
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
            name: "Alexa Liras",
            email: "alexa@creative-tim.com",
            job: "Programator",
            org: "Developer",
            online: false,
            date: "23/04/18",
            role: "user",
        },
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
            name: "Laurent Perrier",
            email: "laurent@creative-tim.com",
            job: "Executive",
            org: "Projects",
            online: false,
            date: "19/09/17",
        },
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            job: "Programator",
            org: "Developer",

            date: "24/12/08",
        },
        {
            img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
            name: "Michael Levi",
            email: "michael@creative-tim.com",
            job: "Programator",
            org: "Developer",

            date: "24/12/08",
        },
    ];
    return (
        <div>
            {/* <div className=" py-5 pl-5">
                <Typography>Selected Photo:</Typography>
                <Input
                    color="blue"
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleFileSelect}
                />
                {selectedImage && (
                    <img
                        src={selectedImage}
                        alt="Selected"
                        style={{ maxWidth: "100%", maxHeight: "300px", padding: "5px" }}
                    />
                )}
            </div> */}

            <div className=" px-12">
                <UserTable isOnline={isOnline} allUser={allUser} refetch={refetch} adminUser={adminUser}></UserTable>
            </div>
        </div>
    );
};

export default AllUser;