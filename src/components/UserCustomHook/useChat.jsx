import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from '../DashboardCustomHook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useChat = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { data: chat = [], isLoading, refetch } = useQuery({
        queryKey: ['chat', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/chat/${user?.email}`);
            return res.data;
        }
    });
    return [chat, isLoading, refetch];
};

export default useChat;