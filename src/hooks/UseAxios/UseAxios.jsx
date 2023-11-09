import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosUrl = axios.create({
  baseURL: "https://hunger-relief-server.vercel.app",
  //   baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseAxios = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosUrl.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          signOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, [signOutUser, navigate]);
  return axiosUrl;
};

export default UseAxios;
