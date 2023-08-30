import {
  ListItem,
  Text,
  Button,
  ButtonContainer,
} from './ContactListItem.styled';
import { useContacts } from 'hooks/useContact';

export const ContactListItem = ({ id, name, number }) => {
  const { removeContact } = useContacts();

  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <ButtonContainer>
        <Button type="button" onClick={() => removeContact(id)}>
          Delete Contact
        </Button>
      </ButtonContainer>
    </ListItem>
  );
};
