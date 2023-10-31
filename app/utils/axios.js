import axios from "axios";

import getBearerTokenFromCookies from "@/app/utils/getBearerTokenFromCookies";

const instance = axios.create({
	baseURL: `${process.env.host}/api/v2`,
	headers: {
		Authorization: "Bearer " + getBearerTokenFromCookies("bearer_token"),
	},
});

export default instance;