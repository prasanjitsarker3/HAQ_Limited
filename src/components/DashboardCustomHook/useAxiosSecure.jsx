import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const useAxiosSecure = () => {
  const { userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("Access-Token");
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await userLogOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [userLogOut, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;
