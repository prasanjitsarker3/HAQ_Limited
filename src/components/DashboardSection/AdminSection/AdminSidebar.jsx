import React from 'react';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip, 
} from "@material-tailwind/react";
// import { Divider } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaHome, FaHospitalUser, FaUser, FaUserFriends } from 'react-icons/fa';
import { HiAnnotation ,HiChatAlt2, HiHome} from "react-icons/hi";
const AdminSidebar = () => {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true); 

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Card className="h-[calc(100vh-32px)] w-full max-w-[13rem] ml-4 p-4 my-4  shadow-xl text-left shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5" className='text-center primaryColor'>
                    HQA Limited
                </Typography>
            </div>
            <List className='text-left'>
                <ListItem className=' text-left max-w-[10rem] bg-black text-white hover:bg-black hover:text-white'>
                    <ListItemPrefix>
                        {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                        <FaHome className="h-5 w-5"/>
                    </ListItemPrefix>
                    <Link to="/dashboard/admin">Dashboard</Link>
                </ListItem>
                <ListItem className='text-left max-w-[10rem] my-1'>
                    <ListItemPrefix>
                        <FaHospitalUser className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to="/dashboard/admin">Panel User</Link>
                </ListItem>
                <ListItem className='text-left max-w-[10rem]'>
                    <ListItemPrefix>
                        <FaUser className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to="/dashboard/adminCandidate">Candidate</Link>
                </ListItem>
                <ListItem className='text-left max-w-[10rem] my-1'> 
                    <ListItemPrefix>
                        <FaBuilding className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to="/dashboard/adminCompany">Company</Link>
                </ListItem>
                <ListItem className='text-left max-w-[10rem]'>
                    <ListItemPrefix>
                        <FaUserFriends className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to="/dashboard/allUser">All User</Link>
                </ListItem>
                <ListItem className='text-left max-w-[10rem] my-1'>
                    <ListItemPrefix>
                        <HiAnnotation className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to="/dashboard/admin">Application</Link>
                </ListItem>
                <ListItem className='text-left max-w-[10rem] my-1'>
                    <ListItemPrefix>
                        <HiChatAlt2 className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to="/dashboard/admin">Message</Link>
                </ListItem>

                <hr className=' border-cyan-600 border-2  max-w-[10rem] rounded-md  inline-block mr-3' />
                <ListItem className='text-left max-w-[10rem] my-1'>
                    <ListItemPrefix>
                        <HiHome className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link to="/">Home</Link>
                </ListItem>
            </List>
        </Card>
    );
};

export default AdminSidebar;