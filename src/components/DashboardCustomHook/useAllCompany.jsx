import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useAllCompany = () => {
    const { data: allCompany = [], isLoading, refetch } = useQuery(["company"], {
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/company");
            return res.data;
        }
    });

    
    return [allCompany, isLoading, refetch];
};

export default useAllCompany;