// server.js
// Import the built-in 'http' module to create a web server.
const http = require('http');

// Define the port our server will listen on.
const PORT = 3000;

// Create a server. The function handles incoming requests (req) and sends responses (res).
const server = http.createServer((req, res) => {
  // Set the response header with status code 200 (OK) and content type HTML.
  res.writeHead(200, { 'Content-Type': 'text/html' });
  // Write the HTML content to the response.
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Start the server and listen on the specified port.
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
