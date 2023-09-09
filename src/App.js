// import logo from './logo.svg';
import { Home } from 'react-ionicons';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import All from './pages/All';
import Navbar from './components/navbar/Navbar';
import Info from './components/info/Info';
import Cactus from './components/cactus/Cactus';
import Suculentas from './components/suculentas/Suculentas';
import Error from './components/error/Error';
import PrincipalPage from './components/pricipalPage/PrincipalPage';
import CartTotal from './components/cartTotal/CartTotal';
import LogIn from './components/logIn/LogIn';
import SingUp from './components/singUp/SingUp';
import Blog from './components/blog/Blog';



function App() {
  return ( 
   <div>

     <Navbar></Navbar>
      
      <Routes>
        <Route path = "*" element = { <PrincipalPage /> } />
        <Route path = "/catalogue" element = {<All/>}/>
        <Route path = "/catalogue/cactus" element = {<Cactus/>}/>
        <Route path = "/catalogue/succulent" element = {<Suculentas/>}/>
        <Route path = "/*" element = {<Error/>}> </Route>
        <Route path = "/info" element = {<Blog/>}/>
        <Route path = "/cart" element = {<CartTotal/>}/>
        <Route path = "/login" element = {<LogIn/>}/>
        <Route path = "/singup" element = {<SingUp/>}/>
  </Routes>
  </div>
    
  );
}

export default App;
