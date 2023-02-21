import React from 'react';

const Contacts = ({contacts, onDeleteContact, onAddContact}) => {
    const handleDeleteClick = (contactId) => {
        onDeleteContact(contactId);
    };

    return (
        <div>
            <h1>Contacts</h1>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.name}</td>
                        <td>{contact.username}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => handleDeleteClick(contact.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={onAddContact}>Add Contact</button>
        </div>
    );
};

export default Contacts;
