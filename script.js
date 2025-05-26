function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Add complete sound
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) {
      document.getElementById("completeSound").play();
    }
  });

  // Add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

// Theme toggle logic
const toggleBtn = document.getElementById("themeToggle");
const container = document.getElementById("todoContainer");

toggleBtn.addEventListener("click", () => {
  container.classList.toggle("dark");
  const isDark = container.classList.contains("dark");
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});
