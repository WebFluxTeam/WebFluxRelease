import React, {useState} from "react";
import '../styles/styleInicio.css'
import Cliente from "./cliente";
import Admin from "./administrador";
import Login from './login'


const Inicio = () => {
    
    let init =  <div className="blockClient" id="ppal">
                    <h1>Bienvenidos a Webflux</h1>
                    <button onClick={vistaCliente} className="buttonheader"> CLIENTE </button>
                    <button onClick={vistaAdmin} className="buttonheader"> ADMINISTRADOR </button>
                    <button onClick={logs} className="buttonheader"> LOGIN </button>
                </div>

    let [estado, setEstado] = useState(init)
    
    function vistaCliente(){
       setEstado(estado = <Cliente />)       
    }
    function vistaAdmin(){
        setEstado(estado = <Admin/>)  
    }
    function logs(){
        setEstado(estado = <Login/>)  
    } 

    return(
        <div>
            <Cliente />
        </div>        
    )
}

export default Inicio