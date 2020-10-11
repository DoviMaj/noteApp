import './style.css';
import {imagesEventListeners} from './background_images'
import {addInputEvent, addButtonEvent} from './form'
import {renderAllNotes} from './render_DOM'
import {listInputEvent} from './DOM_manipulation'
import {addNote} from './data_manipulation'


// notes data
export let notes = [];


addNote('My Shopping List', 'need to go to that market', [{name: "way protein", checked: true}, 
{name: "paper towels", checked: false}, {name: "after shave", checked: true}, {name: "bread", checked: false}], 
'14/05/2020', 'Buy')

addNote('Dinner Planning', 'Planning, preparing, and portioning your meals ahead of time is one of the most effective tools for keeping your food budget in check', 
[], '12/02/2020', 'dinner')

imagesEventListeners()
listInputEvent()
addInputEvent()
addButtonEvent()
renderAllNotes()



