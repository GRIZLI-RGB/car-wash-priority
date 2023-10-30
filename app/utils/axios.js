import axios from "axios";

import readCookie from "@/app/utils/readCookie";

const instance = axios.create({
	baseURL: process.env.host,
	headers: {
		Authorization: "Bearer " + readCookie("bearer_token"),
	},
});

export default instance;