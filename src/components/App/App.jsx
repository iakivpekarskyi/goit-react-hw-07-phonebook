import { Layout } from './App.styled';
import { GlobalStyles } from 'components/GlobalStyle';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import { useEffect } from 'react';
import { useContacts } from 'hooks/useContact';

export const App = () => {
  const { contacts, fetchAllContacts } = useContacts();

  useEffect(() => {
    fetchAllContacts();
  }, [fetchAllContacts]);

  return (
    <Layout>
      <ErrorBoundary fallback="Sorry something went wrong ">
        <GlobalStyles />
        <h1>Phone book</h1>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts && contacts.length !== 0 && <Filter />}
        <ContactList />
      </ErrorBoundary>
    </Layout>
  );
};
