import './styles.css';
import { Todo, TodoList } from './classes';
import { crearHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => {
    crearHtml( todo );
});

console.log( "todo", todoList.todos );

