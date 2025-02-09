const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  try {
    server.listen(port);
    console.log(`Server is listening on port ${port}`);
  } catch (error) {
    console.error(`Failed to start server on port ${port}:`, error);
    process.exit(1); // Exit with a non-zero code to indicate failure
  }
};

startServer();