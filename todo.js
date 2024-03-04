"use strict";
let tasks = [];
let inputtask = document.getElementById("taskval");
let taskList = document.getElementById("taskList");
let btnValue = document.getElementById('Submit');
btnValue.addEventListener("click", () => {
    if (inputtask.value.length > 0) {
        tasks.push(inputtask.value);
        inputtask.value = '';
        displayTasks(tasks);
        console.log(tasks);
    }
});
const displayTasks = (container) => {
    let innerContent = ``;
    for (let i = 0; i < container.length; i++) {
        innerContent += `<div>
      <li>${container[i]}</li> 
      <button onclick="editTask(${i})">Edit</button>
      <button onclick="deleteTask(${i})">Completed</button>
      </div>`;
    }
    taskList.innerHTML = innerContent;
};
const editTask = (index) => {
    if (inputtask.value.length > 0) {
        tasks.splice(index, 1, inputtask.value);
        displayTasks(tasks);
        inputtask.value = '';
    }
};
const deleteTask = (index) => {
    tasks.splice(index, 1);
    displayTasks(tasks);
};
