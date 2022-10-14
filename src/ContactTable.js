import { render } from "@testing-library/react";
import React, { useEffect } from "react";

const ContactTable = (props) => {
  useEffect(() =>{
    window.scrollTo({top:0, behavior: 'smooth'})
  })

 return(
    <div className="table-wrap container2">
    <h2>Search for Contacts</h2>
    <table className="table">
      <thead className="table-head">
        <tr className="table-row">
          <th className=" table__cell u-text-left">First Name</th>
          <th className=" table__cell u-text-left">Last Name</th>
          <th className=" table__cell u-text-left">Phone Number</th>
          <th className=" table__cell u-text-left">Email</th>
          <th className=" table__cell u-text-left">Actions</th>
        </tr>
      
      </thead>
        {props.contacts.length > 0 ? (
          props.contacts.map((contact) => (
            
            <tbody key={contact.id}>
            <tr >
              <td className="element">{contact.first_name}</td>
              <td className="element hide">{contact.last_name}</td>
              <td className="element hide">{contact.phone}</td>
              <td className="element">{contact.email}</td>
              <td className="element hide">
                <button
                  onClick={() => {
                    props.editRow(contact) && window.scrollTo({top:0, behavior: 'smooth'})
                  }}
                  className="button muted-button"
                  >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteContact(contact.id)}
                  className="button muted-button"
      
                  >
                  Delete
                </button>
              </td>
            </tr>
              
            
        </tbody>
            ))
            ) : (
              <tr>
            <td >No contacts</td>
          </tr>
        )}
    </table>
    </div>
            
  )
}
export default ContactTable;

