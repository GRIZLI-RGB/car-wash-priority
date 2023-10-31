"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useSearchParams } from "next/navigation";

import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";
import TitleAndOpinion from "@/app/(pages)/auth/_components/TitleAndOpinion";

import validation from "@/app/utils/validation";

export default function Registration() {
	const searchParams = useSearchParams();

	// step = 1 - подтверждение данных организации
	// step = 2 - платежные данные
	// step = 3 - информация о представителе
	// step = 4 - расчет расходов и пополнения баланса
	// step = 5 - рекомендуемое пополнение
	const [step, setStep] = useState(5);

	useEffect(() => {
		setData(prev => ({
			...prev,
			inn: searchParams.get("inn"),
		}));
	}, [searchParams]);

	const [data, setData] = useState({
		inn: "",
		ogrn: "",
		ownership: "",
		company: "",
		address: "",
		payment_account: "",
		bank: "",
		bik: "",
		correspondent_account: "",
		fio: "",
		email: "",
		cars: "",
        washes: ""
	});

	const handleNextStep = () => {
		if (step === 1) {
			if (
				validation("inn", data.inn).isValid &&
				validation("ogrn", data.ogrn).isValid &&
				!!data.ownership &&
				!!data.company &&
				!!data.address
			) {
				setStep(prev => prev + 1);
			} else {
				[...validation("inn", data.inn).errors, ...validation("ogrn", data.ogrn).errors].map(error =>
					toast.error(error),
				);

				if (!data.ownership || !data.company || !data.address) {
					toast.error("Заполните все поля");
				}
			}
		}
	};

    const handleSkipStep = () => {

    }

    const handleGetAccount = () => {

    }

	switch (step) {
		case 1: {
			return (
				<>
					<TitleAndOpinion title={"Подтверждение данных организации"}>
						Проверьте правильность данных
					</TitleAndOpinion>
					<Input
						label={"ИНН"}
						placeholder={"366310082593"}
						value={data.inn}
						setValue={inn =>
							setData(prev => ({
								...prev,
								inn,
							}))
						}
					/>
					<Input
						label={"ОГРН"}
						placeholder={"1085752004535"}
						value={data.ogrn}
						setValue={ogrn =>
							setData(prev => ({
								...prev,
								ogrn,
							}))
						}
					/>
					<Input
						label={"Форма собственности"}
						placeholder={"ООО без НДС"}
						value={data.ownership}
						setValue={ownership =>
							setData(prev => ({
								...prev,
								ownership,
							}))
						}
					/>
					<Input
						label={"Наименование компании"}
						placeholder={'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ТДВ"'}
						value={data.company}
						setValue={company =>
							setData(prev => ({
								...prev,
								company,
							}))
						}
					/>
					<Input
						label={"Юридический адрес"}
						placeholder={"302027, Орловская область, г Орёл, Октябрьская ул, д. 211, помещ. 114 офис 4"}
						value={data.address}
						setValue={address =>
							setData(prev => ({
								...prev,
								address,
							}))
						}
					/>
					<Button clickHandler={handleNextStep} type={"success"} icon={"arrow-right"}>
						Продолжить
					</Button>
				</>
			);
		}
		case 2: {
			return (
				<>
					<TitleAndOpinion title={"Платежные данные"}>
						Укажите реквизиты для получения счетов за обслуживание
					</TitleAndOpinion>
					<Input
						label={"Расчётный счёт"}
						value={data.payment_account}
						setValue={payment_account =>
							setData(prev => ({
								...prev,
								payment_account,
							}))
						}
					/>
					<Input
						label={"Название банка"}
						value={data.bank}
						setValue={bank =>
							setData(prev => ({
								...prev,
								bank,
							}))
						}
					/>
					<Input
						label={"БИК"}
						value={data.bik}
						setValue={bik =>
							setData(prev => ({
								...prev,
								bik,
							}))
						}
					/>
					<Input
						label={"Корреспондентский счёт"}
						value={data.correspondent_account}
						setValue={inn =>
							setData(prev => ({
								...prev,
								correspondent_account,
							}))
						}
					/>
					<div className={"flex gap-7 w-full max-[800px]:gap-1"}>
						<div className={"w-1/2"}>
							<Button
								clickHandler={() => setStep(prev => prev - 1)}
								type={"secondary"}
								icon={"arrow-left"}>
								Вернуться
							</Button>
						</div>
						<div className={"w-1/2"}>
							<Button clickHandler={handleNextStep} type={"success"} icon={"arrow-right"}>
								Продолжить
							</Button>
						</div>
					</div>
				</>
			);
		}
		case 3: {
			return (
				<>
					<TitleAndOpinion title={"Информация о представителе"}>
						<p className={"flex gap-3 flex-col"}>
							<span>
								Укажите информацию о представителе организации, который будет пользоваться личным
								кабинетом.
							</span>
							<span>
								Почта необходима для получения счетов для оплаты, актов выполенных работ и информации о
								изменениях.
							</span>
						</p>
					</TitleAndOpinion>
					<Input
						label={"ФИО представителя"}
						value={data.fio}
						setValue={fio =>
							setData(prev => ({
								...prev,
								fio,
							}))
						}
					/>
					<Input
						label={"E-mail для информирования "}
						value={data.email}
						setValue={email =>
							setData(prev => ({
								...prev,
								email,
							}))
						}
					/>
					<div className={"flex gap-7 w-full max-[800px]:gap-1"}>
						<div className={"w-1/2"}>
							<Button
								clickHandler={() => setStep(prev => prev - 1)}
								type={"secondary"}
								icon={"arrow-left"}>
								Вернуться
							</Button>
						</div>
						<div className={"w-1/2"}>
							<Button clickHandler={handleNextStep} type={"success"} icon={"arrow-right"}>
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
					<TitleAndOpinion title={"Расчет расходов и пополнения баланса"}>
						<p className={"flex gap-3 flex-col"}>
							<span>Укажите данные своего автопарка, мы рассчитаем рекомендуему сумму пополнения.</span>
							<span>
								При пополнении баланса на рекомендуюмую сумму, вы получаете возможность{" "}
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
						<p className={"text-sm font-semibold text-black-100 text-center"}>
							Сколько машин в организации?
						</p>
						<Input
							type={"one-number"}
							dataFocus={"focus-1"}
							value={data.cars}
							setValue={cars =>
								setData(prev => ({
									...prev,
									cars,
								}))
							}
						/>
						<Image width={32} height={32} src={"/img/icons/close.svg"} alt={"Иконка умножения"} />
						<p className={"text-sm font-semibold text-black-100 text-center"}>
							Сколько моек в неделю будет для каждой машины?
						</p>
						<Input
							type={"one-number"}
							dataFocus={"focus-2"}
							value={data.washes}
							setValue={washes =>
								setData(prev => ({
									...prev,
									washes,
								}))
							}
						/>
						<Image width={32} height={32} src={"/img/icons/close.svg"} alt={"Иконка умножения"} />
						<div className={"flex gap-2 items-center justify-center"}>
							<div className={"text-5xl text-green--main font-semibold max-[800px]:text-3xl"}>150₽</div>
							<div>
								<Image width={19} height={19} src={"/img/icons/question.svg"} alt={"Иконка вопроса"} />
								<p className={"text-sm text-black/40 max-[800px]:text-[12px]"}>/стоимость мойки</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-4 w-full">
						<Button clickHandler={handleNextStep} type={"success"} icon={"arrow-right"}>
							Продолжить
						</Button>
						<Button type={"secondary"} clickHandler={handleSkipStep}>
							Пропустить
						</Button>
					</div>
				</>
			);
		}
		case 5: {
			return (
				<>
					<TitleAndOpinion title={"Рекомендуемое пополнение"}>
						Чтобы получить возможность овердрафта пополните баланс на рекомендуему сумму
					</TitleAndOpinion>
					<div
						className={
							"w-full rounded-2xl px-12 py-10 bg-[rgba(229,236,246,0.50)] flex flex-col gap-3 items-center"
						}>
						<p className={"text-sm font-semibold text-black-100 text-center"}>Рекомендуемая сумма</p>
						<p
							className={
								"text-center px-[21px] py-[11px] flex-middle rounded-lg font-semibold text-2xl leading-[150%] border border-solid border-black/20 bg-white"
							}>
							{data.cars * data.washes}
						</p>
					</div>
					<div className="flex flex-col gap-4 w-full">
						<Button clickHandler={handleGetAccount} type={"success"}>
							Получить счет
						</Button>
						<Button clickHandler={handleSkipStep} type={"secondary"}>
							Пропустить
						</Button>
					</div>
					<p className={"text-center text-sm text-black/40"}>
						Если вы пропустите этот шаг, то для вашего аккаунта возможность овердрафта будет отключена!
					</p>
				</>
			);
		}
	}
}
