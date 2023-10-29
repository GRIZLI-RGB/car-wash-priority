import axios from "axios";
import {redirect} from "next/navigation";

export async function sendAuthCode(data) {
	try {
		const res = await axios.post(`${process.env.host}/api/v2/send-auth-code`, data);

		if (res.status === 200) {
			return true;
		}
		console.error("Ошибка при отправке send-auth-code:", res.status);
		return false;
	} catch (error) {
		console.error("Ошибка при отправке send-auth-code:", error);
		return false;
	}
}

export async function verifyCode(data) {
	try {
		const res = await axios.post(`${process.env.host}/api/v2/login`, data);

		if (res.status === 200) {
			const tokenExpiryTime = new Date(res.data.data.expires_at).getTime();

			document.cookie = "bearer_token=" + res.data.data.bearer_token + "; path=/; samesite=lax; expires=" + new Date(tokenExpiryTime).toUTCString();

			return true;
		}
		console.error("Ошибка при авторизации:", res.status);
		return false;
	} catch (error) {
		console.error("Ошибка при авторизации:", error);
		return false;
	}
}