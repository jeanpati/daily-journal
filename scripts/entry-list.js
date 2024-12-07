import { getJournalEntries } from "./database.js";

let entryHTML = "";
export const entryList = () => {
  const allEntries = getJournalEntries();
  allEntries.forEach((entry) => {
    entryHTML += `
      <section class="journalEntry">
        <p>${entry.date}</p>
        <h5>Title: ${entry.title}</h5>
        <p>Body: ${entry.body}</p>
        <p>Mood: ${entry.mood}</p>
      </section>
    `;
  });
  return entryHTML;
};
