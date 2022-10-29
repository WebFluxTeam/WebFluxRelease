import React, {useState} from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import ListProductos from '../listaProductos.json'
import auxListProductosControls from '../listaProductosControl.json';
import listaVentas from '../historialVentas.json'





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
        if (auxListProductos[id].stock > 0){
            auxListProductos[id].stock = Number(auxListProductos[id].stock-1);
            // buscar el indice del objeto
            let objIndex = ListProductos.findIndex((obj => obj.idProducto === Number(id)));
            let idProducto = ListProductos[objIndex].idProducto;
            let descripcion = ListProductos[objIndex].descripcion;
            let precio = ListProductos[objIndex].precio;
            let cantidad = 1;
            let producto = {"idProducto": String(idProducto), "descripcion": String(descripcion), "precio": Number(precio), "cantidad": Number(cantidad)}
            listaVenta.push(producto)
        }


        setListarProductos(listarProductos=mod)
        setAgregarCarrito(AgregarProducto="")
        

    }


    function agregarCarritoF(){
        
        let productoTotal = 0;

        // obtener sumatario el valor total de los productos
        //for(let i=0; i<listaVenta.length; i++){
          //productoTotal += listaVenta[i].valor;
        //}
        for(let i=1; i<listaVenta.length; i++){
        productoTotal += listaVenta[i].precio        ;
        }
        
        let mod =
        <div>
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
                        <td>{producto.cantidad}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.precio}</td>
                        <td></td>
                    </tr>
                      )) }
             <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Total</th>
                <th>{"$" + productoTotal}</th>
            </tr>
        </table>
        <button onClick={ () => comprarF(productoTotal) } className="co"> Finalizar compra </button>
        <button onClick={cancelarF} className="co"> Cancelar </button>
        </div>  
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
    var listaVenta = [{}];

    // Auxiliar para vista de listas productos para que podamos variar el stock
    //var auxListProductos = ListProductos;
    var auxListProductos = ListProductos;
    // Realizar compra
    function comprarF(productoTotal){
        let idVenta = listaVentas.length;
        let fecha = "2022-10-05";
        let precio = Number(productoTotal);
        let objeto = {"idVenta":idVenta, "fecha": fecha, "valor":precio }
        listaVentas.push(objeto)
        let mod =
        <h1>{"se creo venta con id:" + idVenta }</h1>
        setAgregarCarrito(AgregarProducto=mod);
    }

    // Finalizar compra
    function cancelarF(id){

        auxListProductos = auxListProductosControls;
        listaVenta = [{}];
        setAgregarCarrito(AgregarProducto="");
        agregarCarritoF();
    }

    return(
        <div >
            {barra}
            {listarProductos}
            {AgregarProducto}    
        </div>
    )

}
export default Cliente