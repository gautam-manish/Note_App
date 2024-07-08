const noteContainer = document.querySelector(".noteContainer");
const createBtn = document.querySelector(".btn");

createBtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "inputBox";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    inputbox.appendChild(img);
    noteContainer.appendChild(inputbox);
    addEventListeners(inputbox);
    updateStorage();
});

noteContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

function addEventListeners(note) {
    note.addEventListener("keyup", function () {
        updateStorage();
    });
}

function updateStorage() {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        noteContainer.innerHTML = savedNotes;
        const notes = document.querySelectorAll(".inputBox");
        notes.forEach(addEventListeners);
    }
}

showNotes();
