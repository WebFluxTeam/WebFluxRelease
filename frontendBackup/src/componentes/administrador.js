import React, { useState } from "react";
import '../styles/styleAdminstrador.css'
import Inicio from "./inicio";

function Admin () {
    let init = <div className="blockAdmin">
                    <button className="buttonAdmin"> Agregar </button>
                    <button className="buttonAdmin"> Editar </button>
                    <button className="buttonAdmin"> Eliminar </button>
                    <button onClick={volver} className="buttonAdmin"> Volver </button>
                </div>  
    
    function volver () {
        setBarra(barra=<Inicio/>)
    }
    
    let [barra, setBarra] = useState(init)
    return(
        <div>
            {barra}                  
        </div>
    )
}

export default Admin