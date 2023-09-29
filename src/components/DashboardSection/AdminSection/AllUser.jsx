import React from 'react';
import useAllUser from '../../DashboardCustomHook/useAllUser';

const AllUser = () => {
    const [allUser, isLoading, refetch]=useAllUser();
    return (
        <div>
            <h1>All User:{allUser.length}</h1>
        </div>
    );
};

export default AllUser;