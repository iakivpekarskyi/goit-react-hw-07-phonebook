import {
  ListItem,
  Text,
  Button,
  ButtonContainer,
} from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem>
      <Text>
        {name}: {number}
      </Text>
      <ButtonContainer>
        <Button type="button" onClick={handleDeleteContact}>
          Delete Contact
        </Button>
      </ButtonContainer>
    </ListItem>
  );
};
