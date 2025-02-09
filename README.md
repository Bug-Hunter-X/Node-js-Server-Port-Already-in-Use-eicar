# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js where a server fails to start because the specified port is already in use.

## The Bug
The `server.listen()` method throws an error if the port is already bound by another process.  The provided `bug.js` demonstrates this scenario.  Running it while another server is using port 8080 will result in an error.

## The Solution
The `bugSolution.js` file provides a solution using error handling with a try...catch block to gracefully handle the port already in use error.  It will attempt to start the server, and if it fails, it will log an error message and exit with a non-zero status code indicating failure.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js` (make sure port 8080 is not already used).  It should run fine.
3. Run another Node.js server or any other server process that binds to port 8080.
4. Run `node bug.js` again.  This time it should throw an error because the port is already in use. 
5. Run `node bugSolution.js`. It should run without causing errors.