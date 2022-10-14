import React, { useState } from "react";

const AddContact = (props) => {
  const initialFormState = { id: null, first_name: "", last_name: "", email: "", phone: "" };
  const [contact, setContact] = useState(initialFormState);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };


  return (
    <form 
    className="inputs"
      onSubmit={(event) => {
        event.preventDefault();
        props.addContact(contact);
        setContact(initialFormState);
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
      <label>Phone Number</label>
      <input
        type="text"
        name="phone"
        value={contact.phone}
        onChange={handleInputChange}
      />
      <label>Email Address</label>
      <input
        type="text"
        name="email"
        value={contact.email}
        onChange={handleInputChange}
      />
      <button disabled={!contact.email || !contact.phone || !contact.first_name ||!contact.last_name}>Add new contact</button>
    </form>
  );
};

export default AddContact;
