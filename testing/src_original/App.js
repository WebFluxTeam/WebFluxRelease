import './App.css';
//import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter as  Router, Routes, Route, Navigate} from 'react-router-dom';
//import NavigationBar from './layouts/navigationBar';
//import Barra from './layouts/navigationBar';
//import componentes created

import About from './components/about'
import Contact from './components/contact'
import Home from './components/home'
import NavigationBar from './layouts/navigationBar'

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={ <NavigationBar /> }/>
          <Route index element={<Home />} />          
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />}/>
          <Route path='*' element={<Navigate replace to ="/" />} />
      </Routes>
      </Router>    
    </div>
  );
}

export default App;
