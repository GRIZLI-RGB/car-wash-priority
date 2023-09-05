import { redirect } from "next/navigation";

export default function Home() {
	// TODO: пока редирект идет с главной на вход/регистраци, в дальнейшем нужно проверять на то, авторизован уже юзер или еще нет
	redirect("/auth");
}
