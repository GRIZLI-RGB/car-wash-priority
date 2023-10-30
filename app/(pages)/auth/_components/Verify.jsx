import Image from "next/image";
import TitleAndOpinion from "@/app/(pages)/auth/_components/TitleAndOpinion";
import Input from "@/app/_components/Input";
import Button from "@/app/_components/Button";
import {useState} from "react";
import {getOrganizationData, saveOrganizationData, sendAuthCode, verifyCode} from "../auth";
import {useRouter} from "next/navigation";

export default function Verify({phone, closeModal}) {
	const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
	const router = useRouter()

	const handleVerify = async () => {
		const status = await verifyCode({phone: phone, code: verificationCode.join("")})

		if (status) {
			await saveOrganizationData();
			router.push("/home");
		} else {
			alert("Такого пользователя не существует")
			closeModal();
		}
	}

	return (
		<>
			<Image width={"80"} height={"80"} src={"/img/icons/phone.svg"} alt={"Иконка телефона"} />
			<TitleAndOpinion title={"Верификация номера"}>
				Мы отправили код подтверждения на номер:
			</TitleAndOpinion>
			<div className={"text-lg font-semibold text-black-100"}>phone</div>
			<div className={"text-center"}>
				<p className={"mb-3 text-sm font-semibold text-black-100"}>Введите 4 цифры из сообщения</p>
				<div className={"flex gap-2 items-center justify-center"}>
					{verificationCode.map((value, index) => <Input
						dataFocus={`focus-${index+1}`}
						type={"one-number"}
						value={verificationCode[index]}
						setValue={num => {
							let old = [...verificationCode];
							old[index] = num;
							setVerificationCode(old);
						}}
					/>)}
				</div>
			</div>
			<div>
				<Button clickHandler={handleVerify} type={"success"}>
					Подтвердить
				</Button>
				<p className={"text-sm text-black/40 text-center mt-4"}>
					Не получили код?{" "}
					<a className={"text-purple--main"} href="#" onClick={() => sendAuthCode({phone: phone})}>
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