// import logo from './platzi.webp';
import React from 'react'
import { Add } from '../components/Add';
import { Counter } from '../components/Counter';
import { Items } from '../components/Items';
import { Search } from '../components/Search';
import { Todos } from '../components/Todos';
import '../styles/App.css'
import { useLocalStrorage } from '../hooks/UseLocalStrorage';

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

  return (
    <React.Fragment>
      <Counter total={ todosCompleted } completed={ todosAll } />
      <Search  todoValue={ todoValue } setTodoValue={ setTodoValue } />
      <Todos>
        { searchTodo.map(( todoItem )=>(
          <Items 
            key={ todoItem.text }
            text={ todoItem.text }
            finished={ todoItem.finished }
            onComplete={ () => completeTodo(todoItem.text) }
            onDelete={ () => deleteTodo(todoItem.text) }
          />
        )) }
      </Todos>
      <Add/>
    </React.Fragment>
  );
}

export default App;
