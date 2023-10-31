"use client";

import { useEffect } from "react";

export default function getBearerTokenFromCookies() {
    let matches = []
	useEffect(() => {
		matches = document.cookie.match(
			new RegExp("(?:^|; )" + "bearer_token".replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"),
		);
	}, []);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
