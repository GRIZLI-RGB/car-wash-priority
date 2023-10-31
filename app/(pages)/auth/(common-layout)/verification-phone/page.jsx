"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";

import TitleAndOpinion from "../../_components/TitleAndOpinion";
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";

import { login } from "@/app/_api/auth";

export default function VerificationPhone() {
	const searchParams = useSearchParams();
	const router = useRouter();

	const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);

	const handleAccept = () => {
		if (searchParams.get("where") === "login") {
			login({
				phone: searchParams.get("phone"),
				code: verificationCode.join(""),
			})
				.then(res => {
					if (res) {
						toast.success("Успешно");
						setTimeout(() => router.push("/home"), 1200);
					} else {
						toast.error("Неверный код");
					}
				})
				.catch(error => {
					console.error({ "/login": error });
					toast.error("Неверный код");
				});
		}

		if (searchParams.get("where") === "registration") {
			if (verificationCode.join("") === "1234") {
				toast.success("Успешно");
				setTimeout(
					() =>
						router.push(
							`/auth/registration?phone=${searchParams.get("phone")}&inn=${searchParams.get("inn")}`,
						),
					1200,
				);
			} else {
				toast.error("Неверный код");
			}
		}
	};

	return (
		<>
			<Image width={"80"} height={"80"} src={"/img/icons/phone.svg"} alt={"Иконка телефона"} />
			<TitleAndOpinion title={"Верификация номера"}>Мы отправили код подтверждения на номер:</TitleAndOpinion>
			<div className={"text-lg font-semibold text-black-100"}>
				* *** *** - {searchParams.get("phone").slice(-4, -2)} - {searchParams.get("phone").slice(-2)}
			</div>
			<div className={"text-center"}>
				<p className={"mb-3 text-sm font-semibold text-black-100"}>Введите 4 цифры из сообщения</p>
				<div className={"flex gap-2 items-center justify-center"}>
					{verificationCode.map((_, index) => (
						<Input
							key={index}
							dataFocus={`focus-${index + 1}`}
							type={"one-number"}
							value={verificationCode[index]}
							setValue={num => {
								let old = [...verificationCode];
								old[index] = num;
								setVerificationCode(old);
							}}
						/>
					))}
				</div>
			</div>
			<div>
				<Button clickHandler={handleAccept} type={"success"}>
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
