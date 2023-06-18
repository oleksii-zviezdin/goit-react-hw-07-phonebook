import { ContactForm, ContactList, Notification, Filter } from './index';
import { Container, FormTitle, ContnactsTitle, Error } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading, selectItems } from 'redux/selector';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import fetchContact from 'redux/operation';
import { useEffect } from 'react';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const items = useSelector(selectItems);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Container>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm />
        {items?.length !== 0 && !isError && <Filter />}
        {items?.length === 0 && (
          <Notification
            message={'This is where your added contacts will be displayed'}
          />
        )}
        {isError && <Error>{isError}</Error>}
        {isLoading && <Loader />}
        {items?.length !== 0 && !isError && (
          <>
            <ContnactsTitle>Contacts</ContnactsTitle>
            <ContactList contacts={items} />
          </>
        )}
      </Container>
      <ToastContainer position="top-center" autoClose={3000} theme="dark" />
    </>
  );
};
