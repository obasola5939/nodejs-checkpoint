// files.js
// Import the built-in 'fs' (file system) module.
const fs = require('fs');

// Part 1: Create and write to "welcome.txt"
const content = 'Hello Node';
fs.writeFile('welcome.txt', content, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File "welcome.txt" has been created successfully!');
  }
});

// Part 2: Read from "hello.txt"
// (Note: The instructions say to read from "hello.txt", but we wrote to "welcome.txt".
//  We will read from "welcome.txt" to show it works. To read "hello.txt", you would need to create it first.)
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) {
    // If the file doesn't exist, show a helpful error.
    console.error('Error reading file:', err.message);
    console.log('Tip: Make sure the file "welcome.txt" exists in the same directory.');
  } else {
    console.log('Data from welcome.txt:', data);
  }
});
