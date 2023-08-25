import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListWrap } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const Filter = useSelector(getFilter);
  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(Filter.toLowerCase())
  );

  return (
    <ContactListWrap>
      {filtered.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </ContactListWrap>
  );
};
