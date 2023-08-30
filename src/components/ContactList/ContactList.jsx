import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactListWrap } from './ContactList.styled';
import { useContacts } from 'hooks/useContact';

export const ContactList = () => {
  const { filteredContacts } = useContacts();

  return (
    <ContactListWrap>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} name={name} number={number} id={id} />;
      })}
    </ContactListWrap>
  );
};
