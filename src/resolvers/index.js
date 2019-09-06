const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findById(id);
    },
    async messages(root, args, { models }) {
      return models.Message.findAll();
    }
  },
  Mutation: {
    async createUser(root, { name, email, password }, { models }) {
      return models.User.create({
        name,
        email,
        password: await bcrypt.hash(password, 12)
      });
    },
    async createMessage(root, { userId, text }, { models }) {
      return models.Message.create({ userId, text });
    }
  }
};

module.exports = resolvers;
