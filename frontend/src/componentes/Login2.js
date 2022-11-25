import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const loginUser = async (credentials) => {
    const resultado = await axios.get("http://localhost:4000/user");
    let tmpInfo;
    let setToken = false;
    
    if(resultado.status === 200 && resultado.statusText === "OK"){
        console.log(`status: 200`);
        tmpInfo = Object.entries(resultado.data);
        tmpInfo = Object.fromEntries(tmpInfo);
        console.log(tmpInfo)
        for (var clave in tmpInfo){
          
            if (tmpInfo.hasOwnProperty(clave) && clave == "users") {
                let newvalue = tmpInfo[clave];
                console.log(tmpInfo[clave].length);
                for(let i=0; i < tmpInfo[clave].length; i++){
                    console.log(`${i} array:: ${newvalue[i].name} : ${newvalue[i].rol} : ${newvalue[i].password}`)
                    if(newvalue[i].nickName == credentials.username ){
                        if(newvalue[i].password == credentials.password ){
                            console.log("success")
                            setToken = true;
                            break; 
                        }
                    }
                }
                console.log("Exit..")
          
            }else 
                if(tmpInfo.hasOwnProperty(clave) && clave == "token" && setToken){
                console.log("La clave es " + clave+ " y el valor es " + tmpInfo[clave]);
                return tmpInfo[clave];
            }
        }

    }
    return resultado
  }   

export default function Login2({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        console.log(`token:: ${token}`)
        setToken(token);
    }

    //console.log(`handleSubmit:: ${handleSubmit}`)

    return(
        <div class="form" className="login-wrapper">
            <h1>Please Log In</h1>
            <form class="login-form" onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input id="usernameLogin" placeholder="nickname" type="text" onChange={e => setUserName(e.target.value)}/>
            </label>
            <label>
                <p>Password</p>
                <input id="passwordLogin" placeholder="password" type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
            </form>
            <p class="message">
                <label>
                    <input type="radio" id="radioUser" name="regist" value="amarillo" /> User
                </label>
                <label>
                    <input type="radio" id="radioAdmin" name="regist" value="amarillo" /> Admin
                </label>
            </p>
        </div>
    )
}

Login2.propTypes = {
    setToken: PropTypes.func.isRequired
  }
