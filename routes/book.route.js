const router = require("express").Router();
const { numberFormatter } = require("../utils/numberFormatter");
const { textShortner } = require("../utils/stringFormatter");
router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    m;
    a;
    res.json({ msg: `Hello from id ${id}` });
  } catch (e) {
    next(e);
  }
});
// post method
// router.post("/:number", (req, res) => {
//   console.log({ query: req.query });
//   console.log({ body: req.body });
//   console.log({ params: req.params });
//   const result = numberFormatter(
//     req.query.number || req.body.number || req.params.number
//   );
//   res.json({ msg: result });
// });
router.post("/:text", (req, res) => {
  console.log({ query: req.query });
  console.log({ body: req.body });
  console.log({ params: req.params });
  const result = textShortner(
    req.query.text || req.body.text || req.params.text
  );
  res.json({ msg: result });
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
