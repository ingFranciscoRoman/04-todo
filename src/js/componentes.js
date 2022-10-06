import { todoList } from "..";
import { Todo, TodoList } from "../classes";

const divTodoList = document.querySelector('.todo-list');
const txtTodo = document.querySelector('.new-todo');

export const crearHtml = ( todo ) =>{

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}

txtTodo.addEventListener('keyup', ( event )=>{

    if( event.keyCode === 13 && txtTodo.value.length > 0 ){

        const nuevoTodo = new Todo( txtTodo.value );
        todoList.nuevoTodo( nuevoTodo );

        console.log(todoList);

        crearHtml( nuevoTodo );
        txtTodo.value = '';

    }

});

divTodoList.addEventListener('click', (event)=>{
    
    const nombreElemento = event.target.localName; //input, label, button
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');
    
    if ( nombreElemento.includes('input') ) {

        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    }else if (nombreElemento.includes('button')) {
        
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );

    }

});
