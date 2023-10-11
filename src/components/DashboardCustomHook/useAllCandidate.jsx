import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useAllCandidate = () => {

    const { data: allCandidate = [], isLoading, refetch } = useQuery(["candidate"], {
        queryFn: async () => {
            const res = await axios.get("https://hqa-server-prasanjitsarker3.vercel.app/candidate");
            return res.data;
        }
    });
    console.log("All Candidate", allCandidate)
    return [allCandidate, isLoading, refetch];
};

export default useAllCandidate;