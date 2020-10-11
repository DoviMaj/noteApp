import { createChecklist } from "./checklist";
import { listItemData } from "./data_manipulation";
import { renderAllNotes } from "./render_DOM";
import { addListItem } from "./form";

// DOM related functions //
export const updateElementChecklist = (item, index, noteWrapper) => {
  const parent = document.querySelector(`#ul${noteWrapper.id}`);
  if (parent) {
    parent.innerHTML = "";
    item.checklist.forEach((item, index) => {
      const listItemDiv = document.createElement("div");
      listItemDiv.className = "list-item";
      listItemDiv.id = index;
      const element = createChecklist(item, index, noteWrapper);
      listItemDiv.append(
        element.checkbox,
        element.listBullet,
        element.listChangeInput,
        element.deleteListItemButton
      );
      parent.append(listItemDiv);
    });
  } else {
    const list = document.createElement("ul");
    list.id = `ul${index}`;
    item.checklist.forEach((item, index) => {
      const listItemDiv = document.createElement("div");
      listItemDiv.className = "list-item";
      listItemDiv.id = index;
      const element = createChecklist(item, index, noteWrapper);
      listItemDiv.append(
        element.checkbox,
        element.listBullet,
        element.listChangeInput,
        element.deleteListItemButton
      );
      list.append(listItemDiv);
    });
    document.querySelector(`.note${index}`).append(list);
  }
};

// removeChecklistItemElement
export const removeChecklistItemElement = (element) => {
  element.parentNode.remove();
};

// remove note element
export const removeNoteElement = (element) => {
  element.closest(".note-wrapper").remove();
  renderAllNotes();
};

// updates element in DOM
export const updateElement = (element) => {
  const previousSibling = element.previousElementSibling;
  previousSibling.innerText = element.value;
};

// add enter event to checklist input
export const listInputEvent = () => {
  const list = document.querySelector("#checklist-input");
  list.addEventListener("keypress", (evt) => {
    if (evt.key === "Enter" && evt.target.value !== "") {
      addListItem(evt.target);
      listItemData.push({ name: evt.target.value, checked: false });
      evt.target.value = "";
    }
  });
};
