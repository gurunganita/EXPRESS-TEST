const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ msg: "Hello from blogs" });
});
router.post("/", (req, res) => {
  console.log(req.body);
});
router.patch("/", (req, res) => {
  console.log(req.body);
});
router.get(":/id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: "Hello from blogs id ${id}" });
});
module.exports = router;
