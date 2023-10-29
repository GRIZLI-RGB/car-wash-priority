"use client";

import Image from "next/image";

export default function Item({phone, balance, races, deleteDriver, editDriver}) {
	return (
		<div className={"flex w-full text-black-100"}>
			<div className="flex basis-1/4 items-center px-4 lg:px-1 py-2">{phone}</div>
			<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">
				<div
					className={
						"text-green--main text-sm md:text-xs p-1 bg-white border border-black/10 rounded-lg w-full flex-middle"
					}>
					{balance}
				</div>
			</div>
			<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">{races}</div>
			<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2 justify-evenly">
				<Image
					className={"cursor-pointer duration-300 hover:scale-125"}
					width={20}
					height={20}
					src={"/img/icons/trash-can.svg"}
					alt={"Удалить"}
					onClick={deleteDriver}
				/>
				<Image
					className={"cursor-pointer duration-300 hover:scale-125"}
					width={20}
					height={20}
					src={"/img/icons/pencil.svg"}
					alt={"Редактировать"}
					onClick={editDriver}
				/>
			</div>
		</div>
	)
}