export const form = () => {
  let formHTML = "";
  formHTML += `<form class="entryForm">
      <fieldset class="formField">
        <label for="entryDate">Date</label>
        <input type="date" name="entryDate" id="entryDate" class="entryForm__date"></input>
      </fieldset>
      <fieldset class="formField">
        <label for="entryTitle">Title</label>
        <input type="text" name="entryTitle" placeholder="Title" id="entryTitle" class="entryForm__title"></input>
      </fieldset>
      <fieldset class="formField">
        <label for="entryBody">Body</label>
        <textarea name="entryBody" id="entryBody" placeholder="Type your journal entry here" class="entryForm__body"></textarea>
      </fieldset>
      <fieldset class="formField">
        <label for="entryMood">Mood</label>
        <select name="entryMood" id="entryMood" class="entryForm__mood">
        <option value="" disabled selected>Select your mood</option>
        <option>good</option>
        <option>ok</option>
        <option>bad</option>
        </select>
      </fieldset>
      <button type="button" id="submitEntry" class="submitEntry">Submit</button>
    </form>`;
  return formHTML;
};
