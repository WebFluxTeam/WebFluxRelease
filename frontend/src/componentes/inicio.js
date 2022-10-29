import React, {useState} from "react";
import '../styles/styleInicio.css'
import Cliente from "./cliente";
import Admin from "./administrador";
//import Formulario from "../login/signup"

const Inicio = () => {
    
    let init =  <div className="blockAdmin" id="ppal">
                    <label className="labelAdmin" ><small>INIT VIEW</small></label>
                    <button onClick={vistaCliente} className="btn"> CLIENTE </button>
                    <button onClick={vistaAdmin} className="btn"> ADMINISTRADOR </button>
                </div>

    let [estado, setEstado] = useState(init)
    
    function vistaCliente(){
       setEstado(estado = <Cliente />)       
    }
    function vistaAdmin(){
        setEstado(estado = <Admin/>)  
    }

    /*function sign (){
        setEstado(estado = <Formulario />)
        <!--a><button onClick={sign} className="bodyI"> Signup</button></a-->
    }*/    

    return(
        <div>
            {estado}
        </div>        
    )
}

export default Inicio