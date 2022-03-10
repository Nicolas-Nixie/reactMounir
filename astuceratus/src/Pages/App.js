import Navbar from '../Components/Navbar/Navbar';
import Home from '../Components/Home/Home';
import ImagePlayer from "../Components/Home/Caroussel/Caroussel" 
import Icon from '../Components/Home/Icons/Icon';

function App() {
  const slideData = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
];

  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <div className='container'><ImagePlayer pictures={slideData}/></div>
      <Icon/>
    </div>
  );
}

export default App;