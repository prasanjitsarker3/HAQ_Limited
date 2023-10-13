import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    // const [isAdmin, setIsAdmin] = useState(false);
    // const [isLoading, setLoading] = useState(true);
    // const [axiosSecure]=useAxiosSecure()

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axiosSecure.get(`/users/admin/${email}`);
    //             const data = await response.json();
    //             setIsAdmin(data.isAdmin);
    //             setLoading(false);
    //         } catch (error) {
    //             console.log("Error fetching admin status:", error);
    //         }
    //     };

    //     if (email) {
    //         fetchData();
    //     }
    // }, [email]);
    // console.log(isAdmin)
    // return [isAdmin, isLoading];
    const { user,loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { data: isAdmin, isLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            return res.data.admin;
        }
    })
    return [isAdmin, isLoading]
};

export default useAdmin;
