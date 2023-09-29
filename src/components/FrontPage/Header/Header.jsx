import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,

} from "@material-tailwind/react";
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    const [openNav, setOpenNav] = useState(false);
    const handleLogOut = () => {
        userLogOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    // const user = false;
    const isAdmin = true;
    const dashboard = <>
        {
            isAdmin && <Link to="/dashboard" className='mr-3'>Dashboard</Link>
        }
    </>
    const options = <>

        {

            user ? <Menu>
                <MenuHandler>
                    <Avatar
                        src="https://img.freepik.com/premium-vector/young-smiling-man-adam-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_365941-687.jpg?size=626&ext=jpg&ga=GA1.2.2060036261.1681297115&semt=sph"
                        alt="avatar"
                        withBorder={true}
                        className="p-0.5 cursor-pointer"
                    />
                </MenuHandler>
                <MenuList className=''>
                    {/* <MenuItem className=''>
                        <Link to="/userProfile">Profile</Link>
                    </MenuItem> */}
                    <MenuItem>
                        <Link to="/application">Application</Link>
                    </MenuItem>
                    <MenuItem>
                        <Button onClick={handleLogOut} size="sm" color="blue">Log Out</Button></MenuItem>
                </MenuList>
            </Menu> :
                <Link to="/login">
                    <Button size="sm" color="blue">Sign In</Button>
                </Link>
        }
    </>

    const navList = (
        <ul className="mb-4 mt-5 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant='small'
                color="blue-gray"
                className="p-1 font-normal text-base"
            >
                <NavLink to="/" className={({ isActive }) =>
                    isActive
                        ? '  bg-primary text-blue-700 cursor-pointer flex items-center text-base'
                        : '  group hover:bg-primary text-secondary/40 cursor-pointer transition-all flex items-center text-base'
                } >
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant='small'
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/service" className={({ isActive }) =>
                    isActive
                        ? '  bg-primary text-blue-700 cursor-pointer flex items-center text-base'
                        : '  group hover:bg-primary text-secondary/40 cursor-pointer transition-all flex items-center text-base'
                } >
                    Services
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant='small'
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/profile" className={({ isActive }) =>
                    isActive
                        ? '  bg-primary text-blue-700 cursor-pointer flex items-center text-base'
                        : '  group hover:bg-primary text-secondary/40 cursor-pointer transition-all flex items-center text-base'
                } >
                    Company Profile
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/choose" className={({ isActive }) =>
                    isActive
                        ? '  bg-primary text-blue-700 cursor-pointer flex items-center text-base'
                        : '  group hover:bg-primary text-secondary/40 cursor-pointer transition-all flex items-center text-base'
                } >
                    Choose Us
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to="/" className={({ isActive }) =>
                    isActive
                        ? '  bg-primary text-blue-700 cursor-pointer flex items-center text-base'
                        : '  group hover:bg-primary text-secondary/40 cursor-pointer transition-all flex items-center text-base'
                } >
                    Govt.License
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Menu className="flex items-center">
                    <MenuHandler>
                        <p className=' cursor-pointer text-base'>Registration</p>
                    </MenuHandler>
                    <MenuList>
                        <MenuItem>
                            <NavLink to="/candidate" className={({ isActive }) =>
                                isActive
                                    ? '  bg-primary text-blue-700 cursor-pointer flex items-center text-base'
                                    : '  group hover:bg-primary text-secondary/40 cursor-pointer transition-all flex items-center text-base'
                            } > Registration  Candidate</NavLink>
                        </MenuItem>
                        <MenuItem>
                            <NavLink to="/company" className={({ isActive }) =>
                                isActive
                                    ? '  bg-primary text-blue-700 cursor-pointer flex items-center text-base'
                                    : '  group hover:bg-primary text-secondary/40 cursor-pointer transition-all flex items-center text-base'
                            } > Registration  Company</NavLink>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full  rounded-none py-2 px-4 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer text-2xl py-1.5 font-medium primaryColor"
                >
                    HAO Limited
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <h1

                        className="hidden lg:inline-block"
                    >
                        {dashboard}
                        {options}
                    </h1>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                {dashboard}
                {options}
            </Collapse>
        </Navbar>
    );
};

export default Header;