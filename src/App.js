import './App.css';
import Cards from './components/Cards/Cards';
import Icons from './components/Icons/Icons';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App mx-auto">
      <Navbar />
      <br />
      <Icons />
      <br />
      <Cards />
    </div>
  );
}

export default App;
