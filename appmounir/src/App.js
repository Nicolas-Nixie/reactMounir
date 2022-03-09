import './App.css';
import Button from './component/Boutton';
import Tasklist from './component/TaskList';
import MonForm from './component/MonForm';
import TaskList from './component/TaskList-M';
import { Link } from "react-router-dom";

const myObject = {
  name: 'Coni'
};
console.log(myObject);

const newObjet = {
  name: 'Billy',
  ...myObject,
  age: 55
};

console.log(newObjet);

function App() {

  const myTaskList = [
    {
      title: 'menage',
      time: 90,
      complexity: 4,
      room: 'chambre'
    },
    {
      title: 'cuisine',
      time: 240,
      complexity: 1,
      room: 'cuisine'
    },
    { 
      title: 'rangement',
      time: 30,
      complexity: 2,
      room: 'sallon'
    },

  
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/rats">Rats</Link>
        <Button premsProps={"fion"}/>
        <Tasklist list={myTaskList} />
        <TaskList list={myTaskList} />
      </header>
    </div>
  );
}

export default App;
