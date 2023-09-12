"use client";

import { useEffect, useState } from "react";
import { CartesianAxis, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import Image from "next/image";

export default function Home() {
	const [isHaveContent, setIsHaveContent] = useState(false);

	const [dataLineChart, setDataLineChart] = useState([
		{
			date: "14 апреля",
			number_wash: 24,
		},
		{
			date: "15 апреля",
			number_wash: 20,
		},
		{
			date: "16 апреля",
			number_wash: 187,
		},
		{
			date: "17 апреля",
			number_wash: 6,
		},
		{
			date: "18 апреля",
			number_wash: 50,
		},
		{
			date: "19 апреля",
			number_wash: 12,
		},
		{
			date: "20 апреля",
			number_wash: 192,
		},
	]);

	useEffect(() => {
		setIsHaveContent(window.location.href.split("#")[1] === "fill");
	}, []);

	return (
		<section>
			<div className="flex items-stretch gap-7 lg:gap-4 h-full flex-wrap">
				<div className={"p-6 md:p-3.5 rounded-2xl bg-[#F7F9FB] min-h-full md:w-full"}>
					<div className="flex items-center justify-between">
						<h6 className={"text-black-100 font-semibold text-lg"}>Аналитика счета</h6>
						<div className={"px-2 py-1 rounded-lg bg-black-100 text-sm text-white"}>Апрель 2023</div>
					</div>
					<div className={"flex items-center mt-4 gap-7 md:gap-4 text-black-100 text-sm"}>
						<div className={"flex flex-col"}>
							<p>Израсходовано</p>
							<div className={"text-center rounded-lg bg-black/5 mt-1 w-[160px] relative"}>
								{isHaveContent && (
									<div
										className={
											"absolute left-0 top-0 bottom-0 right-0 bg-purple--secondary w-20 rounded-l-lg"
										}
									/>
								)}
								<p className={"relative text-black-100 text-lg font-semibold z-10"}>
									{isHaveContent ? "50%" : "0%"}
								</p>
							</div>
						</div>
						<div className={"w-[1px] h-[52px] bg-black/10"} />
						<div>
							<p>Закончатся</p>
							<p className={"text-lg font-semibold mt-1"}>Нет данных</p>
						</div>
					</div>
				</div>
				<div className={"p-6 rounded-2xl bg-[#E3F5FF] min-h-full min-w-[230px] md:w-full"}>
					<h6 className={"text-sm font-semibold text-black-100 mb-2"}>Всего моек</h6>
					<div className={"flex items-center justify-between"}>
						<p className={"text-2xl font-semibold text-black-100"}>0</p>
						{isHaveContent && (
							<div className="flex items-center gap-1">
								<p className={"text-black-100"}>+11.01%</p>
								<Image
									width={16}
									height={16}
									alt={"Возрастание или убывание графика"}
									src={"/img/icons/arrow-rise.svg"}
								/>
							</div>
						)}
					</div>
				</div>
				<div className={"p-6 rounded-2xl bg-[#E5ECF6] min-h-full min-w-[230px] md:w-full"}>
					<h6 className={"text-sm font-semibold text-black-100 mb-2"}>Потрачено средств</h6>
					<div className={"flex items-center justify-between"}>
						<p className={"text-2xl font-semibold text-black-100"}>0</p>
						{isHaveContent && (
							<div className="flex items-center gap-1">
								<p className={"text-black-100"}>+11.01%</p>
								<Image
									width={16}
									height={16}
									alt={"Возрастание или убывание графика"}
									src={"/img/icons/arrow-rise.svg"}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className={"mt-11 px-6 md:px-3.5 py-4 bg-[#F7F9FB] rounded-2xl relative"}>
				<h6 className={"mb-5 font-semibold text-sm text-black-100"}>Статистика моек</h6>
				{/* TODO: над графиком еще поработать (адаптив + внешний вид с тултипами + вверху штука с выбором даты) */}
				<ResponsiveContainer width="100%" height={260}>
					<LineChart width={"100%"} height={"100%"} data={dataLineChart}>
						<CartesianGrid vertical={false} stroke={"#000"} strokeOpacity={0.05} />
						{isHaveContent && <Tooltip />}
						<XAxis dataKey="date" padding={{ left: 35, right: 35 }} />
						<YAxis />
						<Line
							activeDot={{
								width: "30px",
								fill: "#A8C5DA",
								strokeWidth: 3,
								stroke: "#ffffff",
								r: 5,
							}}
							dot={false}
							type={"monotone"}
							dataKey="number_wash"
							stroke="#26AD60"
							strokeWidth={isHaveContent ? 3 : 0}
						/>
					</LineChart>
				</ResponsiveContainer>
				{!isHaveContent && (
					<div
						className={
							"absolute top-0 left-0 right-0 bottom-0 flex-middle z-10 text-black/20 font-semibold text-5xl"
						}>
						Нет данных для отображения
					</div>
				)}
			</div>
		</section>
	);
}
