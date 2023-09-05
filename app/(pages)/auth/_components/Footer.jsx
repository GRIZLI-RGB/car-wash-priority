import clsx from "clsx";

export default function Footer({ textColor }) {
	return (
		<footer
			className={clsx(
				"px-10 pb-3 flex items-center justify-between absolute bottom-0 left-0 right-0",
				{
					"text-white": textColor === "white",
					"text-black/40": textColor === "black",
				},
				"max-[800px]:flex-col-reverse max-[800px]:gap-4"
			)}
		>
			<p>© Car Wash Priority 2023</p>
			<div className="flex items-center gap-12 max-[800px]:flex-col max-[800px]:gap-2">
				<a className={"hover:opacity-75"} href="#">
					Поддержка
				</a>
				<a className={"hover:opacity-75"} href="#">
					Политика конфиденциальности
				</a>
				<a className={"hover:opacity-75"} href="#">
					Правила предоставления услуг
				</a>
			</div>
		</footer>
	);
}
