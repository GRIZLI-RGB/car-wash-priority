import Image from "next/image";
import clsx from "clsx";

export default function Button({ type, children, icon, clickHandler }) {
	return (
		<button
			onClick={clickHandler}
			className={clsx(
				"flex-middle gap-2 duration-300 hover:opacity-75  p-2 text-lg font-semibold text-center w-full rounded-lg",
				{
					"text-white bg-green--main": type === "success",
					"text-black-100 bg-black/5": type === "secondary",
				},
				"max-[430px]:text-[16px]"
			)}>
			{icon === "arrow-left" && (
				<Image
					width={20}
					height={20}
					src={`/img/icons/${icon}.svg`}
					alt={"Стрелка влево"}
				/>
			)}
			{children}
			{icon === "arrow-right" && (
				<Image
					width={20}
					height={20}
					src={`/img/icons/${icon}.svg`}
					alt={"Стрелка вправо"}
				/>
			)}
		</button>
	);
}
