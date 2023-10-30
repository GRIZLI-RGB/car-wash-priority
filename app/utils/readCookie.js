export default function readCookie(name) {
	const matches = document.cookie.match(
		new RegExp(
			"(?:^|; )" +
				name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
				"=([^;]*)",
		),
	);
    console.log({'operation': 'readCookie', matches, name})
	return matches ? decodeURIComponent(matches[1]) : undefined;
}
