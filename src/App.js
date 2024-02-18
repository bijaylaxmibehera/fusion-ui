import { Route, Routes } from 'react-router';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './pages/Home/Home';
import { Component } from './pages/Component/Component';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/components' element={<Component/>}/>
     </Routes>
    </div>
  );
}

export default App;
