import { Avatar, Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);
    const user = false;
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
                <MenuList>
                    <MenuItem>Menu Item 1</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                    <MenuItem>Menu Item 3</MenuItem>
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
                className="p-1 font-normal"
            >
                <Link to="/" className="flex items-center text-base">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant='small'
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/service" className="flex items-center text-base">
                    Services
                </Link>
            </Typography>
            <Typography
                as="li"
                variant='small'
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/profile" className="flex items-center text-base">
                    Company Profile
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="/choose" className="flex items-center text-base">
                    Choose Us
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center text-base">
                    Govt.License
                </a>
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
                        <MenuItem>Menu Item 1</MenuItem>
                        <MenuItem>Menu Item 2</MenuItem>
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
            <MobileNav open={openNav}>
                {navList}
                {options}
            </MobileNav>
        </Navbar>
    );
};

export default Header;