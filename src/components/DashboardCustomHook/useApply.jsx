import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useApply = () => {
    const { data: applyData = [], isLoading, refetch } = useQuery(["apply"], {
        queryFn: async () => {
            const res = await axios.get("https://hqa-server.vercel.app/apply");
            return res.data;
        }
    });
    return [applyData, isLoading, refetch];
};

export default useApply;