import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import datos from '../archivo.json'

function Cliente(){
    const volver = () => { 
        setBarra(barra= <Inicio />)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
        setModificar(modificar="")
    }

    function inicializacion(){
        setInicio(inicio=imagen)
        setvisualizar(visualizar=[])
        setModificar(modificar="")
    }

    function visualizacion () {
        setInicio(inicio="")
        setvisualizar(visualizar=datos)
        setModificar(modificar="")
    }

    function modificacion () {
        let mod = 
        <div>
            <div> <label> Nombre </label> <input type="text"></input> </div>
            <div> <label> Apellido </label> <input type="text"></input> </div>
            <div> <label> Edad </label> <input type="number"></input></div>
            <button> Guardar </button>
        </div>
        setModificar(modificar=mod)
        setInicio(inicio="")
        setvisualizar(visualizar=[])
    }

    let init = <div className="blockCliente">
                    <button onClick={inicializacion} className="buttonCliente"> Inicio </button>
                    <button onClick={visualizacion} className="buttonCliente"> Visualizar </button>
                    <button onClick={modificacion} className="buttonCliente"> Modificar </button>
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>
    let imagen = <img src="https://th.bing.com/th/id/OIP.mrIRWyppN6UDnHR3gnWjPgHaEk?pid=ImgDet&rs=1"></img>
    
    let [barra, setBarra] = useState(init)    
    let [inicio, setInicio] = useState(imagen)
    let [visualizar, setvisualizar] = useState([])
    let [modificar, setModificar] = useState("")

    return(
        <div >
            {barra} 
            {inicio}  
            {visualizar.map( (elem, idx) => {
                return(
                    <div className="objetos" key={elem.id}>                        
                       <strong> Objeto {idx+1} : </strong> {elem.nombre + " " + elem.apellido + " " + elem.edad}
                    </div>
                )
            })} 
            {modificar}        
        </div>
    )

}
export default Cliente