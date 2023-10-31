import axios from "@/app/utils/axios";

export async function login(data) {
	const response = await axios.post("/login", data);

	if (response.status === 200) {
		const tokenExpiresTime = new Date(response.data.data.expires_at).getTime();

		document.cookie =
			"bearer_token=" +
			response.data.data.bearer_token +
			"; path=/; samesite=lax; expires=" +
			new Date(tokenExpiresTime).toUTCString();

		return true;
	}

	return false;
}
