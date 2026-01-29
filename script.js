window.onload = function () {
  var saved = localStorage.getItem("todos");
  if (saved != null) {
    document.getElementById("list").innerHTML = saved;
  }
};

function addTask() {

  var input = document.getElementById("task");
  var text = input.value;

  if (text == "") {
    alert("Enter a task");
    return;
  }

  var li = document.createElement("li");
  li.innerHTML = text;

  li.onclick = function () {
    li.classList.toggle("completed");
    saveTasks();
  };

  var delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.className = "del";

  delBtn.onclick = function () {
    li.remove();
    saveTasks();
  };

  li.appendChild(delBtn);
  document.getElementById("list").appendChild(li);

  input.value = "";
  saveTasks();
}

function saveTasks() {
  var list = document.getElementById("list").innerHTML;
  localStorage.setItem("todos", list);
}