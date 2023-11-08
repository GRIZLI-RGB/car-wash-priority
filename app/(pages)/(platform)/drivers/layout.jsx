"use client";

import {useEffect, useState} from "react";
import ZeroContent from "@/app/(pages)/(platform)/_components/ZeroContent";
import Image from "next/image";
import ModalWindow from "@/app/_components/ModalWindow";
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";
import randomstring from "randomstring";
import toast from "react-hot-toast";
import Table from "@/app/(pages)/(platform)/drivers/_components/Table";
import driversData from "@/app/(pages)/(platform)/drivers/_components/drivers";
import {addDrivers, getDrivers} from "@/app/(pages)/(platform)/drivers/drivers";

export default function DriversLayout({children}) {
	const [isHaveContent, setIsHaveContent] = useState(false);

	const [popups, setPopups] = useState({
		addDriver: false,
		editDriver: false,
		deleteDriver: false,
	});

	const [popupNewDriverData, setPopupNewDriverData] = useState({
		phone: "",
		password: "",
		role: 0,
	});
	const [drivers, setDrivers] = useState([]);

	useEffect(() => {
		setIsHaveContent(window.location.href.split("#")[1] === "fill");
		setPopupNewDriverData({...popupNewDriverData, password: randomstring.generate(9)});

		async function fetchData() {
			const drivers = await getDrivers();

			setDrivers(drivers);
		}

		fetchData();
	}, []);

	const handleAddDrivers = async () => {
		const status = await addDrivers(popupNewDriverData);
		const drivers = await getDrivers();

		setDrivers(drivers);

		setPopups({...popups, addDriver: false});
	};

	return (
		<>
			<section className={"h-full"}>
				<div>
					<div className={"rounded-2xl bg-[#F7F9FB] p-6 text-black-100"}>
						<h6 className={"text-lg font-semibold mb-4"}>Автоматическое пополнение</h6>
						<div className={"flex justify-between gap-4 md:flex-wrap"}>
							<div>
								<p className={"mb-1 text-sm"}>Суточный баланс</p>
								<input
									className={
										"max-w-[140px] px-4 py-2 rounded-lg bg-white border border-black/10 font-semibold text-lg"
									}
									type={"number"}
								/>
							</div>
							<div className={"flex gap-1 items-start p-4 bg-[rgba(229,236,246,0.50)] rounded-lg"}>
								<Image width={16} height={16} src={"/img/icons/warning.svg"} alt={"Предупреждение"} />
								<div>
									<p>Правила пополнения баланса водителей</p>
									<p className={"text-black/40"}>
										Средства пополняются один раз в сутки в 00:01 по Московскому времени.{" "}
										<span className={"text-purple--secondary cursor-pointer"}>
											Подробные правила
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div
						onClick={() => setPopups({...popups, addDriver: true})}
						className={
							"flex-middle gap-2 p-4 rounded-2xl border border-dashed border-green--main bg-[rgba(38,173,96,0.10)] cursor-pointer mt-4 duration-300 hover:bg-[rgba(38,173,96,0.2)]"
						}>
						<Image width={30} height={30} src={"/img/icons/plus.svg"} alt={"Добавление водителя"} />
						<p className={"font-semibold text-sm text-green--main"}>Добавить водителя</p>
					</div>
				</div>
				<Table drivers={drivers} />
				{isHaveContent ? (
					children
				) : (
					<div className={"h-full flex-middle"}>
						<ZeroContent text={"Тут будет отображаться список водителей и баланс их счетов"} />
					</div>
				)}
			</section>
			<ModalWindow
				trigger={popups.addDriver}
				setTrigger={arg => setPopups({...popups, addDriver: arg})}
				title={"Добавить водителя"}>
				<div className={"flex-middle flex-col gap-3"}>
					<span>
						Укажите номер телефона водителя, он необходим для доступа в приложение. Пароль сгенерирован
						автоматически.
					</span>
					<span>Передайте водителю данные для доступа.</span>
				</div>
				<Input
					label={"Номер телефона"}
					value={popupNewDriverData.phone}
					setValue={text => setPopupNewDriverData({...popupNewDriverData, phone: text.replace(/[\s-()+]/g, '')})}
					placeholder={"+7 (___) ___-__-__"}
					mask={"+7 (999) 999-99-99"}
					type={"mask-input"}
					getOnlyNumber
				/>
				<div className={"flex items-center justify-between gap-5 w-full"}>
					<div>
						<div>
							<Input
								label={"Пароль"}
								disabled
								value={popupNewDriverData.password}
								setValue={arg => setPopupNewDriverData({...popupNewDriverData, password: arg})}
							/>
						</div>
						<p
							className={"cursor-pointer mt-1 text-sm text-purple--main"}
							onClick={() =>
								setPopupNewDriverData({...popupNewDriverData, password: randomstring.generate(9)})
							}>
							Сгенерировать новый
						</p>
					</div>
					<div
						className={"flex-middle gap-1 cursor-pointer duration-300 hover:opacity-75"}
						onClick={() => {
							navigator.clipboard.writeText(popupNewDriverData.password).then(function() {
								toast.success("Пароль скопирован в буфер обмена");
							});
						}}>
						<Image width={20} height={20} src={"/img/icons/copy.svg"} alt={"Копировать"} />
						<p className={"text-sm text-black/40"}>Скопировать</p>
					</div>
				</div>
				<div className={"w-[388px] md:w-full"}>
					<Button type={"success"} clickHandler={handleAddDrivers}>
						Добавить
					</Button>
				</div>
			</ModalWindow>
		</>
	);
}
