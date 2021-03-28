const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware to parse req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve our public folder/static files
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => console.log(`App listening on URL: http://localhost:${PORT}`));