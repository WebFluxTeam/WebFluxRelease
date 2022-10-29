import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import listProductos from '../listaProductos.json'


function Cliente(){
  
    let init = <div className="blockAdmin">
                    <label className="labelAdmin"><small> CLIENT VIEW</small></label>
                    <button onClick={listar} className="btn"> LISTA DE PRODUCTOS </button>
                    <button onClick={agregar} className="btn"> 
                        <img className ="picture2" src="https://www.xenonfactory.es/wp-content/uploads/2019/01/carrito-compras-desarrollo-tienda-virtual.png" alt=""></img> 
                    </button>
                    <button onClick={volver} className="btn"> VOLVER </button>
                    
                    
                </div>

    function listar(){
        let mod =
       <table class="center">
          <tr>
            <th>IDENTIFICADOR</th>
            <th>DESCRIPCION</th>
            <th>PRECIO</th>
            <th>UNIDADES DISPONIBLES</th>
            <th>COMPRAR</th>
          </tr>
          {
                      listProductos.map(producto => (
                        <tr key={producto.id}>
                        <td>{producto.idProducto}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.stock}</td>
                        <button onClick={comprarUnidad} className="comprar"> COMPRAR </button>
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