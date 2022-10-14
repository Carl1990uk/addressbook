import React, { useState, useEffect } from "react";

const EditContact = (props) => {
  const [contact, setContact] = useState(props.currentContact);

  useEffect(() => {
    setContact(props.currentContact);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateContact(contact.id, contact);
      }}
    >
      <label>First Name</label>
      <input
        type="text"
        name="first_name"
        value={contact.first_name}
        onChange={handleInputChange}
      />
      <label>Last Name</label>
      <input
        type="text"
        name="last_name"
        value={contact.last_name}
        onChange={handleInputChange}
      />
      <label>Phone</label>
      <input
        type="number"
        name="phone"
        value={contact.phone}
        onChange={handleInputChange}
      />
      <label>email</label>
      <input
        type="text"
        name="email"
        value={contact.email}
        onChange={handleInputChange}
      />
      <button
        disabled={!contact.email || !contact.phone || !contact.first_name || !contact.last_name}>Update contact</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditContact;
