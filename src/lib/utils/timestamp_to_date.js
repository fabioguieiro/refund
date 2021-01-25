export function timestamp_to_date(timestamp) {
	const date = new Date(timestamp).toLocaleDateString('pt-BR');
	return date;
}