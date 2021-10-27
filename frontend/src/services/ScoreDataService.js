async function fetchScores(url, method, data) {
	let options =
	{
		method: method,
		headers: {
			'Content-Type': 'application/json'
		}
	};
	if (data) {
		options.body = JSON.stringify(data);
	}
	const response = await fetch(url, options);
	return response.json();
}


class ScoreDataService {
	getAll() {
		return fetchScores('api/scores', 'GET');
	}

	getScoreSuperior(value) {
		return fetchScores(`api/scores/${value}`, 'GET');
	}

	create(data) {
		return fetchScores('api/scores', 'POST', data);
	}

	deleteAll() {
		return fetchScores('api/scores', 'DELETE');
	}

}

export default new ScoreDataService();