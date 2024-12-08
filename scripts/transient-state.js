export const transientState = {
  date: "",
  title: "",
  body: "",
  moodId: 0,
};

export const setDate = (chosenDate) => {
  transientState.date = chosenDate;
};
export const setTitle = (chosenTitle) => {
  transientState.title = chosenTitle;
};
export const setBody = (chosenBody) => {
  transientState.body = chosenBody;
};
export const setMood = (chosenMood) => {
  transientState.moodId = chosenMood;
};
