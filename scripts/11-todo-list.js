const todolist = [{
  name: 'Learn Java',
  dueDate:'2025-12-19'
}, {
  name:'input 2',
  dueDate: '2022-12-22'}];

renderTodoList();

function renderTodoList(){

  let todolistHTML = '';
/* Example of generating the HTML */
  for (let i = 0; i < todolist.length; i++){
    const todoObject = todolist[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    //const {name} = todoObject;
    /*example of deconstructing line 16 and 17 to be shorter */
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
      todolist.splice(${i}, 1);
      renderTodoList();
    " class="delete-todo-button">Delete</button>
    `;
    todolistHTML += html;
  }
 
  document.querySelector('.js-todo-list')
    .innerHTML = todolistHTML;
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