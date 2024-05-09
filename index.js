const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: true,
    methods: "GET,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
);

require("./startup/routes")(app);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on port ${port}`));