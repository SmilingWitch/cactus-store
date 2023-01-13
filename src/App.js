import logo from './logo.svg';
import './App.css';
import PrincipalPage from './components/pricipalPage/PrincipalPage';
import { Routes, Route } from 'react-router-dom';
import Suculentas from './pages/Suculentas.jsx';
import Cactus from './pages/Cactus';

function App() {
  return (
    <div>
      <Routes>
      <Route path = "/" element = {<PrincipalPage/>} />
      <Route path = "/cactus" element = {<Cactus/>}/> 
      <Route path = "/suculentas" element = {<Suculentas/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
