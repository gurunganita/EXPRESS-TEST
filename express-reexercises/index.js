const express = require("express");
const indexRouter = require("./routes");
const app = express();
app.use(express.json());
// app.use((req, res, next) => {
//   const date = new Date().toISOString();
//   req.body.date = date();
//   next();
// });
app.use("/", indexRouter);
app.use((err, req, res, next) => {
  const errMsg = err ? err.toString() : "Something went wrong";
  res.status(500).json({ msg: errMsg });
});
app.listen(8000, () => {
  console.log("App is running on port 8000. Url is http://localhost:8000");
});
