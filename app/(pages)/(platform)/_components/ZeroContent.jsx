import Image from "next/image";

export default function ZeroContent({ text }) {
	return (
		<div className={"flex-middle flex-col gap-4"}>
			<Image
				width={100}
				height={100}
				src={"/img/pictures/zero-content.png"}
				alt={"Тут пусто"}
			/>
			{text && <p className={"text-black/40 text-center"}>{text}</p>}
		</div>
	);
}
