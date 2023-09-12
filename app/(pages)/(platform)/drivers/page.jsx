import Image from "next/image";
import Table from "@/app/(pages)/(platform)/drivers/_components/Table";

export default function Drivers() {
	return (
		<>
			<div className={"mt-6 mb-2 bg-[#F7F9FB] rounded-lg w-full px-4 py-2 flex items-center"}>
				<div className={"relative w-full"}>
					<Image className={"absolute left-1.5 top-1/2 -translate-y-1/2"} width={16} height={16} src={"/img/icons/search.svg"} alt={"Поиск"} />
					<input
						className={
							"w-full border border-black/10 focus:border-black/20 bg-white/80 rounded-lg text-sm px-4 py-1 pl-[26px] placeholder:text-black/20 text-black-100"
						}
						placeholder={"Поиск"}
					/>
				</div>
			</div>
			<Table />
		</>
	);
}