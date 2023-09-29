import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { FaEllipsisV } from "react-icons/fa";

const MenuDefault = (props) => {
    const { options, rowId } = props;
    return (
        <Menu >
            <MenuHandler>
                <Button className=" bg-blue-gray-50 text-black">
                    <FaEllipsisV></FaEllipsisV>
                </Button>
            </MenuHandler>
            <MenuList>
                {options.map((option, index) => (
                    <MenuItem key={index} onClick={() => option.fun(rowId)} className="flex items-center gap-3 text-lg">
                        {option.icon} {option.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default MenuDefault;