/* 
    type - способ валидации, например, phone или inn
    value - что валидируем
*/
export default function validation(type, value) {
	let errors = [];

	switch (type) {
		case "phone":
			if (value.length !== 18) errors.push("Некорректный номер телефона");
			break;
		case "inn":
			if (value.length !== 10 && value.length !== 12) errors.push("Некорректный ИНН");
			break;
		default:
			isValid = false;
			errors.push("Некорректный способ валидации");
			break;
	}

	return {
		isValid: !(errors.length > 0),
		errors,
	};
}
