import "./_styles/index.scss";

import { Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "Car Wash Priority" ,
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru" className={inter.className}>
			<body>{children}</body>
		</html>
	);
}