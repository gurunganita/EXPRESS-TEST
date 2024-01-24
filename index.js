const express = require("express");
// const routing = require("./routes");
const indexRouter = require("./routes");
const app = express();
app.use(express.json());
// printing hello world (Route1)
app.use("/", indexRouter);

app.listen(8000, () => {
  console.log("application is running");
});
