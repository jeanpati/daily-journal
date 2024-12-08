import { getMoods } from "../database.js";
export const moodState = {
  moodId: 0,
};

export const setMoodFilter = (chosenMood) => {
  moodState.moodId = Number(chosenMood);
  console.log(moodState);
};

const handleFilterChange = (changeEvent) => {
  if (changeEvent.target.name === "moodFilter") {
    setMoodFilter(changeEvent.target.value);
    document.dispatchEvent(newFilterEvent);
  }
};
const newFilterEvent = new CustomEvent("changedFilter");

export const addFilterListener = () => {
  document
    .querySelector("#moodFilter")
    .addEventListener("change", handleFilterChange);
};

export const MoodFilter = async () => {
  // Get all the moods from the database
  const allMoods = await getMoods();

  // Build the HTML string for the radio buttons
  return `
        <fieldset id="moodFilter" class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            <input type="radio" name="moodFilter" value="0" id="clearFilter" />
            <label for="clearFilter">Show All</label>

            ${allMoods
              .map((mood) => {
                return `<input type="radio" name="moodFilter" value="${
                  mood.id
                }" ${moodState.moodId === mood.id ? "checked" : ""}/>
                        <label for="moodFilter--${mood.label}">${
                  mood.label
                }</label>
                        `;
              })
              .join("")}
        </fieldset>
        `;
};
