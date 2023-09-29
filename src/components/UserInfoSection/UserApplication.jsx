import React from 'react';
import useApplication from '../UserCustomHook/useApplication';
import ApplicationTable from './ApplicationTable';

const UserApplication = () => {
    const [applications, isLoading, refetch]=useApplication();
    console.log("Candidate Application Info", applications)
    return (
        <div>
            <ApplicationTable applications={applications}></ApplicationTable>
        </div>
    );
};

export default UserApplication;