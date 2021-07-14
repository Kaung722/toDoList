"use strict";

//variable
const tasks = [];
//selector
let toDo = document.querySelector("#addTask");
let toDoList = document.getElementById("taskList");
let toDoBtn = document.querySelector("#btn");
//listener
toDoBtn.addEventListener("click", addTask);
//function

function addTask(event) {
  event.preventDefault();
  if (toDo.value !== "") {
    tasks.push(toDo.value);
    toDoList.appendChild(createNewList());
  }
  document.forms[0].reset();
  console.log(tasks); ///////////////////////////testing
}

function createNewList() {
  let li = document.createElement("li");
  let div = document.createElement("div");
  let textNode = document.createTextNode(
    document.querySelector("#addTask").value + "     "
  );
  let btn = document.createElement("button");
  btn.textContent = "Done";
  div.appendChild(textNode);
  li.appendChild(div).appendChild(btn);
  //Designing the elements
  btn.classList.add("button");
  div.classList.add("taskText");
  return li;
}
