//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

//@desc Get contact ny id
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contact by ${req.params.id}` });
};

//@desc create contact
//@route POST /api/contacts
//@access public
const addContact = (req, res) => {
  res.status(201).json({ message: "Contact created" });
};

//@desc update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Deleted contact ${req.params.id}` });
};

module.exports = {
  getContacts,
  addContact,
  updateContact,
  deleteContact,
  getContact,
};
