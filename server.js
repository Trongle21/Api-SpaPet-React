const jsonServer = require("json-server");
const cors = require("cors"); // Import cors library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors()); // Enable CORS for all routes
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
