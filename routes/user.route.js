const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ msg: "Hello from user" });
});
router.post("/", (req, res) => {
  console.log(req.body);
});
router.put("/", (req, res) => {
  console.log(req.body);
});
router.get(":/id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: "Hello from user id ${id}" });
});
module.exports = router;
