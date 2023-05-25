// import logo from './platzi.webp';
import React from 'react'
import { Add } from './Add';
import { Counter } from './Counter';
import { Items } from './Items';
import { Search } from './Search';
import { Todos } from './Todos';
import '../styles/App.css'

// const TodosInfo = [
//   { text: "Tender ropa", finished: false},
//   { text: "LLevar a los perros al parque", finished: false},
//   { text: "Ir al mercado", finished: false},
//   { text: "Usar estados derivados", finished: false},
//   { text: "Entrenar Kick Boxing", finished: false },
//   { text: "Lavar al perro", finished: false },
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(TodosInfo));
// localStorage.removeItem('TODOS_V1');

function useLocalStrorage (itemName, initialValue) {

  // Valid LocalStrorage
  const localStrorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStrorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStrorageItem);
  }

  // Propio estado
  const [ item, setItem ] = React.useState(parsedItem);

  // Guardar todos
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    
    setItem(newItem);
  };

  return [item, saveItem];
}

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
