const router = require("express").Router();
const bookRouter = require("./book.route");
router.get("/", (req, res, next) => {
  try {
    console.log({ body: req.body });
    res.json({ msg: "hello from index" });
  } catch (e) {
    next(e);
  }
});
router.use("/api/v1/books", bookRouter);
module.exports = router;
