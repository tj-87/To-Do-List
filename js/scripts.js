// seleção de elementos

const todoform = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector ("cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");

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

// Eventos
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue)
    }

});