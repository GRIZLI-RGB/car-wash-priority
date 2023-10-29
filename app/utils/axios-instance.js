import axios from "axios";
import {readCookie} from "@/app/utils/cookie";

const axiosInstance = axios.create({baseUrl: process.env.host});
axiosInstance.interceptors.request.use(config => {
	config.headers.Authorization = readCookie("bearer_token");
	return config;
});

export {axiosInstance};