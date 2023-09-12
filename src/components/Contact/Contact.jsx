import { ContactWrap, ButtonDel } from "./Contact.styled";
import PropTypes from 'prop-types';

export const Contact = ({contact, onDelete})=>{
    const {id, name, number} = contact;
    return(
    <ContactWrap>
        <p>{name}: {number}</p>
        <ButtonDel onClick={()=> onDelete(id)}>Delete</ButtonDel>
    </ContactWrap>
    )
}

Contact.propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }),
     onDelete: PropTypes.func,
}