export const shortDate = (dateString: string) => {
	return new Date(dateString).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	});
};

export const shortTime = (dateString: string) => {
	return new Date(dateString).toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit'
	});
};