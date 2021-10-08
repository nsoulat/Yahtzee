module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("player", {
        name: {
            type: Sequelize.STRING
        },
        birthDate: {
            type: Sequelize.DATEONLY
        },
        isPremium: {
            type: Sequelize.BOOLEAN
        }
    });

    return Player;
};