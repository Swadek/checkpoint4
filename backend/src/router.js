const express = require("express");

const router = express.Router();

const adminControllers = require("./controllers/AdminControllers");
const siteControllers = require("./controllers/SiteControllers");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

// admin management
router.post(
  "/admins/login",
  adminControllers.authenticationCheck,
  verifyPassword
);
router.put(
  "/admins/:id",
  verifyToken,
  hashPassword,
  adminControllers.modifyAdmin
);

// site management
router.get("/sites", siteControllers.browse);
router.get("/sites/:id", siteControllers.read);
router.post("/sites", verifyToken, siteControllers.AddSite);
router.put("/sites/:id", verifyToken, siteControllers.updateSite);
router.delete("/sites/:id", verifyToken, siteControllers.destroy);

module.exports = router;
