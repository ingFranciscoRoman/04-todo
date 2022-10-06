import './styles.css';
import { Todo, TodoList } from './classes';
import { crearHtml } from './js/componentes';

export const todoList = new TodoList();
const tarea = new Todo('Aprender Javascript!!');

//tarea.completado = true; Eso eeee

console.log( todoList );
crearHtml( tarea );
