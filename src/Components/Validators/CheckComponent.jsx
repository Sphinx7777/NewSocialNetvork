

export const emptyField =(values) => {
	if(values) return undefined;
	return 'Required field';
};

export const maxLengthCreator=(maxLength) =>(values) => {
	if(values && values.length>maxLength) return `Max ${maxLength} symbols`;
	return undefined;
};

export const minLengthCreator=(minLength) =>(values) => {
	if(values && values.length<minLength) return `Minimum ${minLength} symbols`;
	return undefined;
};
