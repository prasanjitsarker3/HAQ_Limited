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
const AdminSidebar = () => {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Card className="h-[calc(100vh-16px)] w-full max-w-[16rem] ml-4 p-4 mt-4 bg-blue-gray-50 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 p-4">
                <Typography variant="h5"  className='text-center primaryColor'>
                    HQA Limited
                </Typography>
            </div>
            <List>
                <ListItem>
                    <ListItemPrefix>
                        {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                    Dashboard
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        {/* <ShoppingBagIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                  <Link to="/dashboard/admin">All User</Link>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        {/* <InboxIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                    Inbox
                    <ListItemSuffix>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        {/* <UserCircleIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                    Profile
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        {/* <Cog6ToothIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                    Settings
                </ListItem>
              <hr className=' border-cyan-600 border-2 rounded-md mx-3' />
                <ListItem>
                    <ListItemPrefix>
                        {/* <PowerIcon className="h-5 w-5" /> */}
                    </ListItemPrefix>
                    <Link to="/">
                        Home
                    </Link>
                </ListItem>
            </List>
        </Card>
    );
};

export default AdminSidebar;