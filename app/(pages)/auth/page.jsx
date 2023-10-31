"use client";

import Footer from "@/app/(pages)/auth/_components/Footer";
import Image from "next/image";
import {useRef, useState} from "react";
import clsx from "clsx";
import {CSSTransition, SwitchTransition, Transition} from "react-transition-group";
import Button from "@/app/_components/Button";
import {useRouter} from "next/navigation";
import Input from "@/app/_components/Input";
import axios from "axios";
import ModalWindow from "@/app/_components/ModalWindow";
import Verify from "@/app/(pages)/auth/_components/Verify";
import {sendAuthCode} from "@/app/(pages)/auth/auth";
import {reg} from "./reg";
import InputMask from "react-input-mask";

export default function Auth() {
	const [isLogin, setIsLogin] = useState(true);

	const [loginData, setLoginData] = useState({
		phone: "",
	});
	const [registrationData, setRegistrationData] = useState({
		phone: "",
		inn: "",
	});
	const [modalVerify, setModalVerify] = useState(false);
	const [validateFields, setValidateFields] = useState({
		phone: false,
		inn: false
	})

	const router = useRouter();

	const nodeRef = useRef(null);

	const handleAuth = async () => {
		const isValid = sendAuthCode(loginData);

		if (isLogin && isValid) {
			setModalVerify(true);
		} else {
			router.push("/auth/registration");
		}
	};

	const handleReg = async () => {
		const isValid = await reg(registrationData);

		if (isValid) {
			router.push("/auth/registration");
		} else {
			console.log("Данные не валидны");
		}
	};

	const checkField = (key, value, minLength) => {
		if (value.trim().length < minLength) {
			setValidateFields({...validateFields, [key]: false});
		} else {
			setValidateFields({...validateFields, [key]: true});
		}
	}

	return (
		<section
			className={
				"px-12 py-20 flex justify-end max-[1030px]:px-6 max-[800px]:pb-40 max-[800px]:pt-6 max-[1030px]:justify-center items-center relative bg-[url('/img/backgrounds/auth.jpg')] w-screen min-h-screen bg-no-repeat bg-cover bg-center"
			}>
			<div className={"flex gap-8 items-center"}>
				<div className={"text-white text-[108px] text-right leading-[140%] max-[1030px]:hidden"}>
					<p className={"font-black"}>Car</p>
					<p className={"font-black"}>Wash</p>
					<p className={"font-black"}>Priority</p>
				</div>
				<div
					className={
						"flex flex-col gap-7 max-w-[484px] bg-white rounded-2xl p-12 max-[530px]:p-8 max-[430px]:p-4"
					}>
					<div className={"flex flex-col gap-2 items-center"}>
						<Image width={56} height={70} src={"/img/logo.svg"} alt={"Логотип"} />
						<p className={"text-black-100 text-lg font-semibold text-center"}>Корпоративный портал</p>
					</div>
					<div className={"rounded-xl bg-black/5 px-2 py-1"}>
						<p
							onClick={() => setIsLogin(true)}
							className={clsx(
								"transition-colors inline-block w-1/2 text-center text-sm py-1 px-2 rounded-lg",
								{
									"text-black-100 cursor-pointer hover:bg-black/5": !isLogin,
									"text-white bg-green--main": isLogin,
								},
								"max-[430px]:text-[12px] max-[430px]:px-1",
							)}>
							Вход
						</p>
						<p
							onClick={() => setIsLogin(false)}
							className={clsx(
								"duration-300 inline-block w-1/2 text-center text-sm py-1 px-2 rounded-lg",
								{
									"text-black-100 cursor-pointer hover:bg-black/5": isLogin,
									"text-white bg-green--main": !isLogin,
								},
								"max-[430px]:text-[12px] max-[430px]:px-1",
							)}>
							Регистрация
						</p>
					</div>
					<div className={"bg-black/10 h-[1px]"} />
					<Transition timeout={500} in={isLogin}>
						{state => (
							<div
								className={`flex flex-col items-center gap-2 react-transition-group-slide-right-${state}`}>
								<h1 className={"text-2xl leading-[150%] font-semibold text-black-100"}>
									{isLogin ? "Войдите" : "Регистрация"}
								</h1>
								<p className={"text-sm text-black/40 text-center"}>
									{isLogin ? "в личный кабинет компании" : "создайте личный кабинет компании"}
								</p>
							</div>
						)}
					</Transition>
					<div className={"flex flex-col gap-7"}>
						<Input
							value={loginData.phone}
							setValue={text => {
								setLoginData({phone: text.replace(/[\s-()+]/g, '')});
								setRegistrationData({...registrationData, phone: text.replace(/[\s-()+]/g, '')});
								checkField("phone", text, 11)
							}}
							placeholder={"+7 (___) ___-__-__"}
							mask={"+7 (999) 999-99-99"}
							type={"mask-input"}
							getOnlyNumber
						/>
						{!isLogin && <Input placeholder={"ИНН организации"} getOnlyNumber
											setValue={text => {
												setRegistrationData({...registrationData, inn: text});
												checkField("inn", text, 10)
											}}
											mask={"9999999999"}
											type={"mask-input"}
						/>}
					</div>
					<Button type={"success"} clickHandler={isLogin ? handleAuth : handleReg} disabled={isLogin ? !validateFields.phone : !(validateFields.phone && validateFields.inn)}>
						<SwitchTransition>
							<CSSTransition
								key={isLogin}
								nodeRef={nodeRef}
								classNames="react-transition-group-fade"
								addEndListener={done => {
									nodeRef.current.addEventListener("transitionend", done, false);
								}}>
								<span ref={nodeRef}>{isLogin ? "Войти" : "Зарегистрироваться"}</span>
							</CSSTransition>
						</SwitchTransition>
					</Button>
					<p className={"text-sm text-black/40 text-center max-[430px]:text-[12px]"}>
						Продолжая использовать сервис, вы соглашаетесь с{" "}
						<a className={"text-purple--main"} href="#">
							политикой конфиденциальности
						</a>{" "}
						и{" "}
						<a className={"text-purple--main"} href="#">
							правилами предоставления услуг
						</a>
					</p>
				</div>
			</div>
			<Footer textColor={"white"} />
			<ModalWindow trigger={modalVerify} setTrigger={(arg) => setModalVerify(arg)}>
				<span></span>
				<Verify phone={loginData.phone} closeModal={() => setModalVerify(false)} />
			</ModalWindow>
		</section>
	);
}
