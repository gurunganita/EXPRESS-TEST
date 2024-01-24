const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ msg: "Hello from categories" });
});
router.post("/", (req, res) => {
  console.log(req.body);
});
router.delete("/", (req, res) => {
  console.log(req.body);
});
router.get(":/id", (rq, res) => {
  const { id } = req.params;
  res.json({ msg: "Hello from categories id ${id}" });
});
module.exports = router;
