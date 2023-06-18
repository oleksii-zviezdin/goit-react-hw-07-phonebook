import { LabelFilter } from './Filter.styled';
import { Input, Span } from 'components/ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';
import { selectFilter } from 'redux/selector';

export const Filter = () => {
  const filteValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <LabelFilter>
      <Span>Find contacts by name</Span>
      <Input type="text" value={filteValue} onChange={changeFilter} />
    </LabelFilter>
  );
};
