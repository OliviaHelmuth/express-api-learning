const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const expphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// !!! always put this before the API Route !!!


// Members API Route
app.use("/api/members", require("./routes/api/members"));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
