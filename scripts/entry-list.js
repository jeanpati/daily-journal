import { deleteEntry, getJournalEntries } from "./database.js";
import { moodState } from "./filter/mood-filter.js";

export const entryList = async () => {
  let entryHTML = "";
  const allEntries = await getJournalEntries();

  // Check if moodState is 0 (Show All)
  if (moodState.moodId === 0) {
    // Render all entries if moodState is 0
    allEntries.forEach((entry) => {
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
  } else {
    // Otherwise only show entries that match moodState.moodId
    allEntries.forEach((entry) => {
      if (Number(entry.moodId) === moodState.moodId) {
        entryHTML += `
            <section class="journalEntry">
              <p>${entry.date}</p>
              <h5>Title: ${entry.title}</h5>
              <p>Body: ${entry.body}</p>
              <p>Mood: ${entry.mood.label}</p>
              <button value=${entry.id} class="deleteEntry">Delete</button>
            </section>
          `;
      }
    });
  }

  return entryHTML;
};

const handleDeleteClick = (clickEvent) => {
  if (clickEvent.target.classList.contains("deleteEntry")) {
    deleteEntry(clickEvent.target.value);
  }
};

export const addDeleteListener = () => {
  document
    .querySelector("#entries")
    .addEventListener("click", handleDeleteClick);
};
