import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";

import resolvers from "./resolvers";

// The GraphQL schema in string form
const typeDefs = importSchema("typeDefs/schema.graphql");

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;
