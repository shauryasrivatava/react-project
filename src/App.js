import './App.css';
import Sidebar from './componets/Sidebar';
import Navbar from './componets/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router className="App">
      <Sidebar/>
      <Navbar/>
    </Router>
  );
}

export default App;
