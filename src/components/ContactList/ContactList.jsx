import { Contact } from "components/Contact/Contact";
import { ContactListWrap, ListItem } from "./ContactList.styled";
import PropTypes from 'prop-types';

export const ContactList =({filterContactsList, deleteContact})=>{
    return(
        <ContactListWrap>
          {filterContactsList.map(contact => (
            <ListItem key={contact.id}>
                <Contact contact={contact} onDelete={deleteContact}/>
            </ListItem>
          ))}
        </ContactListWrap>
    )
}

ContactList.propTypes = {
  filterContactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  deleteContact: PropTypes.func,
}