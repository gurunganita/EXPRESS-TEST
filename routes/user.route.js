const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ msg: "Hello from user" });
});
// router.post("/", (req, res) => {
//   console.log(req.body);
// });
// router.put("/", (req, res) => {
//   console.log(req.body);
// });
router.get("/", (req, res, next) => {
  try {
    res.json({ msg: "Hello from users" });
  } catch (e) {
    next(e);
  }
});
router.post("/", (req, res, next) => {
  try {
    res.json({ msg: "Create new users" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
