const express = require("express");
const router = express.Router();

const {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
  getContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(addContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
