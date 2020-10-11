import { renderAllNotes } from "./render_DOM";
import { notes } from "./index";

// current input list
export let listItemData = [];

// factory function for creating notes
const Note = (title, description, checklist, dueDate, project) => {
  return {
    title,
    description,
    checklist,
    dueDate,
    project,
  };
};

// add note to data
export const addNote = (title, description, checklist, dueDate, project) => {
  if (description !== "" || checklist !== "") {
    notes.unshift(Note(title, description, checklist, dueDate, project));
    renderAllNotes();
  }
};

// remove note data
export const removeNoteData = (element) => {
  notes.splice(element.id, 1);
};

// removes checklist item from data
export const removeChecklistItemData = (element, note) => {
  notes[note.id].checklist.forEach((i, index) => {
    if (i.name === element.parentNode.children[1].innerText) {
      notes[note.id].checklist.splice(index, 1);
    }
  });
};

// updates checked checklist item
export const updateCheckedItem = (element, parentIndex) => {
  notes[parentIndex].checklist[element.id].checked = !notes[parentIndex]
    .checklist[element.id].checked;
};

// updates note details -> title or note
export const updateData = (element, detail) => {
  notes[element.id][detail] = element.value;
};

// updates checklist item value
export const updateChecklistData = (element, parentIndex) => {
  notes[parentIndex].checklist[element.id].name = element.value;
};

// add a checklist item
export const addChecklistItemData = (element, parentIndex) => {
  notes[parentIndex].checklist.push({ name: element.value, checked: false });
};

// update temporary form checklist values array
export function updateChecklistArray(element, newValue) {
  listItemData[element.previousElementSibling.id].name = newValue.value;
}

export const resetListItemData = () => {
  listItemData = [];
};
