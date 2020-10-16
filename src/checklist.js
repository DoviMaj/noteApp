/* eslint-disable import/no-cycle */
import {
  updateChecklistData,
  updateCheckedItem,
  removeChecklistItemData,
} from "./data_manipulation";
import { updateElement, removeChecklistItemElement } from "./DOM_manipulation";

export function createChecklist(item, index, noteWrapper) {
  let listBullet = "";
  let listChangeInput;
  let checkbox = "";
  let deleteListItemButton;
  listBullet = document.createElement("li");
  listBullet.innerText = item.name;
  listBullet.id = index;
  listBullet.className = "list-item-text";
  listBullet.addEventListener("click", () => {
    listChangeInput.classList.remove("hide");
    listChangeInput.focus();
    listBullet.classList.add("hide");
  });
  listBullet.addEventListener("mouseenter", () => {
    deleteListItemButton.classList.remove("hide");
  });
  listBullet.addEventListener("mouseleave", () => {
    deleteListItemButton.classList.add("hide");
  });
  listChangeInput = document.createElement("input");
  listChangeInput.value = item.name;
  listChangeInput.spellcheck = false;
  listChangeInput.className = "change-input"; 
  listChangeInput.classList.add("hide");
  listChangeInput.id = index;
  listChangeInput.addEventListener("keypress", (evt) => {
    if (evt.key === "Enter" && evt.target.value !== "") {
      updateChecklistData(evt.target, noteWrapper.id);
      updateElement(evt.target);
      listChangeInput.classList.add("hide");
      listBullet.classList.remove("hide");
    }
  });

  listChangeInput.addEventListener("blur", (evt) => {
    if (evt.target.value !== "") {
      updateChecklistData(evt.target, noteWrapper.id);
      updateElement(evt.target);
      listChangeInput.classList.add("hide");
      listBullet.classList.remove("hide");
    }
  });
  checkbox = document.createElement("input");
  checkbox.className = "checkbox";
  checkbox.id = index;
  checkbox.type = "checkbox";
  if (item.checked === true) {
    checkbox.checked = true;
    listBullet.classList.add("checked");
  }
  checkbox.addEventListener("click", (evt) => {
    if (listBullet.classList.contains("checked")) {
      listBullet.classList.remove("checked");
      updateCheckedItem(evt.target, noteWrapper.id);
    } else {
      listBullet.classList.add("checked");
      updateCheckedItem(evt.target, noteWrapper.id);
    }
  });
  deleteListItemButton = document.createElement("button");
  deleteListItemButton.innerHTML = "x";
  deleteListItemButton.id = index;
  deleteListItemButton.className = "delete-checklist-button";
  deleteListItemButton.classList.add("hide");
  deleteListItemButton.addEventListener("click", (evt) => {
    removeChecklistItemData(evt.target, noteWrapper);
    removeChecklistItemElement(evt.target);
  });
  return {
    checkbox,
    listBullet,
    listChangeInput,
    deleteListItemButton,
  };
}
