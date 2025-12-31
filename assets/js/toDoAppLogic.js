
const inputBox = document.getElementById("input-box");
const addButton = document.querySelector("button");
const listContainer = document.getElementById("list-container");

function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  const li = document.createElement("li");
  li.textContent = taskText;
  listContainer.appendChild(li);
  let buttonDeleteTask=document.createElement("span");
  buttonDeleteTask.innerHTML = "\u00d7";
  li.appendChild(buttonDeleteTask);
  inputBox.value = "";
  saveData();
}
const deleteTask = document.getElementsByTagName("li");
for (let i = 0; i < deleteTask.length; i++) {
  let buttonDeleteTask = document.createElement("span");
  buttonDeleteTask.innerHTML = "\u00d7";
  deleteTask[i].appendChild(buttonDeleteTask);
}
listContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    const li = e.target.parentElement;
    li.remove();
    saveData();
  } 
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data",listContainer.innerHTML);
}
showTask();




