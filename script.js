"use strict";

const tasks = [];
let ul = document.getElementById("taskList");

const addTask = function (event) {
  event.preventDefault();
  if (document.querySelector("#addTask").value !== "") {
    tasks.push(document.querySelector("#addTask").value);
    let li = document.createElement("li");
    let textNode = document.createTextNode(
      document.querySelector("#addTask").value
    );
    li.appendChild(textNode);
    ul.appendChild(li);
  }
  document.forms[0].reset();
  console.log(tasks);
};

document.querySelector("#btn").addEventListener("click", addTask);
