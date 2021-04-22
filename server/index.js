let { ApolloServer } = require('apollo-server');
let typeDefs = require('./Schema/schema');
let resolvers = require('./Resolvers')
let apolloserver = new ApolloServer({typeDefs, resolvers});

apolloserver.listen().then(({url}) => {
    console.log(`server is running on port ${url}`)
})
