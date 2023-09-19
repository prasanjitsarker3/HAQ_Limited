import { Button } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignUp } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || "/";
    const handleGooGleSign = () => {
        googleSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => { 
                console.log(error.message);
            })
    }
    return (
        <div className='flex justify-center'>
            <Button
                onClick={handleGooGleSign}
                size="sm"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3"
            >
                <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="metamask" className="h-4 w-4" />
                Continue with Google
            </Button>
        </div>
    );
};

export default SocialLogin;