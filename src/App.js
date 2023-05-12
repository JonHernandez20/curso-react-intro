// import logo from './platzi.webp';
import { Add } from './Add';
import './App.css';
import { Counter } from './Counter';
import { Items } from './Items';
import { Search } from './Search';
import { Todos } from './Todos';
import React from 'react'

const TodosInfo = [
  { text: "Cortar cebolla", finished: true},
  { text: "Tender ropa", finished: true},
  { text: "LLevar a los perros al parque", finished: false},
  { text: "Ir al mercado", finished: false},
  { text: "Partido de futbol a las 7:00pm", finished: false},
  { text: "Lavar el baño", finished: false},
]

function App() {
  return (
    <React.Fragment>
      <Counter total={13} completed={16} />
      <Search/>
      <Todos>
        { TodosInfo.map((todoItem)=>(
          <Items key={todoItem.text} info={todoItem.text} finished={todoItem.finished} />
        )) }
      </Todos>
      <Add/>
    </React.Fragment>
  );
}

export default App;
