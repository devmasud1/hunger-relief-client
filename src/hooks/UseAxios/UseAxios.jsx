import axios from "axios";

const axiosUrl = axios.create({
    baseURL: 'https://hunger-relief-server.vercel.app'
})

const UseAxios = () => {
    return axiosUrl;
}
export default UseAxios;