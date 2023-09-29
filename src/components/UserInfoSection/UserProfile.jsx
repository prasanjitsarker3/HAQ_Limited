import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useUserInfo from '../UserCustomHook/useUserInfo';

const UserProfile = () => {
    const {user}=useContext(AuthContext);
    const [usersInfo, isLoading, refetch]=useUserInfo();
    console.log("User Info", usersInfo)
    return (
        <div>
            <div>
                <img src={user?.photoURL} alt="" />
                <h1>{user?.displayName}</h1>
                <h2>{user?.email}</h2>
            </div>
        </div>
    );
};

export default UserProfile;