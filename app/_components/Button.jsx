import Image from "next/image";
import clsx from "clsx";

export default function Button({type, children, icon, clickHandler, disabled = false}) {
	console.log("disabled", disabled)

	switch (type) {
		case "medium-gray": {
			return (
				<button
					onClick={clickHandler}
					className={
						"duration-500 hover:opacity-75 rounded-lg px-2 py-1 text-sm text-black-100 bg-black/5"
					}>
					{children}
					disabled={disabled}
				</button>
			);
		}
		case "medium-black": {
			return (
				<button
					onClick={clickHandler}
					className={
						"duration-500 hover:opacity-75 rounded-lg px-2 py-1 text-sm text-white bg-black-100"
					}>
					{children}
					disabled={disabled}
				</button>
			);
		}
		case "success-secondary":
			return (
				<button
					onClick={clickHandler}
					className={
						"hover:bg-green--main hover:text-white duration-500 px-2 py-1 text-sm text-center w-full rounded-lg text-green--main border border-green--main"
					}>
					{children}
					disabled={disabled}
				</button>
			);
		case "danger-secondary":
			return (
				<button
					onClick={clickHandler}
					className={
						"hover:bg-red--secondary hover:text-white duration-500 px-2 py-[13px] text-center w-full rounded-lg text-red--secondary border border-red--secondary"
					}>
					{children}
					disabled={disabled}
				</button>
			);
		default:
			return (
				<button
					onClick={clickHandler}
					className={clsx(
						"flex-middle gap-2 duration-300 hover:opacity-75  p-2 text-lg font-semibold text-center w-full rounded-lg",
						{
							"text-white bg-green--main": type === "success",
							"text-white bg-red--secondary": type === "danger",
							"text-black-100 bg-black/5": type === "secondary",
						},
						"max-[430px]:text-[16px]",
					)}
					disabled={disabled}
				>
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
}
