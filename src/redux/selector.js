export const selectItems = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const getFilteredContacts = (filter, contacts) => {
  if (!filter) return contacts;

  const normalizedFilter = filter.toLowerCase();
  if (contacts.length !== 0)
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
};
