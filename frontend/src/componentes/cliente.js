import React, { useState } from "react";
import '../styles/styleCliente.css'
import Inicio from "./inicio";
import ListProductos from '../listaProductos.json'
import auxListProductosControls from '../listaProductosControl.json';
import listaVentas from '../historialVentas.json'
import _ from "lodash"




function Cliente() {


    let init =
        <div className="blockClient">
            <button className="buttonheader" onClick={inicializacion}> INICIO </button>
            <button className="buttonheader" onClick={listar}> LISTA DE PRODUCTOS </button>
            <button className="buttonheader" onClick={volver}> VOLVER </button>
            <button className="buttonheader" onClick={agregarCarritoF}>
                <div className="shopping-cart">
                    <div className="shopping-cart-head">
                        <img className="picture2" src="https://www.xenonfactory.es/wp-content/uploads/2019/01/carrito-compras-desarrollo-tienda-virtual.png" alt=""></img>
                        <span className="product-quantity">0</span>
                    </div>
                    <ul className="shopping-cart-list">
                    </ul>
                    <div className="cart-buttons">
                        <a href="#0" className="button empty-cart-btn">Borrar</a>
                        <a href="#0" className="button cart-checkout">Comprar <span class="total-price">$0</span></a>
                    </div>
                </div>
            </button>
        </div>

    function inicializacion() {
        let imagen =
            <div>
                <img src="https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg?w=2000"></img>
                <div className="heading"> Productos </div>
                <div aling='center' className="productos">
                    <div>{
                        auxListProductos.map(producto => (

                            <div className="producto1" key={producto.idProducto}>
                                <h1> {producto.idProducto} </h1>
                                <a> <img className="imagenp" src={producto.image}></img> </a>
                                <p> {producto.precio}</p>
                                <p> {producto.stock}</p>
                                <p><button className=" btn" onClick={() => comprarUnidad(producto.idProducto)}> REGISTRAR </button></p>

                            </div>

                        ))}
                    </div>
                </div>
            </div>

        setInicio(inicio = imagen)
        setListarProductos(listarProductos = '')
        setAgregarCarrito(AgregarProducto = '')
    }

    function listar() {

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

                        <tr key={producto.idProducto}>
                            <td> {producto.idProducto} </td>
                            <td> {producto.descripcion}</td>
                            <td> {producto.precio}</td>
                            <td> {producto.stock}</td>
                            <td><button className=" btn" onClick={() => comprarUnidad(producto.idProducto)}> REGISTRAR </button></td>

                        </tr>

                    ))}

            </table>

        setListarProductos(listarProductos = mod)
        setInicio(inicio = '')
        setAgregarCarrito(AgregarProducto = '')

    }


    function comprarUnidad(id) {

        let mod =
            <div>
                <h1>{"SE AGREGO PRODUCTO EXITOSAMENTE... " + id}</h1>
            </div>


        if (auxListProductos[id].stock === 0) {
            auxListProductos[id].stock = 0;
            mod =
                <div>
                    <h1>{"EL PRODUCTO :" + id + " SE HA AGOTADO "}</h1>
                </div>
        }
        if (auxListProductos[id].stock > 0) {
            auxListProductos[id].stock = Number(auxListProductos[id].stock - 1);
            // buscar el indice del objeto
            let objIndex = ListProductos.findIndex((obj => obj.idProducto === Number(id)));
            let idProducto = ListProductos[objIndex].idProducto;
            let descripcion = ListProductos[objIndex].descripcion;
            let precio = ListProductos[objIndex].precio;
            let cantidad = 1;
            let producto = { "ID PRODUCTO : ": String(idProducto), "DESCRIPCION : ": String(descripcion), "PRECIO : ": Number(precio), "CANTIDAD :": Number(cantidad) }
            listaVenta.push(producto)
        }


        setListarProductos(listarProductos = mod)
        setInicio(inicio = '')
        setAgregarCarrito(AgregarProducto = "")


    }


    function agregarCarritoF() {

        let productoTotal = 0;

        // obtener sumatario el valor total de los productos
        //for(let i=0; i<listaVenta.length; i++){
        //productoTotal += listaVenta[i].valor;
        //}
        for (let i = 1; i < listaVenta.length; i++) {
            productoTotal += listaVenta[i].precio;
        }

        let mod =
            <div>
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
                                <td>{producto.cantidad}</td>
                                <td>{producto.descripcion}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.precio}</td>
                            </tr>
                        ))}
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Total</th>
                        <th>{"$" + productoTotal}</th>
                    </tr>
                </table>
                <button className="buttc" onClick={() => comprarF(productoTotal)} > FINALIZAR COMPRA </button> &nbsp;&nbsp;
                <button className="buttc" onClick={cancelarF} > CANCELAR </button>
            </div>
        setListarProductos(listarProductos = "")
        setAgregarCarrito(AgregarProducto = mod);

    }


    function volver() {
        setBarra(barra = <Inicio />)
        setListarProductos(listarProductos = "")
        setAgregarCarrito(AgregarProducto = "")
    }


    // Crear estados
    // estado barra inicial
    let [barra, setBarra] = useState(init)

    let [inicio, setInicio] = useState('')
    // estado listar y agregar producto
    let [listarProductos, setListarProductos] = useState("")
    // estado agregar carrito
    let [AgregarProducto, setAgregarCarrito] = useState("")



    // Arreglo de objetos vacio para ventas
    var listaVenta = [{}];

    // Auxiliar para vista de listas productos para que podamos variar el stock
    //var auxListProductos = ListProductos;

    var auxListProductos = _.cloneDeep(ListProductos);
    // Realizar compra
    function comprarF(productoTotal) {
        let idVenta = listaVentas.length;
        let fecha = "2022-10-05";
        let precio = Number(productoTotal);
        let objeto = { "idVenta": idVenta, "fecha": fecha, "valor": precio }
        listaVentas.push(objeto)
        let mod =
            <h1>{"compra exitosa!"}</h1>
        setAgregarCarrito(AgregarProducto = mod);
    }

    // Finalizar compra
    function cancelarF(id) {

        auxListProductos = _.cloneDeep(auxListProductosControls);
        listaVenta = [{}];
        setAgregarCarrito(AgregarProducto = "");
        agregarCarritoF();
    }

    return (
        <div >
            {barra}
            {inicio}
            {listarProductos}
            {AgregarProducto}
        </div>
    )

}
export default Cliente