import { getJournalEntries } from "./database.js";

export const entryList = async () => {
  let entryHTML = "";
  const allEntries = await getJournalEntries();
  console.log(allEntries);

  allEntries.forEach((entry) => {
    console.log(entry);
    entryHTML += `
      <section class="journalEntry">
        <p>${entry.date}</p>
        <h5>Title: ${entry.title}</h5>
        <p>Body: ${entry.body}</p>
        <p>Mood: ${entry.mood.label}</p>
      </section>
    `;
  });
  return entryHTML;
};
