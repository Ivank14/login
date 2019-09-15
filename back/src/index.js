const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers');
const store = createStore();
const isEmail = require('isemail');

const PersonaAPI = require('./datasources/user');

const server = new ApolloServer({
  context: async ({ req }) => {
    const auth = (req.headers && req.headers.authorization) || '';
    console.log(auth)
    return { user: auth};
  },
  typeDefs,
  resolvers,
  dataSources: () => ({
    personaAPI: new PersonaAPI({ store })
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

