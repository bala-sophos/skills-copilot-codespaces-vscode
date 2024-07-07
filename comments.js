// Create Web Server
// Create a web server that listens on port 3000 and serves the comments.html file
// to the user when they visit http://localhost:3000 in their web browser.

// Note: You do not need to use the fs module to read the comments.html file. Instead, use the res.sendFile method.

// The comments.html file has been provided for you. You can find it here: comments.html

// You can use the following code to create the web server:

// const express = require('express');
// const app = express();

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });
// The comments.html file is located in the same directory as the comments.js file.

// To complete this challenge, you need to:

// Create a new Express application
// Create a route that serves the comments.html file when a GET request is made to the root URL ('/')
// Listen on port 3000
// You can test your code by running the comments.js file and visiting http://localhost:3000 in your web browser.

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/comments.html');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});