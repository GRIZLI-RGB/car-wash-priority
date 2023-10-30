import Image from "next/image";
import clsx from "clsx";
import ReactInputMask from "react-input-mask";

export default function Input({ type, disabled, value, setValue, label, placeholder, getOnlyNumber, dataFocus }) {
	switch (type) {
		// TODO: для одинарных инпутов сделать 1 значение вводимое и автоперевод на следующее
		case "phone": {
			return (
				<div className={"w-full flex flex-col gap-3"}>
					{label && <p className={"text-sm font-semibold text-black-100"}>{label}</p>}
					<ReactInputMask
						maskChar={null}
						mask="+7 (999) 999-99-99"
						className={clsx(
							"text-sm text-black-100 placeholder:text-black/20 w-full rounded-lg px-4 py-2.5 border border-solid border-black/10 focus:border-black/20",
							{
								"text-black/20": disabled,
							},
						)}
						placeholder={placeholder}
						value={value}
						disabled={disabled}
						onChange={e => setValue(e.target.value)}
					/>
				</div>
			);
		}
		case "one-number": {
			return (
				<input
					tabIndex={dataFocus.split("-")[1]}
					data-focus={dataFocus}
					className={
						"focus:border-black/20 text-center w-[58px] h-[58px] flex-middle rounded-lg font-semibold text-2xl leading-[150%] border border-solid border-black/10 bg-white"
					}
					type={"number"}
					value={value}
					onChange={e => {
						let elems = document.querySelectorAll('[data-focus^="focus-"]');
						if (e.target.value === "") {
							setValue(e.target.value);
						} else {
							setValue(e.target.value.at(-1));
						}
						if (elems.length > 0) {
							let curInd = Number(e.target.getAttribute("data-focus").split("-")[1]) - 1;
							elems[curInd === elems.length - 1 ? 0 : curInd + 1].focus();
						}
					}}
				/>
			);
		}
		case "big-input:disabled": {
			return (
				<div className={"relative w-[620px] lg:w-full"}>
					{label && <p className={"text-black/40 absolute top-4 left-5"}>{label}</p>}
					<input
						className={
							"bg-white h-[74px] rounded-lg px-5 pt-[38px] pb-4 border border-solid border-black/10 text-sm text-black/20 placeholder:text-black/20 w-full focus:border-black/20"
						}
						placeholder={placeholder}
						disabled
					/>
					<Image
						className={"absolute bottom-4 right-5"}
						width={16}
						height={16}
						src={"/img/icons/checkmark.svg"}
						alt={"Подтверждено"}
					/>
				</div>
			);
		}
		case "big-input": {
			return (
				<div className={"relative w-[620px] lg:w-full"}>
					{label && <p className={"text-black/40 absolute top-4 left-5"}>{label}</p>}
					<input
						className={
							"bg-white h-[74px] rounded-lg px-5 pt-[38px] pb-4 border border-solid border-black/10 text-sm text-black-100 placeholder:text-black/20 w-full focus:border-black/20"
						}
						placeholder={placeholder}
					/>
				</div>
			);
		}
		default: {
			return (
				<div className={"w-full flex flex-col gap-3"}>
					{label && <p className={"text-sm font-semibold text-black-100"}>{label}</p>}
					<input
						type={getOnlyNumber ? "number" : "text"}
						className={clsx(
							"text-sm text-black-100 placeholder:text-black/20 w-full rounded-lg px-4 py-2.5 border border-solid border-black/10 focus:border-black/20",
							{
								"text-black/20": disabled,
							},
						)}
						placeholder={placeholder}
						value={value}
						disabled={!!disabled}
						onChange={e => setValue(e.target.value)}
					/>
				</div>
			);
		}
	}
}
