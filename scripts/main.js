const contentTarget = document.querySelector(".main");

const renderHTML = () => {
  contentTarget.innerHTML = `<section class="main-content"><form class="entryForm">
      <fieldset>
        <label for="entryDate">Date</label>
        <input type="date" name="entryDate" class="entryForm__date"></input>
      </fieldset>
      <fieldset>
        <label for="entryTitle">Title</label>
        <input type="text" name="entryTitle" class="entryForm__title"></input>
      </fieldset>
      <fieldset>
        <label for="entryBody">Body</label>
        <textarea name="entryBody" class="entryForm__body"></textarea>
      </fieldset>
      <fieldset>
        <label for="entryMood">Mood</label>
        <select name="entryMood" class="entryForm__mood">
        <option>good</option>
        <option>ok</option>
        <option>bad</option>
        </select>
      </fieldset>
      <button>Submit</button>
    </form>

    
    <article id="entries"></article>
    </section>`;
};

renderHTML();
