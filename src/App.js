// import logo from './platzi.webp';
import { Add } from './Add';
import './App.css';
import { Counter } from './Counter';
import { Items } from './Items';
import { Search } from './Search';
import { Todos } from './Todos';

function App() {
  return (
    <div className="App">
        <Counter/>
        <Search/>
        <Todos>
          <Items/>
          <Items/>
          <Items/>
        </Todos>
        <Add/>
    </div>
  );
}

export default App;
