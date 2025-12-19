const todolist = [{
  name: 'Learn Java',
  dueDate:'2025-12-19'
}, {
  name:'input 2',
  dueDate: '2022-12-22'}];

renderTodoList();
document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
})
function renderTodoList(){

  let todolistHTML = '';
/* Example of generating the HTML */
  todolist.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todolistHTML += html;
  }) 
  document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      todolist.splice(index, 1);
      renderTodoList();
    });
  });
  
}

  function addTodo(){
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todolist.push({
    //name: name,
    //dueDate: dueDate
    //shortuct when objects proprty & variable names are the same this is called shorthand property syntax
    name,
    dueDate
  });


  inputElement.value ='';

  renderTodoList();
}

function deleteTodo(){

}