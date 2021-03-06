var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
	var RomVariant = sequelize.define('RomVariant', {
			name: {
				type: Sequelize.STRING(32),
				unique: true,
			},
			subdirectory: {
				type: Sequelize.STRING(255),
				notEmpty: false,
			},
			displayName: {
				type: Sequelize.STRING(255),
			},
	});

	return RomVariant;
}
