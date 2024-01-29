const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ msg: "Hello from categories" });
});
router.put("/", (req, res) => {
  console.log(req.body);
});
router.delete("/", (req, res) => {
  console.log(req.body);
});
router.get(":/id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: "Hello from categories id ${id}" });
});
module.exports = router;
