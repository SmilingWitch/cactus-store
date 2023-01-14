// import logo from './logo.svg';
import './App.css';
import PrincipalPage from './components/pricipalPage/PrincipalPage';
import { Routes, Route } from 'react-router-dom';
import Suculentas from './pages/Suculentas';
import Cactus from './pages/Cactus';
import All from './pages/All';

function App() {
  return (
    <div>
      <Routes>
      <Route path = "/" element = { <PrincipalPage /> } />
      <Route path = "/cactus & suculents" element = {<Cactus/>}/> 
      <Route path = "/info" element = {<Suculentas/>}/>
      <Route path = "/all" element = {<All/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
