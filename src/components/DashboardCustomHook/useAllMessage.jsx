import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useAllMessage = () => {
    const { data: allMessage = [], isLoading, refetch } = useQuery(["message"], {
        queryFn: async () => {
            const res = await axios.get("http://localhost:5000/message");
            return res.data;
        }
    });


    return [allMessage, isLoading, refetch];
};

export default useAllMessage;