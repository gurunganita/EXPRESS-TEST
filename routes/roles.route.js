const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ msg: "Hello from roles" });
});
router.post("/", (req, res) => {
  console.log(req.body);
});
router.patch("/", (req, res) => {
  console.log(req.body);
});
router.get(":/id", (rq, res) => {
  const { id } = req.params;
  res.json({ msg: "Hello from roles id ${id}" });
});
module.exports = router;
