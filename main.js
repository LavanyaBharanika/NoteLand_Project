let taksCreateElement= document.querySelector('.right')

let notesListRootElement= document.querySelector('.notesList')
let rootContentElement=document.querySelector('.contents')

// if(rootContentElement.value ===0){
//   taksCreateElement.style.display='block'
// }else{
//   taksCreateElement.style.display='none'
  
// }
 
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
    let uniquID ='note' + Math.floor(Math.random()*1000)
let note ={
  title: document.querySelector('#createNoteTitle').value,
  content: document.querySelector('#createNoteContent').value
  
}

 
if(note.title.trim() !== '' && note.content.trim() !== ''){
  mainDiv.style.display='none'
  divButton.style.display='none'
    }
    else{
    mainDiv.style.display='block'
    divButton.style.display='block'
   }
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
  let noteTitle=document.createElement('h4')
  let noteContent=document.createElement('p')
  noteTitle.innerText = note.title;
  noteContent.innerText = note.content;
  

  noteDiv.appendChild(noteTitle)
  noteDiv.appendChild(noteContent)
  rootContentElement.append(noteDiv)

  document.querySelector('#createNoteTitle').value=''
   document.querySelector('#createNoteContent').value=''
}