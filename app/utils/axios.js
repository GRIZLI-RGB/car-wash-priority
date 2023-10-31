import axios from "axios";

import useBearerTokenFromCookies from "@/app/hooks/useBearerTokenFromCookies";

const instance = axios.create({
	baseURL: `${process.env.host}/api/v2`,
	headers: {
		Authorization: "Bearer " + useBearerTokenFromCookies(),
	},
});

export default instance;
