import { PropTypes } from 'prop-types';
import { ContactItem, RemoveButton } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';
// import { deleteContact } from '../../redux/contactsSlice';

export const ContactListItem = ({ id, name, tel }) => {
  const dispatch = useDispatch();
  const hanldeDelete = () => {
    dispatch(deleteContact(id));
    // dispatch(deleteContact(id));
  };
  return (
    <ContactItem>
      <p>
        {name}: <span>{tel}</span>
      </p>
      <RemoveButton type="button" onClick={hanldeDelete}>
        Revome contact
      </RemoveButton>
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};
