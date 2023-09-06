"use client";

import Image from "next/image";
import Button from "@/app/_components/Button";
import TitleAndOpinion from "@/app/(pages)/auth/_components/TitleAndOpinion";
import { useState } from "react";
import Input from "@/app/_components/Input";

export default function Registration() {
	// step = 1 - подтверждение номера
	// step = 2 - подтверждение данных организации
	// step = 3 - платежные данные
	// step = 4 - информация о представителе
	// step = 5 - расчет расходов и пополнения баланса
	// step = 6 - рекомендуемое пополнение
	const [step, setStep] = useState(1);

	switch (step) {
		case 1: {
			return (
				<>
					<Image
						width={"80"}
						height={"80"}
						src={"/img/icons/phone.svg"}
						alt={"Иконка телефона"}
					/>
					<TitleAndOpinion title={"Верификация номера"}>
						Мы отправили код подтверждения на номер:
					</TitleAndOpinion>
					<div className={"text-lg font-semibold text-black-100"}>
						* *** *** - 16 - 66
					</div>
					<div className={"text-center"}>
						<p
							className={
								"mb-3 text-sm font-semibold text-black-100"
							}>
							Введите 4 цифры из сообщения
						</p>
						<div
							className={
								"flex gap-2 items-center justify-center"
							}>
							<Input type={"one-number"} />
							<Input type={"one-number"} />
							<Input type={"one-number"} />
							<Input type={"one-number"} />
						</div>
					</div>
					<div>
						<Button
							clickHandler={() => setStep(2)}
							type={"success"}>
							Подтвердить
						</Button>
						<p className={"text-sm text-black/40 text-center mt-4"}>
							Не получили код?{" "}
							<a className={"text-purple--main"} href="#">
								Выслать новый
							</a>{" "}
							или{" "}
							<a className={"text-purple--main"} href="#">
								Позвоните нам
							</a>
						</p>
					</div>
				</>
			);
		}
		case 2: {
			return (
				<>
					<TitleAndOpinion title={"Подтверждение данных организации"}>
						Проверьте правильность данных
					</TitleAndOpinion>
					<Input label={"ИНН"} placeholder={"366310082593"} />
					<Input label={"ОГРН"} placeholder={"1085752004535"} />
					<Input
						label={"Форма собственности"}
						placeholder={"ООО без НДС"}
					/>
					<Input
						label={"Наименование компании"}
						placeholder={
							'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ТДВ"'
						}
					/>
					<Input
						label={"Юридический адрес"}
						placeholder={
							"302027, Орловская область, г Орёл, Октябрьская ул, д. 211, помещ. 114 офис 4"
						}
					/>
					<Button
						clickHandler={() => setStep(3)}
						type={"success"}
						icon={"arrow-right"}>
						Продолжить
					</Button>
				</>
			);
		}
		case 3: {
			return (
				<>
					<TitleAndOpinion title={"Платежные данные"}>
						Укажите реквизиты для получения счетов за обслуживание
					</TitleAndOpinion>
					<Input label={"Расчётный счёт"} />
					<Input label={"Название банка"} />
					<Input label={"БИК"} />
					<Input label={"Корреспондентский счёт"} />
					<div className={"flex gap-7 w-full max-[800px]:gap-1"}>
						<div className={"w-1/2"}>
							<Button
								clickHandler={() => setStep(2)}
								type={"secondary"}
								icon={"arrow-left"}>
								Вернуться
							</Button>
						</div>
						<div className={"w-1/2"}>
							<Button
								clickHandler={() => setStep(4)}
								type={"success"}
								icon={"arrow-right"}>
								Продолжить
							</Button>
						</div>
					</div>
				</>
			);
		}
		case 4: {
			return (
				<>
					<TitleAndOpinion title={"Информация о представителе"}>
						<p className={"flex gap-3 flex-col"}>
							<span>
								Укажите информацию о представителе организации,
								который будет пользоваться личным кабинетом.
							</span>
							<span>
								Почта необходима для получения счетов для
								оплаты, актов выполенных работ и информации о
								изменениях.
							</span>
						</p>
					</TitleAndOpinion>
					<Input label={"ФИО представителя"} />
					<Input label={"E-mail для информирования "} />
					<div className={"flex gap-7 w-full max-[800px]:gap-1"}>
						<div className={"w-1/2"}>
							<Button
								clickHandler={() => setStep(3)}
								type={"secondary"}
								icon={"arrow-left"}>
								Вернуться
							</Button>
						</div>
						<div className={"w-1/2"}>
							<Button
								clickHandler={() => setStep(5)}
								type={"success"}
								icon={"arrow-right"}>
								Продолжить
							</Button>
						</div>
					</div>
				</>
			);
		}
		case 5: {
			return (
				<>
					<TitleAndOpinion
						title={"Расчет расходов и пополнения баланса"}>
						<p className={"flex gap-3 flex-col"}>
							<span>
								Укажите данные своего автопарка, мы рассчитаем
								рекомендуему сумму пополнения.
							</span>
							<span>
								При пополнении баланса на рекомендуюмую сумму,
								вы получаете возможность{" "}
								<a className={"text-purple--main"} href="#">
									овердрафта
								</a>
								!
							</span>
						</p>
					</TitleAndOpinion>
					<div
						className={
							"w-full rounded-2xl  max-[800px]:px-6 px-12 py-6 bg-[rgba(229,236,246,0.50)] flex flex-col gap-3 items-center"
						}>
						<p
							className={
								"text-sm font-semibold text-black-100 text-center"
							}>
							Сколько машин в организации?
						</p>
						<Input type={"one-number"} />
						<Image
							width={32}
							height={32}
							src={"/img/icons/close.svg"}
							alt={"Иконка умножения"}
						/>
						<p
							className={
								"text-sm font-semibold text-black-100 text-center"
							}>
							Сколько моек в неделю будет для каждой машины?
						</p>
						<Input type={"one-number"} />
						<Image
							width={32}
							height={32}
							src={"/img/icons/close.svg"}
							alt={"Иконка умножения"}
						/>
						<div
							className={
								"flex gap-2 items-center justify-center"
							}>
							<div
								className={
									"text-5xl text-green--main font-semibold max-[800px]:text-3xl"
								}>
								150₽
							</div>
							<div>
								<Image
									width={19}
									height={19}
									src={"/img/icons/question.svg"}
									alt={"Иконка вопроса"}
								/>
								<p
									className={
										"text-sm text-black/40 max-[800px]:text-[12px]"
									}>
									/стоимость мойки
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4 w-full">
						<Button
							clickHandler={() => setStep(6)}
							type={"success"}
							icon={"arrow-right"}>
							Продолжить
						</Button>
						<Button
							type={"secondary"}
							clickHandler={() => alert("Вы прошли регистрацию")}>
							Пропустить
						</Button>
					</div>
				</>
			);
		}
		case 6: {
			return (
				<>
					<TitleAndOpinion title={"Рекомендуемое пополнение"}>
						Чтобы получить возможность овердрафта пополните баланс
						на рекомендуему сумму
					</TitleAndOpinion>
					<div
						className={
							"w-full rounded-2xl px-12 py-10 bg-[rgba(229,236,246,0.50)] flex flex-col gap-3 items-center"
						}>
						<p
							className={
								"text-sm font-semibold text-black-100 text-center"
							}>
							Рекомендуемая сумма
						</p>
						<p
							className={
								"text-center px-[21px] py-[11px] flex-middle rounded-lg font-semibold text-2xl leading-[150%] border border-solid border-black/20 bg-white"
							}>
							64 000
						</p>
					</div>
					<div className="flex flex-col gap-4 w-full">
						<Button
							clickHandler={() => alert("Вы прошли регистрацию")}
							type={"success"}>
							Получить счет
						</Button>
						<Button
							clickHandler={() => alert("Вы прошли регистрацию")}
							type={"secondary"}>
							Пропустить
						</Button>
					</div>
					<p className={"text-center text-sm text-black/40"}>
						Если вы пропустите этот шаг, то для вашего аккаунта
						возможность овердрафта будет отключена!
					</p>
				</>
			);
		}
	}
}
