function addTask() {
    let title = document.getElementById("title").value.trim();
    let desc = document.getElementById("desc").value.trim();

    if (title === "" || desc === "") {
        alert("Please fill all fields");
        return;
    }

    let task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <span>${title}</span>
        <span>${desc}</span>
        <button onclick="deleteTask(this)">X</button>
    `;

    document.getElementById("taskList").appendChild(task);

    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
}

function deleteTask(btn) {
    btn.parentElement.remove();
}