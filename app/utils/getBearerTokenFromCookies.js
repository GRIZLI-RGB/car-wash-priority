"use client";

import { useEffect } from "react";

export default function getBearerTokenFromCookies(name) {
	useEffect(() => {
		const matches = document.cookie.match(
			new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"),
		);
		return matches ? decodeURIComponent(matches[1]) : undefined;
	});
}
