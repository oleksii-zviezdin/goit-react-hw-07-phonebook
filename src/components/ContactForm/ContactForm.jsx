import { Form, Span, AddButton, Label, Input } from './ContactForm.styled';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from 'redux/selector';
import { addContact } from 'redux/operation';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const formReff = useRef(null);
  const contacts = useSelector(selectItems);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setPhone(value);
    }
  };

  const handleAddContactSubmit = e => {
    e.preventDefault();

    const isIncludeContactName = contacts.find(
      contact => contact.name === name
    );
    const isIncludeContactNumber = contacts.find(
      contact => contact.phone === phone
    );

    if (isIncludeContactName) {
      return toast.warning(`"${name}" is already in contacts`);
    } else if (isIncludeContactNumber) {
      return toast.warning(`"${phone}" is already in contacts`);
    } else {
      const contact = { name, phone };
      dispatch(addContact(contact));
      setName('');
      setPhone('');
    }
  };

  return (
    <Form ref={formReff} onSubmit={handleAddContactSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          onChange={handleChange}
          type="tel"
          name="number"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
};
