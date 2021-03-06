const message = (sequelize, DataTypes) => {
  const Message = sequelize.define("message", {
    text: {
      type: DataTypes.STRING,
      required: true
    }
  });
  Message.associate = models => {
    Message.belongsTo(models.User);
  };

  return Message;
};

module.exports = message;
