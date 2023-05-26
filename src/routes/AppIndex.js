// import logo from './platzi.webp';
import React from 'react'
import '../styles/App.css'
import { useLocalStrorage } from '../hooks/UseLocalStrorage';
import { AppUI } from '../components/App';

function App() {

    // Input de busqueda.
    const [ todos, setTodos ] = useLocalStrorage('TODOS_V1', []);
    const [ todoValue, setTodoValue ] = React.useState('');  

    // Validacion de completado.
    const todosCompleted = todos.filter( check => check.finished ).length;
    const todosAll = todos.length;

    // Mostrar todos que coincidan con lo que el usuario guardo.
    const searchTodo = todos.filter( item => {
      const todoText = item.text.toLowerCase();
      const searchText = todoValue.toLowerCase();
        return todoText.includes(searchText);
    });

    // Hacer check de completar todo 
    const completeTodo = (text) => {
      const newListTodos = [...todos];
      const todoIndex = newListTodos.findIndex((valueTodo) => {
        return valueTodo.text === text;
      });
      newListTodos[todoIndex].finished = true;
      setTodos(newListTodos);
    }

    // Hacer check de borrar todo
    const deleteTodo = (text) => {
      const newListTodos = [...todos];
      const todoIndex = newListTodos.findIndex((valueTodo) => {
        return valueTodo.text === text;
      });
      newListTodos.splice(todoIndex, 1);
      setTodos(newListTodos);
    }

    return(
      <AppUI
      todosCompleted = { todosCompleted }
      todosAll = { todosAll }
      setTodoValue = { setTodoValue }
      todoValue = { todoValue }
      searchTodo = { searchTodo }
      completeTodo = { completeTodo }
      deleteTodo = { deleteTodo }
      />
    );
}

export default App;
