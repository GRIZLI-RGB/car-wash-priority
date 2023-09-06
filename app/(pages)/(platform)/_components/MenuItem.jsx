import clsx from "clsx";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function MenuItem({ text, path, icon }) {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<div
			className={clsx(
				"rounded-lg flex items-center gap-3 p-3 text-sm text-black-100 hover:bg-black/5 duration-300",
				{
					"bg-black/5 text-green--main font-semibold":
						pathname === path,
					"cursor-pointer": pathname !== path,
				},
			)}
			onClick={() => router.push(path)}>
			<Image
				className={clsx({
					"filter-svg-to-green": pathname === path,
				})}
				width={24}
				height={24}
				src={`/img/icons/${icon}.svg`}
				alt="Главная"
			/>
			<p>{text}</p>
		</div>
	);
}
