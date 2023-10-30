import axios from "axios";
import {axiosInstance} from "@/app/utils/axios-instance";
import {readCookie} from "@/app/utils/cookie";

export async function reg(data) {
	const res = await axios.post(`${process.env.host}/api/v2/organizations/registration/create`, data);

	console.log("res", res);

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
			const tokenExpiryTime = new Date(res.data.auth.expires_at).getTime();
			document.cookie = "bearer_token=" + res.data.auth.bearer_token + "; path=/; samesite=lax; expires=" + new Date(tokenExpiryTime).toUTCString();

			return true;
		} else {
			console.log("Неудачная проверка номера:", res.status);
			return false;
		}
	} catch (error) {
		console.log("Неудачная проверка номера:", error);
		return false;
	}
}

export async function setData(data) {
	const res = await axiosInstance.post(`/api/v2/organizations/${readCookie("organization_id")}/registration/set-data`, data);

	try {
		if (res.status === 200) {
			return true;
		} else {
			console.log("Неудачное заполнение данных:", res.status);
			return false;
		}
	} catch (error) {
		console.log("Неудачное заполнение данных:", error);
		return false;
	}
}

export async function reqPayData(data) {
	const res = await axiosInstance.post(`/api/v2/organizations/${readCookie("organization_id")}/registration/set-pay-data`, data);

	try {
		if (res.status === 200) {
			return true;
		} else {
			console.log("Неудачное заполнение данных:", res.status);
			return false;
		}
	} catch (error) {
		console.log("Неудачное заполнение данных:", error);
		return false;
	}
}

export async function reqContactData(data) {
	const res = await axiosInstance.post(`/api/v2/organizations/${readCookie("organization_id")}/registration/set-contact-data`, data);

	try {
		if (res.status === 200) {
			return true;
		} else {
			console.log("Неудачное заполнение данных:", res.status);
			return false;
		}
	} catch (error) {
		console.log("Неудачное заполнение данных:", error);
		return false;
	}
}