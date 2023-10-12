import React, { useEffect, useState } from 'react';
import useAllUser from '../../DashboardCustomHook/useAllUser';
import { Input, Typography } from '@material-tailwind/react';
import UserTable from '../../CustomData/UserTable/UserTable';
import Loading from '../../CustomLoading/Loading';

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
            {
                isLoading ? <Loading /> :
                    <div className=" px-12">
                        <UserTable isOnline={isOnline} allUser={allUser} refetch={refetch} adminUser={adminUser}></UserTable>
                    </div>
            }

        </div>
    );
};

export default AllUser;