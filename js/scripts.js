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

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = todoInput.value;

    if (inputValue) {
        console.log(inputValue);
        // save todo
    }

});