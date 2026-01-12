 const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const li = document.createElement("li");

        li.innerHTML = `
            <div>
                <span class="task-text">${taskText}</span>
            </div>
            <div class="actions">
                <span class="status pending">Pending</span>
                <button onclick="completeTask(this)">Complete</button>
            </div>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    }

    function completeTask(button) {
        const li = button.closest("li");
        const status = li.querySelector(".status");

        li.classList.add("completed");
        status.textContent = "Completed";
        status.classList.remove("pending");
        status.classList.add("completed-badge");
        button.remove();
    }