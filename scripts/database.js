/*
 *   Data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

const database = {
  entries: [
    {
      id: 1,
      date: "07/24/2025",
      title: "HTML & CSS",
      body: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "Ok",
    },
    {
      id: 2,
      date: "08/01/2025",
      title: "JavaScript Basics",
      body: "Learned about variables, functions, and event listeners. Practiced with DOM manipulation.",
      mood: "Good",
    },
    {
      id: 3,
      date: "08/15/2025",
      title: "JavaScript Promises",
      body: "Explored promises, asynchronous programming, and how they work with async/await in JS.",
      mood: "Excited",
    },
  ],
};

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
  const copyOfData = database.entries.map((entry) => ({ ...entry }));
  return copyOfData;
};
