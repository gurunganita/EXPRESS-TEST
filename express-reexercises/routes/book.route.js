const router = require("express").Router();
const checkRole = (userRole, SysRole) => {
  const result = userRole.filter((role) => SysRole.Role.includes(role));
  if (!result) throw new Error({ msg: "Permisssion denied" });
  next();
};

router.get("/user", checkRole("user"), (req, res, next) => {
  try {
    if (role != user.role) {
      res.json({ msg: "not access of user" });
    }
    res.json({ msg: "user access" });
  } catch (e) {
    next(e);
  }
});
router.get("/admin", checkRole("admin"), (req, res, next) => {
  try {
    if (role != admin.role) {
      res.json({ msg: "not admin access" });
    }
    res.json({ msg: "admin access" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
