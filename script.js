console.log('my notes')



//to add note when button clicked
let addBtn = document.getElementById('NoteAddbtn').addEventListener('click', function (e) {

    let addText = document.getElementById('Notetxt').value
    let notes = localStorage.getItem('notes')  //notes will get a list in str format of all notes
    // console.log('notes', notes)
    // 'notes' ["my note of succes","my time table\n"]

    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)  //str type list ===> origunal list
    }
    notesObj.push(addText) // append the list to add the new note
    localStorage.setItem('notes', JSON.stringify(notesObj));  //set item in key value pair-- stringyfy will store in list format
    addText = ''
    console.log('notesObj', notesObj)
    // 'notesObj' ["my note of succes", "my time table↵", "new note", "hello bro"]


    // function to show notes
    showNotes()
})


// function to show notes from local storage
showNotes = function () {
    let notes = localStorage.getItem('notes')  //return the value of key in a str-list format

    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes) //convert it into list fromat
    }

    let html = '';
    notesObj.forEach(function (element, index) {
        html += `<div class="card mx-2 my-2 noteCard " style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Notes ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id=${index} class="btn btn-primary" onclick='deleteNote(this.id)' >Delete</button>
                    <button id="hide" class="btn btn-primary">Hide</button>
                </div>
            </div>`
    })


    let allNotes = document.getElementById('allNotes')
    if (notesObj.length != 0) {
        allNotes.innerHTML = html

    }
    else {
        allNotes.innerHTML = `<h4><b>No Previous Notes Available . Please Add Note</b></h4>`
    }

}
showNotes()

function deleteNote(index) {

    let notes = localStorage.getItem('notes')  //notes will get a list in str format of all notes

    if (notes == null) {
        notesObj = []
    }
    else {
        notesObj = JSON.parse(notes)  //str type list ===> origunal list
    }
    
    notesObj.splice(index,1) // (from where to remove , home many remove)
    localStorage.setItem('notes', JSON.stringify(notesObj));  //set item in key value pair-- stringyfy will store in list format

    showNotes()
}


// to search note
search = document.getElementById('searchNote')

search.addEventListener('input' , function(e){

let searchTxt = search.value.toLowerCase()

let noteCards = document.getElementsByClassName('noteCard') 
// console.log(noteCards)
//HTMLCollection(3) [div.card.mx-2.my-2.noteCard., div.card.mx-2.my-2.noteCard., div.card.mx-2.my-2.noteCard.] 

Array.from(noteCards).forEach(function(element , index){
    // console.log(element)
    // elemnt = <div class=​"card mx-2 my-2 noteCard " style=​"width:​ 18rem;​">​…​</div>​

    
    let cartTxt = element.getElementsByTagName('p')[0].innerText
    if(cartTxt.includes(searchTxt)){
        element.style.display = 'block'
    }
    else{
        element.style.display = 'none'
    }
})
})


