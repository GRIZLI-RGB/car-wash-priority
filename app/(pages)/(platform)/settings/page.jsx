"use client";

import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";

import toast from "react-hot-toast";
import Checkbox from "@/app/_components/Checkbox";
import {useEffect, useState} from "react";

const repeatingStyles = {
	block: "rounded-2xl bg-[#F7F9FB] p-6 w-full gap-6 flex flex-col",
	title: "text-black-100 text-lg font-semibold",
};

export default function Settings() {
	const [windowWidth, setWindowWidth] = useState(0);
	
	useEffect(() => {
		setWindowWidth(window.innerWidth)
	}, [window.innerWidth]);

	return (
		<div className={"flex-middle flex-col gap-6"}>
			<div className={repeatingStyles.block}>
				<div className={"flex flex-wrap items-center justify-between gap-4"}>
					<h1 className={repeatingStyles.title}>
						Информация о компании
					</h1>
					<p className={"text-black/40"}>
						Для изменения данных организации обратитесь в{" "}
						<span className={"text-purple--main cursor-pointer"}>
							службу поддержки
						</span>
					</p>
				</div>
				<Input
					type={"big-input:disabled"}
					label={"ИНН"}
					placeholder={"366310082593"}
				/>
				<Input
					type={"big-input:disabled"}
					label={"ОГРН"}
					placeholder={"1085752004535"}
				/>
				<Input
					type={"big-input:disabled"}
					label={"Наименование компании"}
					placeholder={
						'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ТДВ93"'
					}
				/>
				<Input
					type={"big-input:disabled"}
					label={"Юридический адрес"}
					placeholder={
						"302027, Орловская область, г Орёл, Октябрьская ул, д. 211, помещ. 114 офис 4"
					}
				/>
				<div className={"flex items-center"}>
					<h1 className={repeatingStyles.title}>Платежные данные</h1>
				</div>
				<Input
					type={"big-input:disabled"}
					label={"Расчётный счёт"}
					placeholder={"40802810502940014407"}
				/>
				<Input
					type={"big-input:disabled"}
					label={"Название банка"}
					placeholder={'АО "АЛЬФА-БАНК"'}
				/>
				<Input
					type={"big-input:disabled"}
					label={"БИК"}
					placeholder={"044525593"}
				/>
				<Input
					type={"big-input:disabled"}
					label={"Корреспондентский счёт"}
					placeholder={"30101810200000000593"}
				/>
			</div>
			<div className={repeatingStyles.block}>
				<div className={"flex items-center justify-between gap-4  flex-wrap"}>
					<h1 className={repeatingStyles.title}>
						Данные пользователя
					</h1>
					<div className="flex-middle gap-2">
						<Button type={"medium-gray"}>Отменить</Button>
						<Button
							clickHandler={() =>
								toast.success("Изменения сохранены")
							}
							type={"medium-black"}>
							{windowWidth <= 950 ? "Сохранить" : "Сохранить изменения"}
						</Button>
					</div>
				</div>
				<Input
					type={"big-input"}
					label={"ФИО"}
					placeholder={"Вадим Самойлов"}
				/>
				<Input
					type={"big-input"}
					label={"E-mail"}
					placeholder={"samoy-lov@yandex.tu"}
				/>
				<div className={"flex items-center"}>
					<h1 className={repeatingStyles.title}>
						Настройки уведомлений
					</h1>
				</div>
				<Checkbox
					title={"Счета"}
					opinion={"Все выставленные счета будут приходить на почту"}
				/>
				<div className={"w-full h-[1px] bg-black/10"} />
				<Checkbox
					title={"Акты"}
					opinion={"По итогам месяца акты выполненных работ"}
				/>
				<div className={"w-full h-[1px] bg-black/10"} />
				<Checkbox
					title={"Напоминания"}
					opinion={
						"Мы будет присылать уведомления при окончании баланса"
					}
				/>
			</div>
		</div>
	);
}
