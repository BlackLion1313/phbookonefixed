import React, { useState, useEffect } from 'react';
import Contacts from './components/Contacts/Contacts';
import AddContactForm from './components/AddContactForm/AddContactForm';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState('contacts');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setContacts(data));
  }, []);

  const handleAddContact = () => {
    setCurrentPage('addContact');
  };

  const handleDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const handleSaveContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setCurrentPage('contacts');
  };

  const handleCancel = () => {
    setCurrentPage('contacts');
  };

  let content;

  if (currentPage === 'contacts') {
    content = (
        <Contacts
            contacts={contacts}
            onDeleteContact={handleDeleteContact}
            onAddContact={handleAddContact}
        />
    );
  } else if (currentPage === 'addContact') {
    content = <AddContactForm onSave={handleSaveContact} onCancel={handleCancel} />;
  }

  return (
      <div>
        <nav>
          <button onClick={() => setCurrentPage('contacts')}>Contacts</button>
          <button onClick={() => setCurrentPage('addContact')}>Add Contact</button>
        </nav>
        {content}
      </div>
  );
};

export default App;
