const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Message {
    id: ID!
    text: String!
    user: User!
  }

  type Query {
    user(id: ID!): User
    messages: [Message!]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
    createMessage(userId: ID!, text: String!): Message!
  }
`;

module.exports = typeDefs;
