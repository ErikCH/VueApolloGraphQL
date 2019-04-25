import { gql } from 'apollo-server-express';

export const typeDefs = gql`

type Query {
    helloWorld: String!
    dogs: [Dog!]!
}

type Dog {
    id: ID!
    name: String!
}

type Mutation {
    createDog(name: String!): Dog!
}

`;