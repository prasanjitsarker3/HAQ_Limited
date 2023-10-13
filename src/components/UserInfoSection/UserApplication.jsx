import React from 'react';
import useApplication from '../UserCustomHook/useApplication';
import ApplicationTable from './ApplicationTable';
import Loading from '../CustomLoading/Loading';

const UserApplication = () => {
    const [applications, isLoading, refetch]=useApplication();
    console.log("Candidate Application Info", applications)
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <ApplicationTable applications={applications} refetch={refetch}></ApplicationTable>
        </div>
    );
};

export default UserApplication;