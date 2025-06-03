function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");
  li.classList.add("task-item");

   li.innerHTML = `
    <span class="task-name">${taskText}</span>
    <div class="task-buttons">
      <button class="complete-btn" onclick="toggleComplete(this)">✔</button>
      <button class="delete-btn" onclick="deleteTask(this)">✖</button>
    </div>
  `;

  taskList.appendChild(li);
  input.value = "";

  applyFilter();
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
}

function toggleComplete(button) {
  const li = button.closest("li");
  li.classList.toggle("completed");
  applyFilter();
}

function filterTasks(type) {
  filter = type;
  applyFilter();
}

function applyFilter() {
  const tasks = document.querySelectorAll("#task-list li");
  tasks.forEach(task => {
    const isCompleted = task.classList.contains("completed");
    task.style.display =
      filter === "all" ||
      (filter === "completed" && isCompleted) ||
      (filter === "pending" && !isCompleted)
        ? "flex"
        : "none";
  });
}