import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
 
const useAllUser = () => {
    const { data: allUser = [], isLoading, refetch } = useQuery(["usersAll"], {
        queryFn: async () => {
            const res = await axios.get("https://hqa-server-prasanjitsarker3.vercel.app/usersAll");
            return res.data;
        }
    });

    console.log("All User", allUser);
    return [allUser, isLoading, refetch];
};

export default useAllUser;
