const http = require("http");
const consola = require("consola");
const app = require('./app');

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

app.set("port", port);

async function run() {
    const server = http.createServer(app);
  
    server.listen(port, host);
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    });
  }
  
  run();