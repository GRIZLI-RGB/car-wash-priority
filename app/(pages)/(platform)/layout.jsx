"use client";

import ZeroContent from "@/app/(pages)/(platform)/_components/ZeroContent";
import { useState } from "react";
import clsx from "clsx";
import { Operation } from "@/app/(pages)/(platform)/_components/Operation";
import Image from "next/image";
import Button from "@/app/_components/Button";
import { usePathname } from "next/navigation";
import MenuItem from "@/app/(pages)/(platform)/_components/MenuItem";
import ModalWindow from "@/app/_components/ModalWindow";
import Input from "@/app/_components/Input";

export default function PlatformLayout({ children }) {
	const pathname = usePathname();

	const [isHaveContent, setIsHaveContent] = useState(
		window.location.href.split("#")[1] === "fill",
	);

	const [showModalRefill, setShowModalRefill] = useState(false);

	return (
		<>
			<div className={"flex w-screen min-h-screen bg-white"}>
				<aside
					className={
						"w-[212px] p-4 pt-6 border-r border-solid border-black/10"
					}>
					<div
						className={
							"text-center text-white text-sm font-semibold w-full py-2.5 bg-green--main rounded-2xl"
						}>
						<p>ООО</p>
						<p>Название компании</p>
					</div>
					<div className="bg-[#E5ECF6] py-[22px] px-6 w-full mt-4 rounded-2xl text-black-100 font-semibold">
						<div className="text-sm flex justify-between items-center">
							<p>Баланс</p>
							<Image
								width={24}
								height={24}
								src={"/img/icons/currency-rub.svg"}
								alt={"Знак рубля"}
							/>
						</div>
						<p className={"text-2xl mt-2 mb-6"}>0</p>
						<Button
							type={"success-secondary"}
							clickHandler={() => setShowModalRefill(true)}>
							Пополнить
						</Button>
					</div>
					<div className="flex flex-col gap-1 mt-36 mb-44">
						<MenuItem
							text={"Главная"}
							icon={"statistic"}
							path={"/home"}
						/>
						<MenuItem
							text={"Водители"}
							icon={"car"}
							path={"/drivers"}
						/>
						<MenuItem
							text={"История"}
							icon={"box"}
							path={"/history"}
						/>
						<MenuItem
							text={"Счета и акты"}
							icon={"document"}
							path={"/bills-and-acts"}
						/>
					</div>
					<MenuItem
						text={"Настройки"}
						icon={"passport"}
						path={"/settings"}
					/>
					<div className={"mt-3"}>
						<Button type={"danger-secondary"}>Выйти</Button>
					</div>
					<div className={"relative mt-6 flex-middle flex-col"}>
						<div
							className={
								"absolute top-0 h-[1px] left-[-16px] right-[-16px] bg-black/10"
							}
						/>
						<Image
							className={"my-4"}
							width={36}
							height={42}
							src={"/img/logo.svg"}
							alt={"Логотип"}
						/>
						<p className={"text-black/40"}>
							© Car Wash Priority 2023
						</p>
					</div>
				</aside>
				<div className={"grow"}>{children}</div>
				{pathname !== "/history" && (
					<aside
						className={clsx(
							"relative w-[280px] border-l border-solid border-black/10 px-6 py-[72px]",
							{
								"flex-middle": !isHaveContent,
								"flex flex-col gap-2": isHaveContent,
							},
						)}>
						<h6
							className={
								"text-black-100 text-sm font-semibold text-center absolute top-6 left-0 right-0"
							}>
							История операций
						</h6>
						{isHaveContent ? (
							<>
								<Operation type={"debit"} />
								<Operation type={"debit"} />
								<Operation type={"debit"} />
								<Operation type={"refill"} />
							</>
						) : (
							<ZeroContent
								text={
									"Тут будут отображаться операции по балансу организации"
								}
							/>
						)}
					</aside>
				)}
			</div>
			<ModalWindow
				trigger={showModalRefill}
				setTrigger={arg => setShowModalRefill(arg)}
				title={"Пополнить баланс"}>
				<div className={"flex-middle flex-col gap-3"}>
					<span>Укажите сумму пополнения.</span>
					<span>
						Счет будет отправлен на почту и появится на странице
						счетов
					</span>
				</div>
				<Input label={"Сумма пополнения"} />
				<div className={"w-[388px]"}>
					<Button type={"success"}>Получить счет на оплату</Button>
				</div>
			</ModalWindow>
		</>
	);
}
