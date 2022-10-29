import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import ListProductos from '../listaProductos.json'


function Cliente(){

    let init = <div className="blockAdmin">
                    <label className="labelAdmin"><small> CLIENT VIEW</small></label>
                    <button onClick={listar} className="btn"> LISTA DE PRODUCTOS </button>
                    <button onClick={agregarCarritoF} className="btn"> 
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
            auxListProductos.map(producto => (
                
                <tr  key={producto.idProducto}>
                <td> {producto.idProducto} </td>
                <td> {producto.descripcion}</td>
                <td> {producto.precio}</td>
                <td> {producto.stock}</td>
                <button   onClick={ () => comprarUnidad(producto.idProducto) }> REGISTRAR </button>
        
         </tr>
         )) }


        </table>
        
        setListarProductos(listarProductos=mod)
        setAgregarCarrito(AgregarProducto="")

    }


    function  comprarUnidad(id){
        
        let  mod =
                <div>
                    <h1>{"Se ha agregado el idProducto: " +id}</h1>
                </div>
        

        if (auxListProductos[id].stock === 0){
            auxListProductos[id].stock = 0;
            mod =
                <div>
                    <h1>{"Agotado el idProducto: " +id}</h1>
                </div>
        }
        if (ListProductos[id].stock > 0){
            auxListProductos[id].stock = Number(auxListProductos[id].stock-1);
            // buscar el indice del objeto
            let objIndex = ListProductos.findIndex((obj => obj.idProducto === Number(id)));
            let idProducto = ListProductos[objIndex].idProducto;
            let descripcion = ListProductos[objIndex].descripcion;
            let precio = ListProductos[objIndex].precio;
            let cantidad = 0;
            let producto = {"idProducto": idProducto, "descripcion":descripcion, "precio": precio, "cantidad":cantidad}
            listaVenta.push(producto)
        }


        setListarProductos(listarProductos=mod)
        setAgregarCarrito(AgregarProducto="")
        

    }


    function agregarCarritoF(){
        let mod =
       <table class="center">
          <tr>
            <th>ID PRODUCTO</th>
            <th>CANTIDAD</th>
            <th>PRODUCTO</th>
            <th>VALOR UNIDAD</th>
            <th>TOTAL</th>
          </tr>
          {
                      listaVenta.map(producto => (
                        <tr key={producto.idProducto}>
                        <td>{producto.idProducto}</td>
                        <td>{producto.stock}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td></td>
                    </tr>
                      )) }
        </table>
        setListarProductos(listarProductos="")
        setAgregarCarrito(AgregarProducto=mod);
        
    }

    function volver(){
        setBarra(barra=<Inicio/>)
        setListarProductos(listarProductos="")
        setAgregarCarrito(AgregarProducto="")
    }


    // Crear estados
    // estado barra inicial
    let [barra, setBarra] = useState(init)
    // estado listar y agregar producto
    let [listarProductos, setListarProductos] = useState("")
    // estado agregar carrito
    let [AgregarProducto, setAgregarCarrito] = useState("")



    // Arreglo de objetos vacio para ventas
    let listaVenta = [{}]

    // Auxiliar para vista de listas productos para que podamos variar el stock
    let auxListProductos = ListProductos;


    return(
        <div >
            {barra}
            {listarProductos}
            {AgregarProducto}     
        </div>
    )

}
export default Cliente