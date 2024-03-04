let tasks: string[] = [];
let inputtask = document.getElementById("taskval") as HTMLInputElement;
let taskList = document.getElementById("taskList") as HTMLDivElement;
let btnValue = document.getElementById('Submit') as HTMLInputElement;

btnValue.addEventListener("click", ()=>{
    if (inputtask.value.length > 0) {
        tasks.push(inputtask.value);
        inputtask.value = '';
        displayTasks(tasks);
        console.log(tasks);
    }
  });

const displayTasks = (container: string[])  => {
    let innerContent: string = ``;
    for(let i: number = 0; i < container.length; i++){

      innerContent += `<div>
      <li>${container[i]}</li> 
      <button onclick="editTask(${i})">Edit</button>
      <button onclick="deleteTask(${i})">Completed</button>
      </div>`
    } 
    
    taskList.innerHTML = innerContent;
}

const editTask = (index: number) => {
    if (inputtask.value.length > 0){
        tasks.splice(index, 1, inputtask.value);
        displayTasks(tasks);
        inputtask.value = '';
    }
    
};

const deleteTask = (index: number) => {
    tasks.splice(index, 1);
    displayTasks(tasks);
};