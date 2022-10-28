import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import listProductos from '../listaProductos.json'


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
            <th>Comprar</th>
          </tr>
          {
                      listProductos.map(producto => (
                        <tr key={producto.id}>
                        <td>{producto.idProducto}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.stock}</td>
                        <button onClick={comprarUnidad} className="comprar"> Comprar </button>
                    </tr>
                      )) }
        </table>
        setListarProductos(listarProductos=mod)
        setRegistrarProducto(registrarProducto="")

    }

    function comprarUnidad(){

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

    // Arreglo de objetos vacio para ventas
    let listaVenta = [{}]


    return(
        <div >
            {barra}
            {listarProductos}
            {registrarProducto}     
        </div>
    )

}
export default Cliente