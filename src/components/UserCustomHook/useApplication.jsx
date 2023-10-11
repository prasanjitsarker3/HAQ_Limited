import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useApplication = () => {
   const {user}=useContext(AuthContext);
   const { data: applications = [], isLoading, refetch } = useQuery({ 
      queryKey: ['candidate', user?.email],
      queryFn: async () => {
         const res = await axios.get(`https://hqa-server-prasanjitsarker3.vercel.app/candidate/${user?.email}`);
         return res.data;
      }
   });
   console.log("Application:", applications);
   return [applications, isLoading, refetch];
};

export default useApplication;
