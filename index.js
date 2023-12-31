const express = require("express");
const app = express();
const client = require("./routers/client");
const dashboard = require("./routers/dashboard");
const port = 3000;
const checkAuth = require("./middleware");


app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/client", client);

app.use("/api/v1/dashboard",checkAuth, dashboard);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
  