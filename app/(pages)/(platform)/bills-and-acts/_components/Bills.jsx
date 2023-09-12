import Table from "@/app/(pages)/(platform)/bills-and-acts/_components/Table";

export default function Bills() {
	return (
		<Table
			head={[
				{
					title: "Название",
				},
				{
					title: "Дата",
					canBeSorted: true,
				},
				{
					title: "Статус",
				},
				{
					title: "Скачать",
				},
			]}
			content={[
				[
					{
						text: "Счет №124",
						type: "title",
					},
					{
						text: "4 апреля 2023",
						type: "date",
					},
					{
						text: "Ожидание",
						type: "status",
					},
					{
						type: "download",
					},
				],
				[
					{
						text: "Счет №124",
						type: "title",
					},
					{
						text: "4 апреля 2023",
						type: "date",
					},
					{
						text: "Оплачен",
						type: "status",
					},
					{
						type: "download",
					},
				],
				[
					{
						text: "Счет №124",
						type: "title",
					},
					{
						text: "4 апреля 2023",
						type: "date",
					},
					{
						text: "Не оплачен",
						type: "status",
					},
					{
						type: "download",
					},
				],
			]}
		/>
	);
}
