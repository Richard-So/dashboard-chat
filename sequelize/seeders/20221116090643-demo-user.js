'use strict'
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'admin',
          first_name: 'Richard',
          password: 'admin1234',
          email: 'pimfy1@hotmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      'users',
      [
        {
          username: 'admin',
          first_name: 'Richard',
          password: 'admin1234',
          email: 'pimfy1@hotmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    )
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
