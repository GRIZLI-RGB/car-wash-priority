import {axiosInstance} from "@/app/utils/axios-instance";
import {readCookie} from "@/app/utils/cookie";

export async function addDrivers(data) {
	const res = await axiosInstance.post(`/api/v2/organizations/${readCookie("organization_id")}/users`, data);

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

export async function getDrivers() {
	const res = await axiosInstance.get(`/api/v2/organizations/${readCookie("organization_id")}/users?role_id=0`);

	try {
		if (res.status === 200) {
			return res.data.data;
		} else {
			console.log("Неудачное заполнение данных:", res.status);
			return [];
		}
	} catch (error) {
		console.log("Неудачное заполнение данных:", error);
		return [];
	}

}