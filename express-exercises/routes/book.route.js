const router = require("express").Router();
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "hello from books" });
  } catch (e) {
    next(e);
  }
});
router.post("/", (req, res, next) => {
  try {
    const data = Object.keys(req.body).length;
    if (!data) throw new Error("Body missing");
    console.log({ data: req.body });
    res.json({ msg: "hello from books" });
  } catch (e) {
    next(e);
  }
});
router.post("/", (req, res, next) => {
  try {
    const data = Object.keys(req.body).length;
    if (!data) throw new Error("Body missing");
    console.log({ data: req.body });
    res.json({ msg: "hello from books" });
  } catch (e) {
    next(e);
  }
});
router.post("/", (req, res, next) => {
  try {
    const data = Object.keys(req.body).length;
    if (!data) throw new Error("Body missing");
    console.log({ data: req.body });
    res.json({ msg: "hello from books" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
