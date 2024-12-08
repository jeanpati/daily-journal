import { addDeleteListener, entryList } from "./entry-list.js";
import { addFilterListener, MoodFilter } from "./filter/mood-filter.js";
import { addInputListeners, addSubmitListener } from "./form-submit.js";
import { form } from "./form.js";

const contentTarget = document.querySelector(".main");

const renderHTML = async () => {
  const renderForm = await form();
  const renderFilter = await MoodFilter();
  const renderEntries = await entryList();
  contentTarget.innerHTML = `
     <section class="main-content">
        <article id="form">${renderForm}</article>
        <article id="filter">${renderFilter}</article>
        <article id="entries">${renderEntries}</article>
    </section>`;
  addInputListeners();
  addSubmitListener();
  addDeleteListener();
  addFilterListener();
};

renderHTML();

document.addEventListener("newEntry", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  renderHTML();
});
document.addEventListener("deletedEntry", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  renderHTML();
});
document.addEventListener("changedFilter", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  renderHTML();
});
