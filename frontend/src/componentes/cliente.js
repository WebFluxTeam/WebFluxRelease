import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import ListProductos from '../listaProductos.json'


function Cliente(){

    let init = <div className="blockCliente">
                    <button onClick={listar} className="buttonCliente"> Lista productos </button>
                    <button onClick={agregarCarritoF} className="buttonCliente"> Carrito </button>
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
            auxListProductos.map(producto => (
                
                <tr  key={producto.idProducto}>
                <td> {producto.idProducto} </td>
                <td> {producto.descripcion}</td>
                <td> {producto.precio}</td>
                <td> {producto.stock}</td>
                <button   onClick={ () => comprarUnidad(producto.idProducto) }>Registrar   </button>
        
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
            <th>IdProducto</th>
            <th>Cantidad</th>
            <th>Producto</th>
            <th>Valor Unidad</th>
            <th>Total</th>
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