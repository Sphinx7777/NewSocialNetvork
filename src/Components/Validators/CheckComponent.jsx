

export const emptyField =(values) => {
	if(values && values) return undefined;
	return 'Обязательное поле';
};
export const maxLengthCreator=(maxLength) =>(values) => {
	if(values && values.length>maxLength) return `Максимум ${maxLength} символов`;
	return undefined;
};
export const minLengthCreator=(minLength) =>(values) => {
	if(values && values.length<minLength) return `Минимум ${minLength} символов`;
	return undefined;
};