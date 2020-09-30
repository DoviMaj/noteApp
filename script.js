/*
-Your notes are going to be objects that you’ll want to dynamically create, 
which means either using factories or constructors/classes to generate them.(x)

-title, description, dueDate. 
You might also want to include a checklist. (x)

-Your notes app should have projects or separate lists of notes. 
When a user first opens the app, there should be some sort of ‘default’ 
project to which all of their todos are put. Users should be able to create 
new projects and choose which project their notes go into.

-You should separate your application logic (i.e. creating new notes, 
  setting notes as archive, pin notes, changing due dates
  every note change function etc.) 
  from the DOM-related stuff, 
  so keep all of those things in separate modules.

-The look of the User Interface is up to you, but it should be able to do the following:
  -view all projects
  
  -view all todos in each project (probably just the title and duedate.. 
    perhaps changing color for different priorities)
  
  -expand a single todo to see/edit its details
  
  -delete a todo

-For inspiration, check out the following great todo apps. 
(look at screenshots, watch their introduction videos etc.)
    -google keep
    -evernote

-Use localStorage to save user’s projects and todos between sessions.

-Since you are probably already using webpack, adding external 
libraries from npm is a cinch! You might want to consider using 
the following useful library in your code:
  date-fns gives you a bunch of handy functions for formatting and 
    manipulating dates and times.
*/

// notes data
let notes = [];

// current input list 
let listItemData = []

// factory function for creating notes
const Note = (title, description, checklist, dueDate, project) => {
  return {
    title, 
    description, 
    checklist,
    dueDate, 
    project
  }
}

// add note to data
const addNote = (title, description, checklist, dueDate, project) => {
  if(description !== '' || checklist!== ''){
    notes.unshift(Note(title, description, checklist, dueDate, project))
    renderAll()
  }
}


// remove note data
const removeNoteData = (element) => {
  notes.splice(element.id, 1)
}

// removes checklist item from data
const removeChecklistItemData = (element, note) => {
  notes[note.id].checklist.forEach((i, index) => {
    if(i.name === element.parentNode.children[1].innerText){
      notes[note.id].checklist.splice(index, 1)
    }
  })
}

// updates checked checklist item
const updateCheckedItem = (element, parentIndex) => {
  notes[parentIndex].checklist[element.id].checked = !notes[parentIndex].checklist[element.id].checked;
}

// updates note details -> title or note
const updateData = (element, detail) => {
  notes[element.id][detail] = element.value
}

// updates checklist item value
const updateChecklistData = (element, parentIndex) => {
  notes[parentIndex].checklist[element.id].name = element.value;
}

// add a checklist item 
const addChecklistItemData = (element, parentIndex) => {
  notes[parentIndex].checklist.push({name: element.value, checked: false})
}

// used for temporary form checklist values
function updateChecklistArray(element, newValue){
  listItemData[element.previousElementSibling.id].name = newValue.value
}

// display all notes 
const displayAllNotes = () => {
  console.table(notes)
}

// display notes on project
const displayProjectNotes = (value) => {
  notes.forEach((item) => {
    if(item.project === value){
      console.log(item)
    } 
  })
}



// DOM related stuff
// display all notes on DOM
function renderAll() {
  let div = document.querySelector('.notes-container')
  div.innerHTML = ''
  notes.forEach((item, index) => {
    let noteWrapper = document.createElement('div')
    noteWrapper.className = 'note-wrapper'
    noteWrapper.id = index
    noteWrapper.addEventListener('mouseenter', () => {
      deleteNoteButton.classList.remove('hide')
    })
    noteWrapper.addEventListener('mouseleave', () => {
      deleteNoteButton.classList.add('hide')
    })

    // note title 
    let title = ''
    if(item.title !== ''){
      title = document.createElement('div')
      let titleText = document.createElement('h2')
      titleText.innerText = item.title
      titleText.className = 'note-title'
      titleText.addEventListener('click', () =>{
        titleTextInput.classList.remove('hide');
        titleTextInput.focus()
        titleText.classList.add('hide')
      })

      let titleTextInput = document.createElement('input')
      titleTextInput.value = titleText.innerText
      titleTextInput.spellcheck = false
      titleTextInput.classList.add('change-input', 'title-edit')
      titleTextInput.classList.add('hide')
      titleTextInput.id = index
      titleTextInput.addEventListener('blur', (evt) => {
          updateElement(evt.target)
          updateData(evt.target, 'title')
          titleTextInput.classList.add('hide')
          titleText.classList.remove('hide')
      })
      title.append(titleText, titleTextInput)
    }

    // checklist stuff
    let list = ''
    if(item.checklist.length !== 0){
      list = document.createElement('ul')
      list.id = `ul${index}`
      item.checklist.forEach((item, index) => {
        let listItemDiv = document.createElement('div')
        listItemDiv.className = 'list-item'
        listItemDiv.id = index 
        const element = createChecklist(item, index, noteWrapper)
        listItemDiv.append(element.checkbox, element.listBullet, element.listChangeInput, element.deleteListItemButton)
        list.append(listItemDiv)
      })
    } 

    // add checklist item
    let addChecklistItem = document.createElement('input')
    addChecklistItem.type = 'text'
    addChecklistItem.placeholder = 'add list item'
    addChecklistItem.className = 'change-input'
    addChecklistItem.addEventListener('keypress', (evt) => {
      if(evt.key === 'Enter' && evt.target.value !== ''){
        addChecklistItemData(evt.target, noteWrapper.id)
        updateElementChecklist(item, index, noteWrapper)
        evt.target.value = ''
      }
    })

    let description = ''
    if(item.description !== ''){
      description = document.createElement('div')
      description.className = `note${index}`
      let noteText = document.createElement('p')
      noteText.innerText = item.description
      noteText.className = 'note-text'
      noteText.addEventListener('click', () =>{
        noteTextInput.classList.remove('hide');
        noteTextInput.focus()
        noteText.classList.add('hide')
      })
      let noteTextInput = document.createElement('textarea')
      noteTextInput.value = item.description
      noteTextInput.className = 'change-input'
      noteTextInput.spellcheck = false
      noteTextInput.classList.add('hide', 'note-input')
      noteTextInput.id = index
      noteTextInput.addEventListener('blur', (evt) => {
        updateElement(evt.target)
        updateData(evt.target, 'description')
        noteTextInput.classList.add('hide')
        noteText.classList.remove('hide')
      })
      description.append(noteText, noteTextInput)
    }

    let project = ''
    if(item.project !== ''){
      project = document.createElement('p')
      project.innerText = item.project
      project.className = 'project'
    }

    let dueDate = ''
    if(item.dueDate !== ''){
      dueDate = document.createElement('div')
      dueDate.className = 'due-date-div'
      let due = document.createElement('p')
      due.innerText = item.dueDate
      due.className = 'project'
      due.id = 'due-date' 
      dueDate.append(project, due)
    }
    
    

    let deleteNoteButton = document.createElement('button')
    deleteNoteButton.innerHTML = 'x'
    deleteNoteButton.id = index
    deleteNoteButton.className = 'delete-button'
    deleteNoteButton.classList.add('hide')
    deleteNoteButton.addEventListener('click', (evt) => {
      removeNoteData(evt.target)
      removeNoteElement(evt.target)
    })

    if(description !== '' || list !== ''){
      // if(description === ''){
      //   noteWrapper.append(deleteNoteButton, addTitle, addDescription, list, addChecklistItem, dueDate, project)
      // }
      noteWrapper.append(deleteNoteButton, title, description, list, addChecklistItem, dueDate)
      div.append(noteWrapper)
    }
  })
}

function createChecklist(item, index, noteWrapper) {
  let listBullet;
  let listChangeInput;
  let checkbox;
  let deleteListItemButton;
  listBullet = document.createElement('li')
  listBullet.innerText = item.name
  listBullet.id = index
  listBullet.className = 'list-item-text'
  listBullet.addEventListener('click', () =>{
    listChangeInput.classList.remove('hide');
    listChangeInput.focus()
    listBullet.classList.add('hide')
  })
  listBullet.addEventListener('mouseenter', () => {
    deleteListItemButton.classList.remove('hide')
  })
  listBullet.addEventListener('mouseleave', () => {
    deleteListItemButton.classList.add('hide')
  })
  listChangeInput = document.createElement('input')
  listChangeInput.value = item.name
  listChangeInput.spellcheck = false
  listChangeInput.className = 'change-input'
  listChangeInput.classList.add('hide')
  listChangeInput.id = index  
  listChangeInput.addEventListener('keypress', (evt) => {
    if(evt.key === 'Enter' && evt.target.value !== ''){
      updateChecklistData(evt.target, noteWrapper.id)
      updateElement(evt.target)
      listChangeInput.classList.add('hide')
      listBullet.classList.remove('hide')
    }
  })
    
  listChangeInput.addEventListener('blur', (evt) => {
    if(evt.target.value !== ''){
      updateChecklistData(evt.target, noteWrapper.id)
      updateElement(evt.target)
      listChangeInput.classList.add('hide')
      listBullet.classList.remove('hide')
    }
  })
  checkbox = document.createElement('input')
  checkbox.className = 'checkbox'
  checkbox.id = index
  checkbox.type = 'checkbox'
  checkbox.checked;
  if(item.checked === true){
    checkbox.checked = true
    listBullet.classList.add('checked')
  }
  checkbox.addEventListener('click', (evt) => {
    if(listBullet.classList.contains('checked')){
      listBullet.classList.remove('checked')
      updateCheckedItem(evt.target, noteWrapper.id)
    }
    else{
      listBullet.classList.add('checked')
      updateCheckedItem(evt.target, noteWrapper.id)
    }
  })
  deleteListItemButton = document.createElement('button')
  deleteListItemButton.innerHTML = 'x'
  deleteListItemButton.id = index
  deleteListItemButton.className = 'delete-checklist-button'
  deleteListItemButton.classList.add('hide')
  deleteListItemButton.addEventListener('click', (evt) => {
    removeChecklistItemData(evt.target, noteWrapper)
    removeChecklistItemElement(evt.target)
    //updateChecklistData(evt.target, noteWrapper.id)
  })
  return{
    checkbox, listBullet, listChangeInput, deleteListItemButton
  }
}

const updateElementChecklist = (item, index, noteWrapper) => {
  let parent = document.querySelector(`#ul${noteWrapper.id}`)
  if(parent){
    parent.remove()
  }
  if(item.checklist.length !== 0){
    list = document.createElement('ul')
    list.id = `ul${index}`
    item.checklist.forEach((item, index) => {
      let listItemDiv = document.createElement('div')
      listItemDiv.className = 'list-item'
      listItemDiv.id = index 
      const element = createChecklist(item, index, noteWrapper)
      listItemDiv.append(element.checkbox, element.listBullet, element.listChangeInput, element.deleteListItemButton)
      list.append(listItemDiv)
  })
    document.querySelector(`.note${index}`).append(list)
  }
}

// removeChecklistItemElement
const removeChecklistItemElement = (element) => {
  element.parentNode.remove()
}

// remove note element
const removeNoteElement = (element) => {
  element.closest(".note-wrapper").remove()
  renderAll()
}

// updates element in DOM
const updateElement = (element) => {
  let previousSibling = element.previousElementSibling
  previousSibling.innerText = element.value
}

// add enter event to checklist input
const listInputEvent = () => {
  let list = document.querySelector('#checklist-input')
  list.addEventListener('keypress', (evt) => {
    if(evt.key === 'Enter' && evt.target.value !== ''){
      addListItem(evt.target)
      listItemData.push({name: evt.target.value, checked: false})
      evt.target.value = ''
    }
  })
}


// adds list items on input form
const addListItem = (element) => {
  let li = document.createElement('li');
  li.innerText = element.value
  li.className = 'temporary-form-list-item'
  li.id = listItemData.length
  let changeList = document.createElement('input')
  changeList.className = 'hide'
  changeList.classList.add('change-input')
  changeList.type = 'text'
  changeList.value = element.value
  li.addEventListener('click', ()=> {
    li.classList.add('hide')
    changeList.classList.remove('hide')
    changeList.focus()
  })
  changeList.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && event.target.value !== ''){
      updateChecklistArray(event.target, changeList)
      updateElement(event.target)
      changeList.classList.add('hide')
      li.classList.remove('hide')
    }
  })
  changeList.addEventListener('blur', (event) => {
    if (event.target.value !== '') {
      updateChecklistArray(event.target, changeList)
      updateElement(event.target)
      changeList.classList.add('hide')
      li.classList.remove('hide')
    }
  })

  let input = document.querySelector('#checklist-div')
  input.append(li, changeList)
}


// gets user input for values
const getInput = () => {
  let note = document.querySelector('#note-input')
  let title = document.querySelector('#title-input')
  let list = document.querySelectorAll('.temporary-form-list-item')
  let dueDate = document.querySelector('#due-date-input')
  let project = document.querySelector('#project-input')

  addNote(title.value, note.value, listItemData, dueDate.value, project.value);

  list.forEach(item => item.remove())
  listItemData = []
  title.value = ''
  note.value = ''
  dueDate.value = ''
  listItemData.value = ''
  project.value = ''
}

// add button event
const addButtonEvent = () => {
  let button = document.querySelector('#add-button');
  button.addEventListener('click', (evt) => {
    getInput()
    hideInputOptions()
  })
}


const displayInputOptions = () => {
  let inputForm = [
    document.querySelector('#title-input'), 
    document.querySelector('#due-date-input'), 
    document.querySelector('#checklist-input'), 
    document.querySelector('#project-input'),
    document.querySelector("#add-button")
  ]
  inputForm.forEach(item => {
    item.classList.remove('hide')
  })
}

const hideInputOptions = () => {
  let inputForm = [
    document.querySelector('#title-input'), 
    document.querySelector('#due-date-input'), 
    document.querySelector('#checklist-input'), 
    document.querySelector('#project-input'),
    document.querySelector("#add-button")
  ]
  inputForm.forEach(item => {
    item.classList.add('hide')
  })
}

const addInputEvent = () => {
  let input = document.querySelector('#note-input');
  input.addEventListener('focus', () => {
    displayInputOptions()
  })
}

// images event listeners
const imagesEventListeners = () => {
  let images = document.querySelectorAll(".img")
  images.forEach(img => {
    img.addEventListener('click', (evt) => {
      changeBackgroundImg(evt.target)
    })
  })
}

// changeBackgroundImg
const changeBackgroundImg = (img) => {
  let body = document.querySelector('body')
    body.style.background =  `url(./img/img${img.id}.jpg) no-repeat fixed`
    body.style.backgroundSize = 'cover'
}

addNote('My Shopping List', 'need to go to that market', [{name: "way protein", checked: true}, 
{name: "paper towels", checked: false}, {name: "after shave", checked: true}, {name: "bread", checked: false}], 
'14/05/2020', 'Buy')

addNote('Dinner Planning', 'Planning, preparing, and portioning your meals ahead of time is one of the most effective tools for keeping your food budget in check', 
[], '12/02/2020', 'dinner')

imagesEventListeners()
listInputEvent()
addInputEvent()
addButtonEvent()
renderAll()

// change renderAll to conditional rendering using empty as option (x)
// add event to add button (x)
// create check function that checks for values and calls add function (x)
// add function to event that takes the input and uses getInput function (x)
// add condition in addNote function (x)

// make checklist input work (x)
  // add li inside form whenever enter is clicked (x)
  // store each addition of li inside array (x)
  // use that array when adding to data (x) 

// make form checklist editable (x)
  // add input with each add (x)
  // define value of element inside input (x)
  // update element on enter (x)

// make note checklist editable (x)
  // add input with each add 
  // define value of element inside input 
  // update element on enter 
  // update database on enter

// make description editable (x)

// remove note option (x)

// remove checklist item option (x)

// check item option (x)

// adding list item option (x)


