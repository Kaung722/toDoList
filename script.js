"use strict";

const addTask = function (event) {
  event.preventDefault();
  if (document.querySelector("#addTask").value !== "")
    console.log(document.querySelector("#addTask").value);
  document.forms[0].reset();
};

document.querySelector("#btn").addEventListener("click", addTask);
