import resolvers from './resolvers';

// Define our schema using the GraphQL schema language
const typeDefs = `
    type User {
        id: String!
        first_name: String!
        last_name: String!
        email: String!
    }

    type Collection {
        id: String!
        name: String!
    }

    type Query {
        me: User
        collections: [Collection]
    }

    type Mutation {
        signup (first_name: String!, last_name: String!, email: String!, password: String!): String
        login (email: String!, password: String!): String
        create_collection (name: String!): String
    }
`
export default ({ typeDefs, resolvers })