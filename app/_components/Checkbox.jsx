"use client";

import { useState } from "react";

import Image from "next/image";

export default function Checkbox({ isCurrent, setIsCurrent, title, opinion }) {
	const [isCurrentForTest, setIsCurrentForTest] = useState(false);

	return (
		<div className={"flex items-center gap-6 md:gap-3.5"}>
			{isCurrentForTest ? (
				<div
					onClick={() => setIsCurrentForTest(false)}
					className={
						"flex-middle cursor-pointer bg-black-100 border border-black-100 min-w-[18px] min-h-[18px] rounded"
					}>
					<Image
						width={8}
						height={6}
						src={"/img/icons/checkmark-for-checkbox.svg"}
						alt={"Галочка"}
					/>
				</div>
			) : (
				<div
					onClick={() => setIsCurrentForTest(true)}
					className={
						"cursor-pointer bg-[#F7F9FB] border border-black/20 min-w-[18px] min-h-[18px] rounded"
					}
				/>
			)}
			<div>
				<p className={"text-black-100"}>{title}</p>
				<p className={"text-black/40"}>{opinion}</p>
			</div>
		</div>
	);
}
