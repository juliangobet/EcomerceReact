import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import Inicio from './components/pages/Inicio'
import Agregar from './components/pages/Agregar'
import Libros from './components/pages/Libros'

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>
      </Router>

    </div>
  );
}

export default App;
