const refs = {
    inputRef: document.querySelector('.content'),
    todoList: document.querySelector('.todo-list'),
    addBtn: document.querySelector('#todo-button-add'),
  };

refs.addBtn.addEventListener('click', addTodo);

function addTodo(e){
   e.preventDefault();
   if(refs.inputRef.value.length<1){
       alert('Please type something')
       return;
   }
   refs.todoList.insertAdjacentHTML('beforeend',
    `<div class="todo-card new-todo">
        <p styles="flex-wrap:wrap" class"todo-text">${refs.inputRef.value}</p> 
        <div style="margin-left:auto" class="btns-container">
            <button class="todo-button todo-button-delete changing-btn" type ="button" style="background-color:lightblue">/</button>
            <button class="todo-button todo-button-delete delete-btn" type="button">X</button>
        <div/>
    </div>`);
   refs.inputRef.value= '';
   const changingBtns = document.querySelectorAll('.changing-btn');
   changingBtns.forEach(btn => btn.addEventListener('click',changeTodo));
   const deleteBtns = document.querySelectorAll('.delete-btn');
   deleteBtns.forEach(btn => btn.addEventListener('click', deleteTodo));
 
}

function changeTodo(e){
    // console.log(e.path[2].children)
    e.path[2].firstElementChild.innerHTML = 
        `<input value=${e.path[2].firstElementChild.innerText}>
        <button class="save-btn" type="button">Save</button>`;
    const saveBtn = document.querySelector('.save-btn');
    saveBtn.addEventListener('click', saveTodoText);
}

function deleteTodo(e){
    const todoRefs= document.querySelectorAll('.new-todo');
    todoRefs.forEach(todo =>{
        if(todo === e.path[2]){
            todo.parentNode.removeChild(todo);
        }
    });
}

function saveTodoText(e){
    e.path[2].children[0].innerHTML =e.path[1].children[0].value;
}