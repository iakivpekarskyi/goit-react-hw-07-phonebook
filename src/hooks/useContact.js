import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectFilter, selectContacts } from 'redux/selectors';
import { setFilter, clearFilter } from 'redux/filterSlice';
import { fetchContacts, addContact, deleteContact } from 'redux/operations';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const addNewContact = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const removeContact = id => {
    dispatch(deleteContact(id));
  };

  const fetchAllContacts = useCallback(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const showFilter = filterValue => {
    dispatch(setFilter(filterValue));
  };

  const clearContactFilter = () => {
    dispatch(clearFilter());
  };

  const filteredContacts = contacts.filter(
    contact =>
      contact && contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return {
    contacts,
    filter,
    filteredContacts,
    showFilter,
    clearContactFilter,
    addNewContact,
    removeContact,
    fetchAllContacts,
  };
};
