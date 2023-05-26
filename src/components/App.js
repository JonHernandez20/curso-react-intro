
import { Add } from '../components/Add';
import { Counter } from '../components/Counter';
import { Items } from '../components/Items';
import { Search } from '../components/Search';
import { Todos } from '../components/Todos';

function AppUI({
    todosCompleted,
    todosAll,
    setTodoValue,
    todoValue,
    searchTodo,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
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
        </>
      );
}

export { AppUI };
