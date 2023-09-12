import clsx from "clsx";
import Image from "next/image";
import {useEffect, useState} from "react";
import Draggable from "react-draggable";

export default function Table({ head, content }) {
	const [dataSorted, setDataSorted] = useState("desc");

	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth)
	}, [window.innerWidth]);

	const getTableCell = (item, cell, index) => {
		return (
			<div
				key={index}
				className={clsx("flex items-center py-2 text-black-100", {
					"px-4": index !== 0,
					"gap-2": cell.type === "title",
					"gap-1": cell.type === "date",
					"gap-1.5": cell.type === "status",
				})}
				style={{
					flexBasis: `${100 / item.length}%`,
				}}>
				{cell.type === "title" && (
					<>
						<Image width={24} height={24} src={"/img/icons/pdf.svg"} alt={"Иконка PDF"} />
						<p>{cell.text}</p>
					</>
				)}
				{cell.type === "date" &&
					(cell.text === "Акт не подтвержден" ? (
						<p className={"text-black/40"}>{cell.text}</p>
					) : (
						<>
							<Image width={16} height={16} src={"/img/icons/calendar.svg"} alt={"Иконка календаря"} />
							<p>{cell.text}</p>
						</>
					))}
				{cell.type === "status" && (
					<>
						<div
							className={clsx("w-[6px] h-[6px] rounded-full", {
								"bg-green--main": cell.text === "Оплачен" || cell.text === "Принят",
								"bg-red--secondary": cell.text === "Не оплачен",
								"bg-[#59A8D4]": cell.text === "Ожидание",
							})}></div>
						<p
							className={clsx({
								"text-green--main": cell.text === "Оплачен" || cell.text === "Принят",
								"text-red--secondary": cell.text === "Не оплачен",
								"text-[#59A8D4]": cell.text === "Ожидание",
							})}>
							{cell.text}
						</p>
					</>
				)}
				{cell.type === "download" && (
					<Image className={"cursor-pointer mx-auto duration-300 hover:scale-125"} width={16} height={16} src={"/img/icons/download.svg"} alt={"Иконка загрузки"} />
				)}
			</div>
		);
	};

	if (windowWidth > 768) {
		return (
			<div>
				<div className={"flex w-full border-b border-[#cccccc]"}>
					{head.map(({ title, canBeSorted }, index) => (
						<div
							style={{
								flexBasis: `${100 / head.length}%`,
							}}
							className={clsx(`flex items-center gap-1 text-black/40 py-3`, {
								"px-4 border-l-black-low-opacity-gradient": index !== 0,
							})}
							key={index}>
							{canBeSorted && (
								<Image
									onClick={() => setDataSorted(dataSorted === "desc" ? "asc" : "desc")}
									className={clsx("duration-300 cursor-pointer", {
										"[transform:rotateX(180deg)]": dataSorted === "asc",
									})}
									src={"/img/icons/arrow-sorting.svg"}
									alt={"Сортировать"}
									width={16}
									height={16}
								/>
							)}
							<p>{title}</p>
						</div>
					))}
				</div>
				{content.map((item, index) => (
					<div key={index} className={"flex w-full text-black-100"}>
						{item.map((cell, index) => getTableCell(item, cell, index))}
					</div>
				))}
			</div>
		);
	} else {
		return (
			<Draggable axis={"x"}>
				<div className={head.length <= 4 ? "w-[600px]" : "w-[900px]"}>
					<div className={"flex w-full border-b border-[#cccccc]"}>
						{head.map(({ title, canBeSorted }, index) => (
							<div
								style={{
									flexBasis: `${100 / head.length}%`,
								}}
								className={clsx(`flex items-center gap-1 text-black/40 py-3`, {
									"px-4 border-l-black-low-opacity-gradient": index !== 0,
								})}
								key={index}>
								{canBeSorted && (
									<Image
										onClick={() => setDataSorted(dataSorted === "desc" ? "asc" : "desc")}
										className={clsx("duration-300 cursor-pointer", {
											"[transform:rotateX(180deg)]": dataSorted === "asc",
										})}
										src={"/img/icons/arrow-sorting.svg"}
										alt={"Сортировать"}
										width={16}
										height={16}
									/>
								)}
								<p>{title}</p>
							</div>
						))}
					</div>
					{content.map((item, index) => (
						<div key={index} className={"flex w-full text-black-100"}>
							{item.map((cell, index) => getTableCell(item, cell, index))}
						</div>
					))}
				</div>
			</Draggable>
		);
	}
}
