module.exports = (sequelize, Sequelize) => {
	const Score = sequelize.define("score", {
		name: {
			type: Sequelize.STRING
		},
		points: {
			type: Sequelize.REAL
		}
	});

	return Score;
}