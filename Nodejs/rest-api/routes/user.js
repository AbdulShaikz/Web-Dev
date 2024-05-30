const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
  handleDisplayAllUsers,
} = require("../controllers/user");

router.get("/display", handleDisplayAllUsers);

router.route("/:id")
  .get(handleGetUserById)
  .put(handleUpdateUserById)
  .delete(handleDeleteUserById);

router.route("/")
  .get(handleGetAllUsers)
  .post(handleCreateNewUser);

module.exports = router;
