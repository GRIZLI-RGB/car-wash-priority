"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

import TitleAndOpinion from "../../_components/TitleAndOpinion";
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";

export default function VerificationPhone() {
	const searchParams = useSearchParams();

	const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);

	return (
		<>
			<Image width={"80"} height={"80"} src={"/img/icons/phone.svg"} alt={"Иконка телефона"} />
			<TitleAndOpinion title={"Верификация номера"}>Мы отправили код подтверждения на номер:</TitleAndOpinion>
			<div className={"text-lg font-semibold text-black-100"}>* *** *** - {searchParams.get('phone').slice(-4, -2)} - {searchParams.get('phone').slice(-2)}</div>
			<div className={"text-center"}>
				<p className={"mb-3 text-sm font-semibold text-black-100"}>Введите 6 цифр из сообщения</p>
				<div className={"flex gap-2 items-center justify-center"}>
					{verificationCode.map((_, index) => (
						<Input
							dataFocus={`focus-${index+1}`}
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
				<Button clickHandler={() => setStep(2)} type={"success"}>
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
