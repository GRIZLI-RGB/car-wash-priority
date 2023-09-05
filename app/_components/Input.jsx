export default function Input({ type, label, placeholder }) {
	switch (type) {
		case "one-number": {
			return (
				<input
					className={
						"text-center w-[58px] h-[58px] flex-middle rounded-lg font-semibold text-2xl leading-[150%] border border-solid border-black/20 bg-white"
					}
					type={"number"}
				/>
			);
		}
		default: {
			return (
				<div className={"w-full flex flex-col gap-3"}>
					{label && (
						<p className={"text-sm font-semibold text-black-100"}>
							{label}
						</p>
					)}
					<input
						type={"text"}
						className={
							"text-sm text-black-100 placeholder:text-black/40 w-full rounded-lg px-4 py-2.5 border border-solid border-black/10 focus:border-black/20"
						}
						placeholder={placeholder}
					/>
				</div>
			);
		}
	}
}
