import api from "../api"

class ScoreDataService {
	getAll() {
		return api.get('/scores')
	}

	getScoreSuperior(value) {
		return api.get(`/scores/${value}`)
	}

	create(data) {
		return api.post('/scores', data)
	}

	deleteAll() {
		return api.delete('/scores')
	}

}

export default new ScoreDataService();