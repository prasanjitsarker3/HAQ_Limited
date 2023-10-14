import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const useUserInfo = () => {
    const {user}=useContext(AuthContext)
   const { data: usersInfo = [], isLoading, refetch } = useQuery({
      queryKey: ['candidate', user?.email],
      queryFn: async () => {
         const res = await axios.get(`https://hqa-server.vercel.app/candidate/${user?.email}`);
         return res.data;
      }
   });
//    console.log("User Info", usersInfo);
   return [usersInfo, isLoading, refetch];
};

export default useUserInfo;