import { selectFilter, selectItems } from 'redux/selector';
import { ContactListItem } from '../index';
import { ContnactsList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selector';

export const ContactList = () => {
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);

  const filteredContacts = getFilteredContacts(filter, contacts);
  return (
    <ContnactsList>
      {filteredContacts?.length === 0 && (
        <div style={{ textAlign: 'center' }}>
          <p>Sorry, but we did not find anything for this query</p>
          <p style={{ fontWeight: 'bold', fontSize: '24px' }}>"{filter}"</p>
        </div>
      )}
      {filteredContacts?.map(({ id, name, phone }) => {
        return <ContactListItem key={id} id={id} name={name} tel={phone} />;
      })}
    </ContnactsList>
  );
};
