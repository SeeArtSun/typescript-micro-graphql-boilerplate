import { RequestHandler } from "micro";

const server: RequestHandler = (_, res) => {
  res.end("Hello, TypeScript");
};

export default server;
