import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
