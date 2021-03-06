import { ApolloEngine } from "apollo-engine";
import { microGraphiql, microGraphql } from "apollo-server-micro";
import micro, { send } from "micro";
import { get, post, router } from "microrouter";
import schema from "./schema";

const graphqlHandler = microGraphql({
  tracing: true,
  schema,
  cacheControl: true
});
const graphiqlHandler = microGraphiql({ endpointURL: "/graphql" });

const engine = new ApolloEngine({
  /**
   * Log into Apollo Engine via your browser and create a service to get an API key.
   * URL: https://engine.apollographql.com/
   */
  // apiKey: "API_KEY",
  logging: {
    level: "DEBUG" // Engine Proxy logging level. DEBUG, INFO (default), WARN or ERROR.
  }
});

const server = micro(
  router(
    get("/graphql", graphqlHandler),
    post("/graphql", graphqlHandler),
    get("/graphiql", graphiqlHandler),
    (_, res) => send(res, 404, "not found")
  )
);

engine.listen({
  httpServer: server,
  port: 8088
});
