export const getJournalEntries = () => {
  return fetch("http://localhost:8088/entries") // Fetch from the API
    .then((res) => res.json()) // Parse as JSON
    .then((entries) => {
      return entries;
    });
};
