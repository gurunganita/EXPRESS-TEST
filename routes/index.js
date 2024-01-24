/*const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.json({ msg: `Hello World` });
});

//Route 2
router.get("/:fname/:lname", (req, res) => {
  const fname = req.params.fname;
  const lname = req.params.lname;
  res.json({ msg: `Hello ${fname} ${lname}` });
});

router.get("/:a/:b", (req, res) => {
  const { a, b } = req.params;
  const c = Number(a) + Number(b);
  res.json({ msg: `The sum is ${c}` });
});
module.exports = router;
*/
const router = require("express").Router();
const bookRouter = require("./book.route");
const blogsRouter = require("./blogs.route");
const rolesRouter = require("./roles.route");
const categoriesRouter = require("./categories.route");
const userRouter = require("./user.route");

router.get("/", (req, res) => {
  res.json({ msg: "Hello from index" });
});

router.use("/books", bookRouter);
router.use("/blogs", blogsRouter);
router.use("/roles", rolesRouter);
router.use("/categories", categoriesRouter);
router.use("/users", userRouter);
module.exports = router;
