import { useState } from "react";
import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { useEffect } from "react";

export const App =()=> {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const filterContacts = contacts.filter(contact => contact.name.toUpperCase().includes(filter.toUpperCase()));

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null){
    setContacts(JSON.parse(savedContacts))
  } }, []);

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts))},[contacts])
  
  const deleteContact = (contactId) => {
    setContacts(prevContacts =>prevContacts.filter(contact => contact.id !== contactId));
  };

  
  const searchContact = filterContact => {
    setFilter(filterContact)
  };

  const addContact = newContact =>{
    const { name, number } = newContact;
  
    const isExist = contacts.some(
      contact => contact.name.toUpperCase() === name.toUpperCase()
        || contact.number === number
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return
    }
  
    setContacts(prevContacts =>[...prevContacts, {id: nanoid(), ...newContact}]);
    }

    
  
  return(
  <Layout>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact}/>
    
  <h2>Contacts</h2>
  <Filter filter={filter} onSearchContact={searchContact}/>
  <ContactList filterContactsList={filterContacts} deleteContact={deleteContact}/>
  </Layout>
  )

}