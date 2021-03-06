"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "People",
      {
        id: {
          type: Sequelize.INTEGER(11),
          primaryKey: true,
          autoIncrement: true,
        },
        email: { type: Sequelize.STRING, allowNull: false, unique: true },
        profile_picture: { type: Sequelize.STRING, allowNull: false },
        first_name: { type: Sequelize.STRING, allowNull: false },
        middle_name: { type: Sequelize.STRING, allowNull: true },
        last_name: { type: Sequelize.STRING, allowNull: false },
        age: { type: Sequelize.INTEGER, allowNull: true },
        is_verified: { type: Sequelize.BOOLEAN, defaultValue: false },
        is_suspended: { type: Sequelize.BOOLEAN, defaultValue: false },
        passwordHash: { type: Sequelize.STRING, allowNull: false },
        address: { type: Sequelize.JSON, defaultValue: "{}" },
        created_at: { type: Sequelize.DATE, allowNull: true },
        updated_at: { type: Sequelize.DATE, allowNull: true },
      },
      {
        logging: console.log,
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("People");
  },
};
