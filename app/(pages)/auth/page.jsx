"use client";

import Footer from "@/app/(pages)/auth/_components/Footer";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import clsx from "clsx";
import {
	CSSTransition,
	SwitchTransition,
	Transition,
	TransitionGroup,
} from "react-transition-group";
import Button from "@/app/_components/Button";
import {useRouter} from "next/navigation";

export default function Auth() {
	const [isLogin, setIsLogin] = useState(true);

	const router = useRouter();

	const nodeRef = useRef(null);

	const handleAuth = () => {
		if (isLogin) {
			alert("Вы вошли в аккаунт")
		} else {
			router.push("/auth/registration")
		}
	}

	return (
		<section
			className={
				"px-12 py-20 flex justify-end max-[1030px]:px-6 max-[800px]:pb-40 max-[800px]:pt-6 max-[1030px]:justify-center items-center relative bg-[url('/img/backgrounds/auth.jpg')] w-screen min-h-screen bg-no-repeat bg-cover bg-center"
			}>
			<div className={"flex gap-8 items-center"}>
				<div
					className={
						"text-white text-[108px] text-right leading-[140%] max-[1030px]:hidden"
					}>
					<p className={"font-black"}>Car</p>
					<p className={"font-black"}>Wash</p>
					<p className={"font-black"}>Priority</p>
				</div>
				<div
					className={
						"flex flex-col gap-7 max-w-[484px] bg-white rounded-2xl p-12 max-[530px]:p-8 max-[430px]:p-4"
					}>
					<div className={"flex flex-col gap-2 items-center"}>
						<Image
							width={56}
							height={70}
							src={"/img/logo.svg"}
							alt={"Логотип"}
						/>
						<p
							className={
								"text-black-100 text-lg font-semibold text-center"
							}>
							Корпоративный портал
						</p>
					</div>
					<div
						className={
							"rounded-xl bg-black/5 px-2 py-1"
						}>
						<p
							onClick={() => setIsLogin(true)}
							className={clsx(
								"transition-colors inline-block w-1/2 text-center text-sm py-1 px-2 rounded-lg",
								{
									"text-black-100 cursor-pointer hover:bg-black/5":
										!isLogin,
									"text-white bg-green--main": isLogin,
								},
								"max-[430px]:text-[12px] max-[430px]:px-1"
							)}>
							Вход
						</p>
						<p
							onClick={() => setIsLogin(false)}
							className={clsx(
								"duration-300 inline-block w-1/2 text-center text-sm py-1 px-2 rounded-lg",
								{
									"text-black-100 cursor-pointer hover:bg-black/5":
										isLogin,
									"text-white bg-green--main": !isLogin,
								},
								"max-[430px]:text-[12px] max-[430px]:px-1"
							)}>
							Регистрация
						</p>
					</div>
					<div className={"bg-black/10 h-[1px]"} />
					<Transition timeout={500} in={isLogin}>
						{state => (
							<div
								className={`flex flex-col items-center gap-2 react-transition-group-slide-right-${state}`}>
								<h1
									className={
										"text-2xl leading-[150%] font-semibold text-black-100"
									}>
									{isLogin ? "Войдите" : "Регистрация"}
								</h1>
								<p
									className={
										"text-sm text-black/40 text-center"
									}>
									{isLogin
										? "в личный кабинет компании"
										: "создайте личный кабинет компании"}
								</p>
							</div>
						)}
					</Transition>
					<div className={"flex flex-col gap-7"}>
						<input
							className={
								"text-sm text-black-100 placeholder:text-black/20 w-full rounded-lg px-4 py-2.5 border border-solid border-black/10 focus:border-black/20"
							}
							placeholder={"Номер телефона"}
						/>
						{!isLogin && (
							<input
								className={
									"text-sm text-black-100 placeholder:text-black/20 w-full rounded-lg px-4 py-2.5 border border-solid border-black/10 focus:border-black/20"
								}
								placeholder={"ИНН организации"}
							/>
						)}
					</div>
					<Button type={"success"} clickHandler={handleAuth}>
						<SwitchTransition>
							<CSSTransition
								key={isLogin}
								nodeRef={nodeRef}
								classNames="react-transition-group-fade"
								addEndListener={done => {
									nodeRef.current.addEventListener(
										"transitionend",
										done,
										false,
									);
								}}>
								<span ref={nodeRef}>
									{isLogin ? "Войти" : "Зарегистрироваться"}
								</span>
							</CSSTransition>
						</SwitchTransition>
					</Button>
					<p
						className={
							"text-sm text-black/40 text-center max-[430px]:text-[12px]"
						}>
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
		</section>
	);
}