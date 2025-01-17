// Array to store todos
let todos = [];

// DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to create edit button
function createEditButton(index) {
    const editButton = document.createElement('button');
    editButton.className = 'edit-btn';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editTodo(index));
    return editButton;
}

// Function to create delete button
function createDeleteButton(index) {
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteTodo(index));
    return deleteButton;
}

// Function to create todo item
function createTodoItem(todo, index) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    // Create and add the todo text
    const todoSpan = document.createElement('span');
    todoSpan.textContent = todo;
    
    // Create buttons
    const editButton = createEditButton(index);
    const deleteButton = createDeleteButton(index);
    
    // Add elements to li
    li.appendChild(todoSpan);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    
    return li;
}

// Function to render todos
function renderTodos() {
    todoList.innerHTML = ''; // Clear the list
    todos.forEach((todo, index) => {
        const todoItem = createTodoItem(todo, index);
        todoList.appendChild(todoItem);
    });
}

// Function to add new todo
function addTodo(event) {
    event.preventDefault(); // Prevent form submission
    const newTodo = todoInput.value.trim();
    
    if (newTodo) {
        todos.push(newTodo);
        todoInput.value = ''; // Clear the input
        renderTodos();
    }
}

// Function to edit a todo
function editTodo(index) {
    const todoToEdit = todos[index];
    const updatedTodo = prompt('Edit your todo:', todoToEdit);
    
    if (updatedTodo !== null && updatedTodo.trim() !== '') {
        todos[index] = updatedTodo.trim();
        renderTodos();
    }
}

// Function to delete a todo
function deleteTodo(index) {
    const confirmDelete = confirm('Are you sure you want to delete this todo?');
    
    if (confirmDelete) {
        todos.splice(index, 1);
        renderTodos();
    }
}

// Event Listener for form submission
todoForm.addEventListener('submit', addTodo);

// Initial render
renderTodos();