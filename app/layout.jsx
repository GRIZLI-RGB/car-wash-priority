import "./_styles/index.scss";

import { Inter } from "next/font/google";

import { Toaster } from "react-hot-toast";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "Car Wash Priority",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru" className={inter.className}>
			<body>
				{children}
				<Toaster
					position={"bottom-right"}
					toastOptions={{
						className: "text-sm text-black-100 border border-black/10 z-50",
					}}
				/>
			</body>
		</html>
	);
}
