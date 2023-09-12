"use client";

import clsx from "clsx";
import Image from "next/image";
import Checkbox from "@/app/_components/Checkbox";
import Input from "@/app/_components/Input";
import randomstring from "randomstring";
import toast from "react-hot-toast";
import Button from "@/app/_components/Button";
import ModalWindow from "@/app/_components/ModalWindow";
import { useEffect, useState } from "react";

export default function Table() {
	const [popups, setPopups] = useState({
		editDriver: false,
		deleteDriver: false,
	});

	const [popupEditDriverData, setPopupEditDriverData] = useState({
		telephone: "79204711666",
		password: "",
	});

	useEffect(() => {
		setPopupEditDriverData({ ...popupEditDriverData, password: randomstring.generate(9) });
	}, []);

	return (
		<>
			<div>
				<div className={"flex w-full border-b border-[#cccccc]"}>
					{["Номер телефона", "Баланс", "Заездов в день", "Действия"].map((title, index) => (
						<div
							className={clsx(`lg:text-center flex items-center gap-1.5 text-black/40 py-3 basis-1/4`, {
								"px-4 border-l-black-low-opacity-gradient justify-center": index !== 0,
							})}
							key={index}>
							{index === 0 && <Checkbox size={"small"} />}
							<p>{title}</p>
						</div>
					))}
				</div>
				<div className={"flex w-full text-black-100"}>
					<div className="flex basis-1/4 items-center px-4 lg:px-1 py-2">+7 (920) 471 - 16 - 66</div>
					<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">
						<div
							className={
								"text-green--main text-sm md:text-xs p-1 bg-white border border-black/10 rounded-lg w-full flex-middle"
							}>
							280
						</div>
					</div>
					<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">2</div>
					<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2 justify-evenly">
						<Image
							className={"cursor-pointer duration-300 hover:scale-125"}
							width={20}
							height={20}
							src={"/img/icons/trash-can.svg"}
							alt={"Удалить"}
							onClick={() => setPopups({ ...popups, deleteDriver: true })}
						/>
						<Image
							className={"cursor-pointer duration-300 hover:scale-125"}
							width={20}
							height={20}
							src={"/img/icons/pencil.svg"}
							alt={"Редактировать"}
							onClick={() => setPopups({ ...popups, editDriver: true })}
						/>
					</div>
				</div>
				<div className={"flex w-full text-black-100"}>
					<div className="flex basis-1/4 items-center px-4 lg:px-1 py-2">+7 (920) 471 - 16 - 66</div>
					<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">
						<div
							className={
								"text-red--secondary text-sm md:text-xs p-1 bg-white border border-black/10 rounded-lg w-full flex-middle"
							}>
							99
						</div>
					</div>
					<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">2</div>
					<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2 justify-evenly">
						<Image
							className={"cursor-pointer duration-300 hover:scale-125"}
							width={20}
							height={20}
							src={"/img/icons/trash-can.svg"}
							alt={"Удалить"}
							onClick={() => setPopups({ ...popups, deleteDriver: true })}
						/>
						<Image
							className={"cursor-pointer duration-300 hover:scale-125"}
							width={20}
							height={20}
							src={"/img/icons/pencil.svg"}
							alt={"Редактировать"}
							onClick={() => setPopups({ ...popups, editDriver: true })}
						/>
					</div>
				</div>
				<div className={"flex w-full text-black-100"}>
					<div className="flex basis-1/4 items-center px-4 lg:px-1 py-2">+7 (920) 471 - 16 - 66</div>
					<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">
						<div
							className={
								"text-green--main text-sm p-1 md:text-xs bg-white border border-black/10 rounded-lg w-full flex-middle"
							}>
							165
						</div>
					</div>
					<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2">8</div>
					<div className="flex-middle basis-1/4 px-4 lg:px-1 py-2 justify-evenly">
						<Image
							className={"cursor-pointer duration-300 hover:scale-125"}
							width={20}
							height={20}
							src={"/img/icons/trash-can.svg"}
							alt={"Удалить"}
							onClick={() => setPopups({ ...popups, deleteDriver: true })}
						/>
						<Image
							className={"cursor-pointer duration-300 hover:scale-125"}
							width={20}
							height={20}
							src={"/img/icons/pencil.svg"}
							alt={"Редактировать"}
							onClick={() => setPopups({ ...popups, editDriver: true })}
						/>
					</div>
				</div>
			</div>
			<ModalWindow
				trigger={popups.editDriver}
				setTrigger={arg => setPopups({ ...popups, editDriver: arg })}
				title={"Редактирование водителя"}>
				<div className={"flex-middle flex-col gap-3"}>
					<span>
						Укажите номер телефона водителя, он необходим для доступа в приложение. Пароль сгенерирован
						автоматически.
					</span>
					<span>Передайте водителю данные для доступа.</span>
				</div>
				<Input
					label={"Номер телефона"}
					getOnlyNumber
					value={popupEditDriverData.telephone}
					setValue={text => setPopupEditDriverData({ ...popupEditDriverData, telephone: text })}
				/>
				<div className={"flex items-center justify-between gap-5 w-full"}>
					<div>
						<div>
							<Input
								label={"Пароль"}
								disabled
								value={popupEditDriverData.password}
								setValue={arg => setPopupEditDriverData({ ...popupEditDriverData, password: arg })}
							/>
						</div>
						<p
							className={"cursor-pointer mt-1 text-sm text-purple--main"}
							onClick={() =>
								setPopupEditDriverData({ ...popupEditDriverData, password: randomstring.generate(9) })
							}>
							Сгенерировать новый
						</p>
					</div>
					<div
						className={"flex-middle gap-1 cursor-pointer duration-300 hover:opacity-75"}
						onClick={() => {
							navigator.clipboard.writeText(popupEditDriverData.password).then(function () {
								toast.success("Пароль скопирован в буфер обмена");
							});
						}}>
						<Image width={20} height={20} src={"/img/icons/copy.svg"} alt={"Копировать"} />
						<p className={"text-sm text-black/40"}>Скопировать</p>
					</div>
				</div>
				<div className={"w-[388px] md:w-full"}>
					<Button type={"success"} clickHandler={() => setPopups({ ...popups, editDriver: false })}>
						Обновить
					</Button>
				</div>
			</ModalWindow>
			<ModalWindow
				trigger={popups.deleteDriver}
				setTrigger={arg => setPopups({ ...popups, deleteDriver: arg })}
				title={"Удаление аккаунта"}>
				<div className={"flex-middle flex-col gap-3"}>Вы уверены, что хотите удалить аккаунт:</div>
				<div className={"flex-middle text-lg text-black-100 font-semibold"}>
					+7 (920) 471 - 16 - 66
				</div>
				<div className={"w-[388px] md:w-full gap-4 flex flex-col"}>
					<Button type={"danger"} clickHandler={() => setPopups({ ...popups, deleteDriver: false })}>
						Удалить
					</Button>
					<Button type={"secondary"} clickHandler={() => setPopups({ ...popups, deleteDriver: false })}>
						Отмена
					</Button>
				</div>
			</ModalWindow>
		</>
	);
}
