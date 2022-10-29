import React, {useState} from "react";
import '../styles/styleInicio.css'
import Cliente from "./cliente";
import Admin from "./administrador";

const Inicio = () => {
    
    let init = <div className="primero">
                    <h1> Bienvenidos a Webflux </h1>
                    <button onClick={vistaCliente} className="buttonInicio"> Cliente </button>
                    <button onClick={vistaAdmin} className="buttonInicio"> Administrador </button>
                </div> 

    let [estado, setEstado] = useState(init)
    
    function vistaCliente(){
       setEstado(estado = <Cliente />)       
    }
    function vistaAdmin(){
        setEstado(estado = <Admin/>)  
    }    

    return(
        <div>
            {estado}
        </div>        
    )
}

export default Inicio