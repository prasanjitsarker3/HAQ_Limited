import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useCompany = () => {
    const { user } = useContext(AuthContext);
    const { data: company = [], isLoading, refetch } = useQuery({
        queryKey: ['company', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://hqa-server-prasanjitsarker3.vercel.app/company/${user?.email}`);
            console.log("Company Data", res.data)
            return res.data;
        }
    });
    return [company, isLoading, refetch];
};

export default useCompany;