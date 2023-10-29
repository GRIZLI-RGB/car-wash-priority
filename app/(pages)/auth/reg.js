import axios from "axios";

export async function reg(data) {
	const res = await axios.post(`${process.env.host}/api/v2/organizations/registration/create`, data);

	console.log("res", res)

	try {
		if (res.status === 200) {
			document.cookie = "organization_id=" + res.data.organization_id;
			document.cookie = "phone=" + data.phone;
			return true;
		}
		console.log("Произошла ошибка в запросе на авторизацию:", res.status);
		return false;

	} catch (error) {
		console.log("Произошла ошибка в запросе на авторизацию:", error);
	}
}

export async function verifyTel(data) {
	const res = await axios.post(`${process.env.host}/api/v2/organizations/registration/auth`, data);

	try {
		if (res.status === 200) {
			const tokenExpiryTime = new Date(res.data.data.expires_at).getTime();

			document.cookie = "bearer_token=" + res.data.data.bearer_token + "; path=/; samesite=lax; expires=" + new Date(tokenExpiryTime).toUTCString();

			return true;
		}
		console.log("Неудачная проверка номера:", res.status);
	} catch(error) {
		console.log("Неудачная проверка номера:", error);
	}
}