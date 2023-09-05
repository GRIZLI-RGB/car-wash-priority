export default function TitleAndOpinion({ title, children }) {
	return (
		<div className={"text-center"}>
			<h1
				className={
					"mb-2 text-2xl leading-[150%] font-semibold text-black-100"
				}>
				{title}
			</h1>
			<p className={"text-sm text-black/40"}>{children}</p>
		</div>
	);
}
