import React, {useState} from "react";
import '../styles/styleInicio.css'
import Cliente from "./cliente";
import Admin from "./administrador";

const Inicio = () => {
    
    let init = <div>
                    <h1> Página de Inicio </h1>
                    <button onClick={vistaCliente} className="buttonInicio"> Cliente </button>
                    <button onClick={vistaAdmin} className="buttonInicio"> Adminitrador </button>
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