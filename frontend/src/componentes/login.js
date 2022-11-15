import React, { useState } from "react";
import Inicio from "./inicio";
import '../styles/styleLogin.css'


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
    }

    function iniciars() {
        let loger =
            <div class="login-page">
                <div class="form">
                    <form class="login-form">
                        <input type="text && email" placeholder="username or email" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p class="message">
                            <label>
                                <input type="radio" name="regist" value="amarillo" /> User
                            </label>
                            <label>
                                <input type="radio" name="regist" value="amarillo" /> Admin
                            </label>
                        </p>
                    </form>

                </div>
            </div>

        setLogear(logear = loger)
        setRegs(regs = '')

    }


    function registrar() {
        let regst =
            <div class="login-page">
                <div class="form">
                    <form class="register-form">
                        <input type="text" placeholder="name" />
                        <input type="text" placeholder="last name" />
                        <input type="text" placeholder="ID" />
                        <input type="text" placeholder="email address" />
                        <input type="password" placeholder="password" />
                        <button>create</button>
                    </form>
                </div>
            </div>

        setLogear(logear = '')
        setRegs(regs = regst)
    }


    let [barra, setBarra] = useState(init)
    let [logear, setLogear] = useState('')
    let [regs, setRegs] = useState('')

    return (
        <div>
            {barra}
            {logear}
            {regs}
        </div>
    )
}

export default Login