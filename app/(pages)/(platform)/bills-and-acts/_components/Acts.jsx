import Table from "@/app/(pages)/(platform)/bills-and-acts/_components/Table";

export default function Acts() {
	return (
		<Table
			head={[
				{
					title: "Название",
				},
				{
					title: "Дата формирования",
					canBeSorted: true,
				},
				{
					title: "Дата подтверждения",
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
						text: "Акт 04.2023",
						type: "title",
					},
					{
						text: "4 апреля 2023",
						type: "date",
					},
					{
						text: "Акт не потвержден",
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
						text: "Акт 04.2023",
						type: "title",
					},
					{
						text: "4 апреля 2023",
						type: "date",
					},
					{
						text: "Акт не потвержден",
						type: "date",
					},
					{
						text: "Принят",
						type: "status",
					},
					{
						type: "download",
					},
				],
				[
					{
						text: "Акт 04.2023",
						type: "title",
					},
					{
						text: "4 апреля 2023",
						type: "date",
					},
					{
						text: "Акт не потвержден",
						type: "date",
					},
					{
						text: "Принят",
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
