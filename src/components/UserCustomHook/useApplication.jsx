import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from '../DashboardCustomHook/useAxiosSecure';

const useApplication = () => {
   const {user}=useContext(AuthContext);
   const [axiosSecure]=useAxiosSecure()
   const { data: applications = [], isLoading, refetch } = useQuery({ 
      queryKey: ['candidate', user?.email],
      queryFn: async () => {
         //last added get
         const res = await axiosSecure.get(`/candidate/${user?.email}`);
         return res.data;
      }
   });
   return [applications, isLoading, refetch];
};

export default useApplication;
