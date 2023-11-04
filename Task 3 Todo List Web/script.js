const button = document.getElementById('js-add-todo-btn');

const todoElement = document.getElementById('js-input-new-todo');

const page = document.getElementById('js-todo-list-page');

const duDateElement = document.getElementById('js-input-date');


const todoList = [];

//renderTodo();

const renderTodo = () => {
    let todolistHTML = '';

    for(let i = 0 ; i < todoList.length ; i++){
        const todoPair = todoList[i];
        const { name, dueDate} = todoPair;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick = "
        todoList.splice(${i},1);
        renderTodo();
        "
        class = "deleteTodoButton"
        >
        Delete</button>`;
        todolistHTML += html;
    }
    page.innerHTML = todolistHTML;
    
}


button.addEventListener('click', () => {

    const name = todoElement.value;
    const dueDate = duDateElement.value;
    todoList.push({
        name,
        dueDate
    });

    todoElement.value = '';

    renderTodo();
});
