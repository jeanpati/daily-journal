export const transientState = {
  date: "",
  title: "",
  body: "",
  moodId: 0,
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
  transientState.moodId = chosenMood;
  console.log(transientState);
};
