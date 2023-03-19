'use strict';

const bcrypt = require('bcrypt');
const Psychologists = require('../../models/Psychologists');
const SALT_ROUNDS = 10;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const passwordHash = await bcrypt.hash('mysecretpassword', SALT_ROUNDS);

    await Psychologists.bulkCreate([
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: passwordHash,
        introduction: 'Hello, I am a psychologist',
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: passwordHash,
        introduction: 'Hi, I am a psychologist too',
      },
      {
        name: 'Diogo Scarpa',
        email: 'diogo.scarpa@example.com',
        password: passwordHash,
        introduction: 'Hola, soy un psicólogo',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await Psychologists.destroy({ where: {} });
  }
};