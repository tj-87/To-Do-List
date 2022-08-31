// seleção de elementos

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector ("cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

let oldInputValue;

//Funções

const saveTodo =(text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTilte = document.createElement("h3");
    todoTilte.innerText = text;
    todo.appendChild(todoTilte);
    
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML =  '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML =  '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleBtn = document.createElement("button");
    deleBtn.classList.add("remove-todo");
    deleBtn.innerHTML =  '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleBtn);
    
    todolist.appendChild(todo)

    todoInput.value ="";
    todoInput.focus();

};

const toggleForms = () => {
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todolist.classList.toggle("hide");
};



// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue)
    }
});

document.addEventListener("click", (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    let todoTilte;

    if (parentEl && parentEl.querySelector("h3")) {
        todoTilte = parentEl.querySelector("h3").innerText;
    }

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done");

    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove();
    }

    if (targetEl.classList.contains("edit-todo")) {
        toggleForms();

        editInput.value = todoTilte
        oldInputValue.value = todoTilte
    }
});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()
    toggleForms();
})