import { cookies } from "next/headers";

export default function getBearerTokenFromCookies() {
	const cookiesStore = cookies();
	const bearer_token = cookiesStore.get("bearer_token");

	return bearer_token || undefined;
}
