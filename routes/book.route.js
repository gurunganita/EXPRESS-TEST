const router = require("express").Router();
router.get("/", (req, res) => {
  res.json({ msg: "Hello from book" });
});
// post method
router.post("/", (req, res) => {
  console.log(req.body);
});
router.put("/", (req, res) => {
  console.log(req.body);
});
router.get(":/id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: "Hello from book id ${id}" });
});
module.exports = router;
// colon id / dynamic id*/
