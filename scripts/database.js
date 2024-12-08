export const getJournalEntries = () => {
  return fetch("http://localhost:8088/entries?_embed=mood") // Fetch from the API
    .then((res) => res.json()) // Parse as JSON
    .then((entries) => {
      return entries;
    });
};

export const saveJournalEntry = async (newEntry) => {
  // Use `fetch` with the POST method to add your entry to your API
  await fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEntry),
  })
    .then((res) => {
      res.json();
    })
    .then(() => {
      //  Broadcast the state change event
      const event = new CustomEvent("entrySaved");
      window.dispatchEvent(event);
    });
};

export const getMoods = () => {
  return fetch("http://localhost:8088/moods") // Fetch from the API
    .then((res) => res.json()) // Parse as JSON
    .then((moods) => {
      return moods;
    });
};
