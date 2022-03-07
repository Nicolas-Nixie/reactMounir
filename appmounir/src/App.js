import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Button from './component/Boutton';
import Tasklist from './component/TaskList';
import MonForm from './component/MonForm';

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
      <Navbar/>
      <header className="App-header">
        <Button premsProps={"fion"}/>
        <img src={logo} className="App-logo" alt="logo" />
        <Tasklist list={myTaskList} />
        <MonForm/>
      </header>
    </div>
  );
}

export default App;
