import { entryList } from "./entry-list.js";
import { form } from "./form.js";

const contentTarget = document.querySelector(".main");

const entriesHTML = await entryList();

const renderHTML = () => {
  contentTarget.innerHTML = `<section class="main-content">
    <article id="form">${form()}</article>
    
    <article id="entries">${entriesHTML}</article>
    </section>`;
};

renderHTML();
