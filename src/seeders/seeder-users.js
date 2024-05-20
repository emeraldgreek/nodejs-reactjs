'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@gmail.com',
        password: "123456",
        firstName: 'Nguyen Thi',
        lastName: 'Hoang Hieu',
        address: "Thanh Pho Hue",
        phonenumber: "0384391107",
        gender: 1,
        image: "My photo",
        roleId: "ROLE",
        positionId: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
