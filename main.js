const noteContainer =  document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem('notes');
}
showNotes() ;

function updateStorage(){
  localStorage.setItem('notes',noteContainer.innerHTML);
}

createBtn.addEventListener('click',()=>{
  let inpuBox = document.createElement("p");
  let img = document.createElement('img');
  inpuBox.className = 'input-box';
  inpuBox.setAttribute('contenteditable','true');
  img.src = "images/delete.png" ;
  inpuBox.appendChild(img);
  noteContainer.appendChild(inpuBox);
});
noteContainer.addEventListener('click',function (e) {
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    updateStorage();
  }else if(e.target.tagName === "P"){
    notes = document.querySelectorAll('.input-box');
    notes.forEach(nt =>{
      nt.onkeyup = function () {
        updateStorage();
      }

    });
  }

  
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});