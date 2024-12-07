let formHTML = "";
export const form = () => {
  formHTML += `<form class="entryForm">
      <fieldset class="formField">
        <label for="entryDate">Date</label>
        <input type="date" name="entryDate" class="entryForm__date"></input>
      </fieldset>
      <fieldset class="formField">
        <label for="entryTitle">Title</label>
        <input type="text" name="entryTitle" class="entryForm__title"></input>
      </fieldset>
      <fieldset class="formField">
        <label for="entryBody">Body</label>
        <textarea name="entryBody" class="entryForm__body"></textarea>
      </fieldset>
      <fieldset class="formField">
        <label for="entryMood">Mood</label>
        <select name="entryMood" class="entryForm__mood">
        <option>good</option>
        <option>ok</option>
        <option>bad</option>
        </select>
      </fieldset>
      <button>Submit</button>
    </form>`;
  return formHTML;
};
