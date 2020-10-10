// display all notes on DOM
export function renderAllNotes() {
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
      noteWrapper.append(deleteNoteButton, title, description, list, addChecklistItem, dueDate)
      div.append(noteWrapper)
    }
  })
}