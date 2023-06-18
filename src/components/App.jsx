import { ContactForm, ContactList, Notification, Filter } from './index';
import { Container, FormTitle, ContnactsTitle } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from 'redux/selector';

import fetchContact from 'redux/operation';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const items = useSelector(getItems);

  return (
    <Container>
      <FormTitle>Phonebook</FormTitle>
      <ContactForm />
      {items.length !== 0 && <Filter />}
      {items.length === 0 && (
        <Notification
          message={'This is where your added contacts will be displayed'}
        />
      )}
      {items.length !== 0 && (
        <>
          <ContnactsTitle>Contacts</ContnactsTitle>
          <ContactList contacts={items} />
        </>
      )}
    </Container>
  );
};
