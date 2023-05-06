import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Catalog from './pages/Catalog/Catalog';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

function App() {

  return (
    <div className="App">
      <Routes>
         <Route path='/' element= {<Home/>}/>
         <Route path='/catalog' element= {<Catalog/>}/>
         <Route path='/login' element= {<Login/>}/>
      </Routes>
    </div>
  );
}
export default App;