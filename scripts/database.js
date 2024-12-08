import { transientState } from "./transient-state.js";

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

export const postEntry = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };

  const res = await fetch("http://localhost:8088/entries", postOptions);

  const newEntryEvent = new CustomEvent("newEntry");
  document.dispatchEvent(newEntryEvent);
};

export const deleteEntry = async (entryId) => {
  const res = await fetch(`http://localhost:8088/entries/${entryId}`, {
    method: "DELETE",
  });

  const newDeleteEvent = new CustomEvent("deletedEntry");
  document.dispatchEvent(newDeleteEvent);
};

export const getMoods = () => {
  return fetch("http://localhost:8088/moods") // Fetch from the API
    .then((res) => res.json()) // Parse as JSON
    .then((moods) => {
      return moods;
    });
};
