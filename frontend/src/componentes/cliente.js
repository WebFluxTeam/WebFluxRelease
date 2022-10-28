import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import administrador from "./administrador";
import datos from '../archivo.json'


function Cliente(){
  
    let init = <div className="blockCliente">
                    <button onClick={listar} className="buttonCliente"> Lista productos </button>
                    <button onClick={agregar} className="buttonCliente"> Carrito </button>
                    <button onClick={volver} className="buttonCliente"> Volver </button>
                </div>

    function listar(){
        let mod =
       <table class="center">
          <tr>
            <th>IdProducto</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
          {
                      datos.map(producto => (
                        <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.apellido}</td>
                        <td>{producto.edad}</td>
                    </tr>
                      )) }
        </table>
        setListarProductos(listarProductos=mod)
        setRegistrarProducto(registrarProducto="")

    }

    function agregar(){

    }

    function volver(){
        setBarra(barra=<Inicio/>)
        setListarProductos(listarProductos="")
        setRegistrarProducto(registrarProducto="")
    }


    // Crear estados
    // estado barra inicial
    let [barra, setBarra] = useState(init)
    // estado listar y agregar producto
    let [listarProductos, setListarProductos] = useState("")
    // estado agregar carrito
    let [registrarProducto, setRegistrarProducto] = useState("")

    let listProductos = [
        {"idProducto": 1, "nombre": "informatica1", "descripcion": "libro informatica1", "precio":12, "stock":2},
        {"idProducto": 2, "nombre": "informatica2", "descripcion": "libro informatica2", "precio":14, "stock":3}, 
        {"idProducto": 3, "nombre": "informatica3", "descripcion": "libro informatica3", "precio":16, "stock":4},
        {"idProducto": 4, "nombre": "informatica4", "descripcion": "libro informatica4", "precio":18, "stock":5},
        {"idProducto": 5, "nombre": "informatica6", "descripcion": "libro informatica6", "precio":20, "stock":6}
      ]


    return(
        <div >
            {barra}
            {listarProductos}
            {registrarProducto}     
        </div>
    )

}
export default Cliente