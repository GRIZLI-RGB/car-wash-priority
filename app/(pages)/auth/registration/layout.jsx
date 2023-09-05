import Footer from "@/app/(pages)/auth/_components/Footer";
import Image from "next/image";

export default function AuthRegistrationLayout({ children }) {
	return (
		<div
			className={
				"relative min-h-screen w-screen flex items-center justify-center p-6 pb-12 max-[420px]:px-4 max-[800px]:pt-20 max-[800px]:pb-40"
			}>
			<Image
				className={"absolute top-10 left-10 max-[980px]:max-w-[42px] max-[980px]:top-4 max-[980px]:left-4"}
				width={56}
				height={70}
				src={"/img/logo.svg"}
				alt={"Логотип"}
			/>
			<div
				className={
					"max-w-[676px] rounded-2xl bg-white px-36 py-14 flex flex-col items-center gap-7 max-[670px]:p-12 max-[420px]:p-6 max-[670px]:gap-4 "
				}>
				{children}
			</div>
			<Footer textColor={"black"} />
		</div>
	);
}
