import Image from "next/image";

export function Operation({ type }) {
	return (
		<div className={"flex gap-2 p-1"}>
			<div className={"flex flex-col justify-between items-center"}>
				<Image
					width={24}
					height={24}
					src={`/img/icons/${type}.svg`}
					alt={type === "refill" ? "Пополнение" : "Списание"}
				/>
				<div className={"bg-black/10 w-[1px] h-[14px] mb-0.5"} />
			</div>
			<div>
				<p className={"text-sm text-black-100"}>
					- 60 <span className={"font-bold"}>₽</span>
				</p>
				<p className={"text-black/40"}>+7 (920) 471 - 16 -66</p>
				<p className={"text-black/20"}>12 минут назад</p>
			</div>
		</div>
	);
}
