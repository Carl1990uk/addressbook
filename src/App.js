import React, { useState, Fragment} from "react";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactTable from "./ContactTable";
import JSONDATA from "./data";

const App = () => {
  const initialFormState = { id: null, first_name: "", name: "", email: "" };
  const [contacts, setContacts] = useState(JSONDATA);
  const [currentContact, setCurrentContact] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [searchText, setSearchText] = useState("");
  const addContact = (contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  };
  const deleteContact = (id) => {
    setEditing(false);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };
  const editRow = (contact) => {
    setEditing(true);
    setCurrentContact({
      id: contact.id,
      first_name: contact.first_name,
      last_name: contact.last_name,
      phone: contact.phone,
      email: contact.email
    });
  };
  const updateContact = (id, updatedContact) => {
    setEditing(false);
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };
 
  return (
    <>
    <div className="container">
      <h1>Address Book</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit contact</h2>
              <EditContact
                editing={editing}
                setEditing={setEditing}
                currentContact={currentContact}
                updateContact={updateContact}
                />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add contact</h2>
              <AddContact addContact={addContact} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>Search for Contacts</h2>
          <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
      />
      <div>
          {contacts.filter((val) => {
            if (searchText === "") {
              
            } else if (
              val.first_name.toLowerCase().includes(searchText.toLowerCase()) || 
              val.last_name.toLowerCase().includes(searchText.toLowerCase()) ||
              val.phone.toLowerCase().includes(searchText.toLowerCase()) ||
              val.email.toLowerCase().includes(searchText.toLowerCase()) 
            ) {
              return (
                val
              );
            
            } 
            else {
              return "";
            }
          }).map((data, index) => (
            <>
           
            <div className="table-wrap">
              <table className="table">
                <thead className="table-head">
                  <tr className="table-row">
                    <th className="element table__cell u-text-left">First Name</th>
                    <th className="element table__cell u-text-left">Last Name</th>
                    <th className="element table__cell u-text-left">Phone Number</th>
                    <th className="element table__cell u-text-left">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="element">{data.first_name}</td>
                  <td className="element">{data.last_name}</td>
                  <td className="element">{data.phone}</td>
                  <td className="element">{data.email}</td>
                </tr>
              </tbody>
              </table>
              </div>
            </>
          ))}
      </div>
    </div>
          <ContactTable
            contacts={contacts}
            editRow={editRow}
            deleteContact={deleteContact}
            />
        </div>
      </div>
    </div>
            </>
  );
};

export default App;
