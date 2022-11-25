import './App.css';
//import Inicio from './componentes/inicio';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './componentes/Dashboard';
import Preferences from './componentes/Preferences';
import Login2 from './componentes/Login2';
import Admin from './componentes/administrador'
//import useToken from './componentes/Apps/useToken';


/*function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}*/

function App() {
  /*return (
    <div className="App">
      <Inicio />      
    </div>
  );*/
  const [token, setToken] = useState();

  //const [token, setToken] = getToken();
  //const { token, setToken } = useToken();

  console.log("Señor Alexander...")
  console.log(token)

  if(token !== "test123") {
    console.log(`Token::: ${token}`)
    return <Login2 setToken={setToken} />
  }else{
    return (
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
