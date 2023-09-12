import clsx from "clsx";
import Image from "next/image";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";

export default function Table() {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	if (windowWidth > 768) {
		return (
			<div>
				<div className={"flex w-full border-b border-[#cccccc]"}>
					{["Номер операции", "Источник", "Тип операции", "Сумма", "Место посещения", "Дата и время"].map(
						(heading, index) => (
							<h6
								className={clsx("basis-1/6 text-black/40 py-3 lg:flex-middle lg:text-center", {
									"px-4 border-l-black-low-opacity-gradient": index !== 0,
								})}
								key={index}>
								{heading}
							</h6>
						),
					)}
				</div>
				<div className={"border-b border-black/5 flex w-full text-black-100"}>
					<div className={"flex items-center gap-1 basis-1/6 py-3"}>10224576</div>
					<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>+7 (920) 471 - 16 - 66</div>
					<div className={"basis-1/6 px-4 lg:px-3 py-3 text-red--secondary flex items-center gap-[5px]"}>
						<div className="w-[6px] h-[6px] bg-red--secondary rounded-full"></div>
						<p>Списание</p>
					</div>
					<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
						140 <span className={"font-bold"}>₽</span>
					</div>
					<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3 text-purple--secondary"}>
						Корочанская улица, 237
					</div>
					<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
						<Image width={16} height={16} src={"/img/icons/calendar.svg"} alt={"Иконка календаря"} />
						<p>04.04.2023 16:35</p>
					</div>
				</div>
				<div className={"border-b border-black/5 flex w-full text-black-100"}>
					<div className={"flex items-center gap-1 basis-1/6 py-3"}>10224576</div>
					<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>+7 (920) 471 - 16 - 66</div>
					<div className={"basis-1/6 px-4 lg:px-3 py-3 text-green--main flex items-center gap-[5px]"}>
						<div className="w-[6px] h-[6px] bg-green--main rounded-full"></div>
						<p>Пополнение</p>
					</div>
					<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
						140 <span className={"font-bold"}>₽</span>
					</div>
					<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3 text-purple--secondary"}>
						Корочанская улица, 237
					</div>
					<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
						<Image width={16} height={16} src={"/img/icons/calendar.svg"} alt={"Иконка календаря"} />
						<p>04.04.2023 16:35</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<Draggable axis={"x"}>
				<div className={"w-[1000px]"}>
					<div className={"flex w-full border-b border-[#cccccc]"}>
						{["Номер операции", "Источник", "Тип операции", "Сумма", "Место посещения", "Дата и время"].map(
							(heading, index) => (
								<h6
									className={clsx("basis-1/6 text-black/40 py-3 lg:flex-middle lg:text-center", {
										"px-4 border-l-black-low-opacity-gradient": index !== 0,
									})}
									key={index}>
									{heading}
								</h6>
							),
						)}
					</div>
					<div className={"border-b border-black/5 flex w-full text-black-100"}>
						<div className={"flex items-center gap-1 basis-1/6 py-3"}>10224576</div>
						<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
							+7 (920) 471 - 16 - 66
						</div>
						<div className={"basis-1/6 px-4 lg:px-3 py-3 text-red--secondary flex items-center gap-[5px]"}>
							<div className="w-[6px] h-[6px] bg-red--secondary rounded-full"></div>
							<p>Списание</p>
						</div>
						<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
							140 <span className={"font-bold"}>₽</span>
						</div>
						<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3 text-purple--secondary"}>
							Корочанская улица, 237
						</div>
						<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
							<Image width={16} height={16} src={"/img/icons/calendar.svg"} alt={"Иконка календаря"} />
							<p>04.04.2023 16:35</p>
						</div>
					</div>
					<div className={"border-b border-black/5 flex w-full text-black-100"}>
						<div className={"flex items-center gap-1 basis-1/6 py-3"}>10224576</div>
						<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
							+7 (920) 471 - 16 - 66
						</div>
						<div className={"basis-1/6 px-4 lg:px-3 py-3 text-green--main flex items-center gap-[5px]"}>
							<div className="w-[6px] h-[6px] bg-green--main rounded-full"></div>
							<p>Пополнение</p>
						</div>
						<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
							140 <span className={"font-bold"}>₽</span>
						</div>
						<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3 text-purple--secondary"}>
							Корочанская улица, 237
						</div>
						<div className={"flex items-center gap-1 basis-1/6 px-4 lg:px-3 py-3"}>
							<Image width={16} height={16} src={"/img/icons/calendar.svg"} alt={"Иконка календаря"} />
							<p>04.04.2023 16:35</p>
						</div>
					</div>
				</div>
			</Draggable>
		);
	}
}
