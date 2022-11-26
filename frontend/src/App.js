import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login2 from './componentes/Login2';
import Admin from './componentes/administrador'
import Cliente from './componentes/cliente';

function App() {
  /*return (
    <div className="App">
      <Inicio />      
    </div>
  );*/
  const [token, setToken] = useState();

  if(token !== "test123" && token !== "cliente123") {
    console.log(token)
    return <Login2 setToken={setToken} />
  }else{
    console.log(token)
    if(token === "test123") {
      return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/cliente">
                <Cliente />
              </Route>            
            </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }
}

export default App;
