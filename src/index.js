const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const models, { sequelize } = require('./models')


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
})

sequelize.sync().then(async () => {
  server.listen().then(({ url }) => console.log('Server running localhost:4000'))
})


