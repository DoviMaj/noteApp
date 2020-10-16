/* eslint-disable import/no-cycle */
import { createChecklist } from "./checklist";
import {
  removeNoteElement,
  updateElement,
  updateElementChecklist,
} from "./DOM_manipulation";
import {
  notes,
  removeNoteData,
  updateData,
  addChecklistItemData,
} from "./data_manipulation";

// display all notes on DOM
export function renderAllNotes() {
  const div = document.querySelector(".notes-container");
  div.innerHTML = "";
  notes.forEach((item, index) => {
    const noteWrapper = document.createElement("div");
    noteWrapper.className = "note-wrapper";
    noteWrapper.id = index;
    noteWrapper.addEventListener("mouseenter", () => {
      deleteNoteButton.classList.remove("hide");
    });
    noteWrapper.addEventListener("mouseleave", () => {
      deleteNoteButton.classList.add("hide");
    });

    // note title
    let title = "";
    if (item.title !== "") {
      title = document.createElement("div");
      const titleText = document.createElement("h2");
      titleText.innerText = item.title;
      titleText.className = "note-title";
      const titleTextInput = document.createElement("input");
      titleText.addEventListener("click", () => {
        titleTextInput.classList.remove("hide");
        titleTextInput.focus();
        titleText.classList.add("hide");
      });

      titleTextInput.value = titleText.innerText;
      titleTextInput.spellcheck = false;
      titleTextInput.classList.add("change-input", "title-edit");
      titleTextInput.classList.add("hide");
      titleTextInput.id = index;
      titleTextInput.addEventListener("blur", (evt) => {
        updateElement(evt.target);
        updateData(evt.target, "title");
        titleTextInput.classList.add("hide");
        titleText.classList.remove("hide");
      });
      title.append(titleText, titleTextInput);
    }

    // checklist stuff
    let list = "";
    if (item.checklist.length !== 0) {
      list = document.createElement("ul");
      list.id = `ul${index}`;
      item.checklist.forEach((checklistItem, checklistIndex) => {
        const listItemDiv = document.createElement("div");
        listItemDiv.className = "list-item";
        listItemDiv.id = index;
        const element = createChecklist(
          checklistItem,
          checklistIndex,
          noteWrapper
        );
        listItemDiv.append(
          element.checkbox,
          element.listBullet,
          element.listChangeInput,
          element.deleteListItemButton
        );
        list.append(listItemDiv);
      });
    }

    // add checklist item
    const addChecklistItem = document.createElement("input");
    addChecklistItem.type = "text";
    addChecklistItem.placeholder = "add list item";
    addChecklistItem.className = "change-input";
    addChecklistItem.addEventListener("keypress", (evt) => {
      if (evt.key === "Enter" && evt.target.value !== "") {
        addChecklistItemData(evt.target, noteWrapper.id);
        updateElementChecklist(item, index, noteWrapper);
        addChecklistItem.value = "";
      }
    });

    let description = "";
    if (item.description !== "") {
      description = document.createElement("div");
      description.className = `note${index}`;
      const noteText = document.createElement("p");
      noteText.innerText = item.description;
      noteText.className = "note-text";
      const noteTextInput = document.createElement("textarea");
      noteText.addEventListener("click", () => {
        noteTextInput.classList.remove("hide");
        noteTextInput.focus();
        noteText.classList.add("hide");
      });
      noteTextInput.value = item.description;
      noteTextInput.className = "change-input";
      noteTextInput.spellcheck = false;
      noteTextInput.classList.add("hide", "note-input");
      noteTextInput.id = index;
      noteTextInput.addEventListener("blur", (evt) => {
        updateElement(evt.target);
        updateData(evt.target, "description");
        noteTextInput.classList.add("hide");
        noteText.classList.remove("hide");
      });
      description.append(noteText, noteTextInput);
    }

    let project = "";
    if (item.project !== "") {
      project = document.createElement("p");
      project.innerText = item.project;
      project.className = "project";
    }

    let dueDate = "";
    if (item.dueDate !== "") {
      dueDate = document.createElement("div");
      dueDate.className = "due-date-div";
      const due = document.createElement("p");
      due.innerText = item.dueDate;
      due.className = "project";
      due.id = "due-date";
      dueDate.append(project, due);
    }

    let deleteNoteButton = document.createElement("button");
    deleteNoteButton.innerHTML = "x";
    deleteNoteButton.id = index;
    deleteNoteButton.className = "delete-button";
    deleteNoteButton.classList.add("hide");
    deleteNoteButton.addEventListener("click", (evt) => {
      removeNoteData(evt.target);
      removeNoteElement(evt.target);
    });

    if (description !== "" || list !== "") {
      noteWrapper.append(
        deleteNoteButton,
        title,
        description,
        list,
        addChecklistItem,
        dueDate
      );
      div.append(noteWrapper);
    }
  });
}
