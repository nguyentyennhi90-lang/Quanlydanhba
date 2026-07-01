import React, { useEffect} from 'react'
import { Header } from '@/components/Header'
import { Main } from "@//components/Main"
export const Home = () => {
const [listContact, setListContact] = React.useState(() => {
  const savedContacts = localStorage.getItem("contacts");
  return savedContacts ? JSON.parse(savedContacts) : [];
});

const addContact = (name, phone) => {
  const newContact = {
    id: Date.now(),
    name: name,
    phone: phone,
  };

  const updatedContacts = [...listContact, newContact];
  setListContact(updatedContacts);
  localStorage.setItem("contacts", JSON.stringify(updatedContacts));
  
};
const deleteContact = (contactId) => {
  const updatedContacts = listContact.filter((contact) => contact.id !== contactId);
  setListContact(updatedContacts);
  localStorage.setItem("contacts", JSON.stringify(updatedContacts));
};
  return (
<div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <Header  />
      <Main  
        listContact={listContact}
        addContact={addContact}
        deleteContact={deleteContact}
      />    
    </div>
  )
}
