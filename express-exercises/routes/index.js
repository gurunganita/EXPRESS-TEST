const router = require("express").Router();
const bookRouter = require("./book.route");
const apiIndex = "/api/v2";
router.get("/", (req, res, next) => {
  try {
    console.log({ body: req.body });
    res.json({ msg: "hello from index" });
  } catch (e) {
    next(e);
  }
});
router.use(`${apiIndex}/books`, bookRouter);
module.exports = router;
