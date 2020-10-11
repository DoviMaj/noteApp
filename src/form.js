import {
  updateChecklistArray,
  addNote,
  listItemData,
  resetListItemData,
} from "./data_manipulation";
import { updateElement } from "./DOM_manipulation";

// adds list items on input form
export const addListItem = (element) => {
  const li = document.createElement("li");
  li.innerText = element.value;
  li.className = "temporary-form-list-item";
  li.id = listItemData.length;
  const changeList = document.createElement("input");
  changeList.className = "hide";
  changeList.classList.add("change-input");
  changeList.type = "text";
  changeList.value = element.value;
  li.addEventListener("click", () => {
    li.classList.add("hide");
    changeList.classList.remove("hide");
    changeList.focus();
  });
  changeList.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      updateChecklistArray(event.target, changeList);
      updateElement(event.target);
      changeList.classList.add("hide");
      li.classList.remove("hide");
    }
  });
  changeList.addEventListener("blur", (event) => {
    if (event.target.value !== "") {
      updateChecklistArray(event.target, changeList);
      updateElement(event.target);
      changeList.classList.add("hide");
      li.classList.remove("hide");
    }
  });
  const input = document.querySelector("#checklist-div");
  input.append(li, changeList);
};

// gets user input for values
const getInput = () => {
  const note = document.querySelector("#note-input");
  const title = document.querySelector("#title-input");
  const list = document.querySelectorAll(".temporary-form-list-item");
  const dueDate = document.querySelector("#due-date-input");
  const project = document.querySelector("#project-input");

  addNote(title.value, note.value, listItemData, dueDate.value, project.value);
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
