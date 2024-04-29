let taksCreateElement= document.querySelector('.right')

let notesListRootElement= document.querySelector('.notesList')
let rootContentElement=document.querySelector('.contents')

let editExistingElement=document.querySelector('.editTheContent')

 
let notes = []
 function renderElementsToScreen(){
  


if (localStorage.getItem('notes')) {
  
  notes = JSON.parse(localStorage.getItem('notes'));

  // Ensure that notes is an array before using forEach
  if (Array.isArray(notes)) {
      notes.forEach(note => {
        renderSaveElements(note, note.uniquID);
      });
  } 
}
}

let newTaskButton = document.querySelector('#note')
newTaskButton.addEventListener('click',()=>{
  renderNoteElement();

})

function renderNoteElement(){
  let mainDiv= document.createElement('div')
  mainDiv.className='createNote'
  let input=document.createElement('input')
  input.id = 'createNoteTitle'
  input.placeholder= 'Note Title'
  let textArea=document.createElement('textarea')
  textArea.placeholder ='Note Description'
  textArea.rows =10;
  textArea.id ='createNoteContent'

  let divButton =document.createElement('button')
  divButton.className ='buttoncreate'
  divButton.innerText ='Create Note'

  divButton.addEventListener('click', ()=>{
    // if(input.value.length ===0 ){
    //   alert('please fill the titl')
    //   return
    // }
    let uniquID ='note' + Math.floor(Math.random()*1000)
let note ={
  title: input.value,
  content: textArea.value
  
}

mainDiv.style.display = 'none';
divButton.style.display = 'none';


  
   addNoteToLocalStorage(note, uniquID)
   renderSaveElements(note, uniquID);
   
  })
 

  mainDiv.appendChild(input)
  mainDiv.appendChild(textArea)
  taksCreateElement.append(mainDiv)
  taksCreateElement.append(divButton)
}

function renderSaveElements(note, uniquID){

  let noteDiv=document.createElement('div')
  noteDiv.className ='content' 
  noteDiv.classList.add('note', uniquID)
  noteDiv.style.cursor='Pointer'
  let noteTitle=document.createElement('h4')
  let noteContent=document.createElement('p')
  noteTitle.innerText = note.title;
  noteContent.innerText = note.content;
  

  noteDiv.appendChild(noteTitle)
  noteDiv.appendChild(noteContent)
  rootContentElement.append(noteDiv)

  // document.querySelector('#createNoteTitle').value=''
  //  document.querySelector('#createNoteContent').value=''

  noteDiv.addEventListener('click',()=>{
    let editTitle=document.querySelector('#editstitle')
  let editContent=document.querySelector('#editscontent')
  editExistingElement.style.display='block'

  editTitle.innerText=note.title
  editContent.innerText =note.content
    //renderEditExistElement()
  })
}
function addNoteToLocalStorage(note, uniquID){
  let notes = JSON.parse(localStorage.getItem('notes')) || [];//instalize
  // Create a new object for each entry in the array
  let newNote = {
    title: note.title,
    content: note.content,
    uniquID: uniquID
  };


  notes.push(newNote)
  localStorage.setItem('notes', JSON.stringify(notes))
  // if (notes.length !== 0) {
  //   taksCreateElement.style.display = '';
  // } else {
  //   taksCreateElement.style.display = 'block'; // or any other suitable value
  // }

  
}

renderElementsToScreen()

let editTaskButton=document.querySelector('.editButton')

editTaskButton.addEventListener('click', ()=>{
let overlaydiv=document.createElement('div')
overlaydiv.id='overlay'
let popmainDiv=document.createElement('div')
popmainDiv.id='popup'
let popinnertext =document.createElement('input')
popinnertext.placeholder='Task Name'
popinnertext.className='poptext'
let popButton=document.createElement('button')
popButton.id='popbutton'
popButton.innerText='Create Task'

popmainDiv.appendChild(popinnertext)
popmainDiv.appendChild(popButton)
overlaydiv.appendChild(popmainDiv)
document.body.append(overlaydiv)

popButton.addEventListener('click', ()=>{
  

popButton.addEventListener('click', () => {
  popmainDiv.remove();
  overlaydiv.remove();
  editExistingElement.style.display = 'block';

  // Get the values from the existing content div
  let existingContentDiv = document.querySelector('.content.note');

  

  

  let editTitle = document.querySelector('#editstitle');
  let editContent = document.querySelector('#editscontent');
  editTitle.innerText = existingContentDiv.querySelector('h4').innerText; // Use the existing title
  editContent.innerText = existingContentDiv.querySelector('p').innerText; // Use the existing content

  document.querySelector('#formintro').style.display='block'
  

  // Create a new task heading and append it to the edit content
  
document.querySelector('.deleteButton').addEventListener('click', ()=>{
  document.querySelector('#formintro').remove()
})
  editContent.append(taskheading);
  
  
});

})


})

