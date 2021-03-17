module.exports = (sequelize, Sequelize) => {
    const Goods = sequelize.define("goods", {
     id: {
        type: Sequelize.INTEGER,
        primaryKey: true
     },
      name: {
        type: Sequelize.STRING
      },
      hungry: {
        type: Sequelize.INTEGER
      },
      mental: {
        type: Sequelize.INTEGER
      }
    });
  
    return Goods;
  };