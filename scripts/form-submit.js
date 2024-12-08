import { postEntry } from "./database.js";
import { setBody, setDate, setMood, setTitle } from "./transient-state.js";

const handleDateChoice = (changeEvent) => {
  if (changeEvent.target.name === "entryDate") {
    setDate(changeEvent.target.value);
    console.log(changeEvent.target.value);
  }
};
const handleTitleChoice = (changeEvent) => {
  if (changeEvent.target.name === "entryTitle") {
    setTitle(changeEvent.target.value);
    console.log(changeEvent.target.value);
  }
};
const handleBodyChoice = (changeEvent) => {
  if (changeEvent.target.name === "entryBody") {
    setBody(changeEvent.target.value);
    console.log(changeEvent.target.value);
  }
};
const handleMoodChoice = (changeEvent) => {
  if (changeEvent.target.name === "entryMood") {
    setMood(changeEvent.target.value);
    console.log(changeEvent.target.value);
  }
};

export const addInputListeners = () => {
  document
    .querySelector("#entryDate")
    .addEventListener("change", handleDateChoice);
  document
    .querySelector("#entryTitle")
    .addEventListener("input", handleTitleChoice);
  document
    .querySelector("#entryBody")
    .addEventListener("input", handleBodyChoice);
  document
    .querySelector("#entryMood")
    .addEventListener("change", handleMoodChoice);
};

const handleSubmitClick = (clickEvent) => {
  if (clickEvent.target.id === "submitEntry") {
    postEntry();
  }
};

export const addSubmitListener = () => {
  document
    .querySelector("#submitEntry")
    .addEventListener("click", handleSubmitClick);
};
