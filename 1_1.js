//local storage. Save all information about li after update PC, close Internet and other
let list = document.querySelector('ul');
let todo;
let local = () => {
  todo = list.innerHTML;
  localStorage.setItem("todo",todo);
}
if(localStorage.getItem("todo")){
  list.innerHTML = localStorage.getItem("todo");
}



// checked and delete li
list.addEventListener('click', function (del) {
    if(del.target.tagName === "LI") {
       del.target.classList.toggle('checked');
       local();
    } else if(del.target.tagName === "SPAN") {
       let div = del.target.parentNode;
       div.remove();
       local();
    }
});


//open new block where writting a new task
ko.addEventListener('click', newElement_zero = () => {
document.getElementById("newblock").style.display='block';
});


//writting new task with some rules. 
v.addEventListener('click', newElement = () =>{

   
    let li = document.createElement('li');
    let inputValue = document.getElementById('toDoList').value;
    
    if(inputValue === ""){
      alert("Ошибка. Введите значение");
      document.getElementById('newElement').display.style = 'block';
    };

    if(~inputValue.search("!")){
    alert("Ошибка. Нельзя использывать знак ! ");
    document.getElementById('newElement').display.style = 'block';
    }

    else{
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById('list').appendChild(li);
    document.getElementById('toDoList').value = "";
    let span = document.createElement('SPAN');
    let txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    local();
    document.getElementById("newblock").style.display='none';
local();
  }
  });


