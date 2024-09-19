const url = 'https://rapid-porn.p.rapidapi.com/photo?category=ass';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '79ee327c44mshb131b363929a714p176e2ajsn2cb538f9e706',
		'x-rapidapi-host': 'rapid-porn.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}