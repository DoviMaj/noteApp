import { addNote, listItemData, resetListItemData } from "./data_manipulation";

// gets user input for values
const getInput = () => {
  const note = document.querySelector("#note-input");
  const title = document.querySelector("#title-input");
  const list = document.querySelectorAll(".temporary-form-list-item");
  const dueDate = document.querySelector("#due-date-input");
  const project = document.querySelector("#project-input");

  if (note !== "" || list !== "") {
    addNote(
      title.value,
      note.value,
      listItemData,
      dueDate.value,
      project.value
    );
  }

  list.forEach((item) => item.remove());
  title.value = "";
  note.value = "";
  dueDate.value = "";
  resetListItemData();
  project.value = "";
};

// removes hide class from form
const displayInputOptions = () => {
  const inputForm = [
    document.querySelector("#title-input"),
    document.querySelector("#due-date-input"),
    document.querySelector("#checklist-input"),
    document.querySelector("#project-input"),
    document.querySelector("#add-button"),
  ];
  inputForm.forEach((item) => {
    item.classList.remove("hide");
  });
};

// adds hide class to form
const hideInputOptions = () => {
  const inputForm = [
    document.querySelector("#title-input"),
    document.querySelector("#due-date-input"),
    document.querySelector("#checklist-input"),
    document.querySelector("#project-input"),
    document.querySelector("#add-button"),
  ];
  inputForm.forEach((item) => {
    item.classList.add("hide");
  });
};

// add event to note input
export const addInputEvent = () => {
  const input = document.querySelector("#note-input");
  input.addEventListener("click", () => {
    displayInputOptions();
  });
};

// add button event
export const addButtonEvent = () => {
  const button = document.querySelector("#add-button");
  button.addEventListener("click", () => {
    getInput();
    hideInputOptions();
  });
};
