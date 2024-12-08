const transientState = {
  date: "",
  title: "",
  body: "",
  mood: "",
};

export const setDate = (chosenDate) => {
  transientState.date = chosenDate;
  console.log(transientState);
};
export const setTitle = (chosenTitle) => {
  transientState.title = chosenTitle;
  console.log(transientState);
};
export const setBody = (chosenBody) => {
  transientState.body = chosenBody;
  console.log(transientState);
};
export const setMood = (chosenMood) => {
  transientState.mood = chosenMood;
  console.log(transientState);
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
