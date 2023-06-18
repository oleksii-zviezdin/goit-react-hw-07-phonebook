export const getItems = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;

export const getFilteredContacts = (filter, contacts) => {
  if (!filter) return contacts;

  const normalizedFilter = filter.toLowerCase();
  if (contacts.length !== 0)
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
};
