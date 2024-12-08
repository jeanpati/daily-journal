import { deleteEntry, getJournalEntries } from "./database.js";

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
        <button value=${entry.id} class="deleteEntry">Delete</button>
      </section>
    `;
  });
  return entryHTML;
};

const handleDeleteClick = (clickEvent) => {
  console.log(clickEvent.target.value);
  if (clickEvent.target.classList.contains("deleteEntry")) {
    deleteEntry(clickEvent.target.value);
  }
};

export const addDeleteListener = () => {
  document
    .querySelector("#entries")
    .addEventListener("click", handleDeleteClick);
};
