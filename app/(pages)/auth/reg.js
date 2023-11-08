import axios from "axios";
import {axiosInstance} from "@/app/utils/axios-instance";
import {readCookie} from "@/app/utils/cookie";

export async function reg(data) {
	try {
		const res = await axios.post(`${process.env.host}/api/v2/organizations/registration/create`, data);

		if (res.status === 200) {
			document.cookie = "organization_id=" + res.data.organization_id;
			document.cookie = "phone=" + data.phone;
			return true;
		}
		console.log("Произошла ошибка в запросе на авторизацию:", res.status);
		return false;

	} catch (error) {
		console.log("Произошла ошибка в запросе на авторизацию:", error);
		return error.response.data.errors;
	}
}

export async function verifyTel(data) {
	try {
		const res = await axios.post(`${process.env.host}/api/v2/organizations/registration/auth`, data);

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
		return error.response.data.errors;
	}
}

export async function setData(data) {
	try {
		const res = await axiosInstance.post(`/api/v2/organizations/${readCookie("organization_id")}/registration/set-data`, data);

		if (res.status === 200) {
			return true;
		} else {
			console.log("Неудачное заполнение данных:", res.status);
			return false;
		}
	} catch (error) {
		console.log("Неудачное заполнение данных:", error);
		return error.response.data.errors;
	}
}

export async function reqPayData(data) {
	try {
		const res = await axiosInstance.post(`/api/v2/organizations/${readCookie("organization_id")}/registration/set-pay-data`, data);

		if (res.status === 200) {
			return true;
		} else {
			console.log("Неудачное заполнение данных:", res.status);
			return false;
		}
	} catch (error) {
		console.log("Неудачное заполнение данных:", error);
		return error.response.data.errors;
	}
}

export async function reqContactData(data) {
	try {
		const res = await axiosInstance.post(`/api/v2/organizations/${readCookie("organization_id")}/registration/set-contact-data`, data);

		if (res.status === 200) {
			return true;
		} else {
			console.log("Неудачное заполнение данных:", res.status);
			return false;
		}
	} catch (error) {
		console.log("Неудачное заполнение данных:", error);
		return error.response.data.errors;
	}
}