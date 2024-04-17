// index.js

const express = require('express');
const routes = require('./routes');

const app = express();

// Use the routes defined in routes.js
app.use(routes);

// Start the server
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
