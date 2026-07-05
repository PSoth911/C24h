export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("orders", "subtotal", {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  });

  await queryInterface.addColumn("orders", "delivery_fee", {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  });

  await queryInterface.addColumn("orders", "discount_amount", {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0,
  });

  await queryInterface.addColumn("orders", "coupon_code", {
    type: Sequelize.STRING(50),
    allowNull: true,
  });
}

export async function down(queryInterface) {
  await queryInterface.removeColumn("orders", "coupon_code");
  await queryInterface.removeColumn("orders", "discount_amount");
  await queryInterface.removeColumn("orders", "delivery_fee");
  await queryInterface.removeColumn("orders", "subtotal");
}
