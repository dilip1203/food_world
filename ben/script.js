document.getElementById('addButton').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    const todoList = document.getElementById('todoList');

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = todoText;

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(li);
    });

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Add the list item to the list
    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = '';
});
