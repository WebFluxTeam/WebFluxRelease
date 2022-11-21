import React, { useState } from "react";
import Inicio from "./inicio";
import '../styles/styleLogin.css'
import axios from 'axios';


const Login = () => {

    let init =
        <div>
            <div className="blockCliente">
                <button onClick={iniciars} className="buttonheader"> Login </button>
                <button onClick={registrar} className="buttonheader"> Signin </button>
                <button onClick={volver} className="buttonheader"> Volver </button>

            </div>
        </div>

    function volver() {
        setBarra(barra = <Inicio />)
        setLogear(logear = "")
        setRegs(regs = "")
        setRegistrarUsaurio(registrarUsuario = '')
    }

    function iniciars() {
        let loger =
            <div class="login-page">
                <div class="form">
                    <form class="login-form">
                        <input type="text && email" id="usernameLogin" placeholder="username or email" />
                        <input type="password" id="passwordLogin" placeholder="password" />
                        <button>login</button>
                        <p class="message">
                            <label>
                                <input type="radio" id="radioUser" name="regist" value="amarillo" /> User
                            </label>
                            <label>
                                <input type="radio" id="radioAdmin" name="regist" value="amarillo" /> Admin
                            </label>
                        </p>
                    </form>

                </div>
            </div>

        setLogear(logear = loger)
        setRegs(regs = '')
        setRegistrarUsaurio(registrarUsuario = '')        

    }


    function registrar() {
        let regst =
            <div class="login-page">
                <div class="form">
                    <form class="register-form">
                        <input type="text" id="alias" placeholder="Alias" />
                        <input type="text" id="name" placeholder="Name" />
                        <input type="text" id="lastName" placeholder="Last Name" />
                        <input type="text" id="emailAddress" placeholder="Email Address" />
                        <input type="password" id="password" placeholder="Password" />
                        <button onClick={crearUsuario}>create</button>
                    </form>
                </div>
            </div>

        setLogear(logear = '')
        setRegs(regs = regst)
        setRegistrarUsaurio(registrarUsuario = regst)
    }

    const registrarDatos = async (usuario) => {
        const resultado = await axios.post("http://localhost:4000/user/create", usuario);
        return resultado.data
      }
    
      async function crearUsuario() {
        ///////////////////////////////////////
        /* USUERS REGISTER   */
        //////////////////////////////////////
        let nickName = document.getElementById("alias").value;
        let name = document.getElementById("name").value;
        let lastName = document.getElementById("lastName").value;
        let emailAddress = document.getElementById("emailAddress").value;
        let password = document.getElementById("password").value;
        let rol = "admin"; //document.getElementById("password").value;
        const usuario = { "nickName": String(nickName), "name": String(name), "lastName": String(lastName), "emailAddress": String(emailAddress), "rol": String(rol), "password": String(password) }
        registrarDatos(usuario)
        let regist = alert("Se ha registrado el usuario: " + name+" "+lastName);
          //<!--<h1>{"Se ha registrado el usuario: " + name+" "+lastName}</h1>-->
          
        setRegistrarUsaurio(registrarUsuario = regist)
    
    
      }


    let [barra, setBarra] = useState(init)
    let [logear, setLogear] = useState('')
    let [regs, setRegs] = useState('')
    let [registrarUsuario, setRegistrarUsaurio] = useState("")

    return (
        <div>
            {barra}
            {logear}
            {regs}
            {registrarUsuario}
        </div>
    )
}

export default Login