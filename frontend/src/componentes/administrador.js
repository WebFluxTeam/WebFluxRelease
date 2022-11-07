import React, { useState } from "react";
import '../styles/styleAdminstrador.css'
import Inicio from "./inicio";
import listaVentas from '../historialVentas.json'
import listProductos from '../listaProductos.json'

function Admin() {
    let init =
        <div className="nav">
            <div className="blockAdmin">
                <button onClick={listarProductosF} className="buttonCliente"> LISTA DE PRODUCTOS </button>
                <button onClick={registrarProductoF} className="buttonCliente"> REGISTRAR PRODUCTOS </button>
                <button onClick={modificacion} className="buttonCliente"> MODIFICAR PRODUCTOS </button>
                <button onClick={visualizacion} className="buttonCliente"> LISTA DE VENTAS </button>
                <button onClick={volver} className="buttonCliente"> VOLVER </button>
            </div>
        </div>

    // funcion para listar productos
    function listarProductosF() {
        let mod =
            <div>
                <div className="heading"> <strong>LISTADO DE PRODUCTOS</strong> </div>
                <table class="center">
                    <tr>
                        <th><h1>ID DE PRODUCTO</h1></th>
                        <th>IMAGEN</th>
                        <th>NOMBRE</th>
                        <th>PRECIO</th>
                        <th>UNIDADES DISPONIBLES</th>
                    </tr>
                    {
                        listProductos.map(producto => (
                            <tr key={producto.idProducto}>
                                <td class="first">{producto.idProducto}</td>
                                <td><img className="picture" src={producto.image}></img></td>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td class="last">{producto.stock}</td>
                            </tr>
                        ))}
                </table>
            </div>                      
        setListar(listar = "")
        setModificar(modificar = "")
        setRegistrarProducto(registrarProducto = "")
        setListarProductos(listarProductos = mod)
    }


    function visualizacion() {
        let productoTotal = 0;

        // obtener sumatario el valor total de los productos
        for (let i = 0; i < listaVentas.length; i++) {
            productoTotal += listaVentas[i].valor;
        }

        let mod =
            <div className="containerV">
                <label className="labelVentas" ><small><strong>HISTORICO DE VENTAS</strong></small></label>
                <table class="center">
                    <tr>
                        <th>FECHA</th>
                        <th>ID DE VENTA</th>
                        <th>VALOR</th>
                    </tr>
                    {
                        listaVentas.map(producto => (
                            <tr key={producto.idVenta}>
                                <td>{producto.fecha}</td>
                                <td>{producto.idVenta}</td>
                                <td>{"$" + producto.valor}</td>
                            </tr>
                        ))
                    }
                    <tr>
                        <th></th>
                        <th>TOTAL</th>
                        <th>{"$" + productoTotal}</th>
                    </tr>
                </table>
            </div>

        setListar(listar = mod)
        setRegistrarProducto(registrarProducto = "")
        setListarProductos(listarProductos = "")
        setModificar(modificar = "")


    }


    function volver() {
        setBarra(barra = <Inicio />)
        setListar(listar = "")
        setModificar(modificar = "")
        setListarProductos(listarProductos = "")
        setRegistrarProducto(registrarProducto = "")
    }

    // Funcion encargada de crear un producto
    function registrarProductoF() {

        let mod =
            <div className="regist"> 
                <div id="nasty" className="geety">
                    <img className='pat' src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7-availability_nike_10052021_carousel.jpg.large.jpg" alt="producto"/>
                    <p className="set"><span>descripcion</span> <br /> Price: $ 500  In-stock: 10</p>
                    <button className="butt" onClick={capturarInfoRegistrar}> REGISTRAR </button>
                </div> 
                <div id="nasty" className="geety">
                    <img className='pat' src="https://www.alkosto.com/medias/6901443320516-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjg3OTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDI3L2g0Zi85MzU3NDA3ODc5MTk4LmpwZ3w1NWU0ZjY2OWM4MjMyM2JjYzg1ZjE3M2I1MjEyMTQ4NjM0ZTMzMTQ0YTVjN2FjOWY3MDQ5ZDFhYzY0NDUwMGM5" alt="producto"/>
                    <p className="set"><span>descripcion</span> <br /> Price: $ 500  In-stock: 10</p>
                    <button className="butt" onClick={capturarInfoRegistrar}> REGISTRAR </button>
                </div>
                <div id="nasty" className="geety">
                    <img className='pat' src="https://exitocol.vtexassets.com/arquivos/ids/553784/camara-reloj-smart-fit-band-watch-pulso-espia-1080p-fullhd.jpg?v=637012461664070000" alt="producto"/>
                    <p className="set"><span>descripcion</span> <br /> Price: $ 500  In-stock: 10</p>
                    <button className="butt" onClick={capturarInfoRegistrar}> REGISTRAR </button>
                </div>
            </div>


        setRegistrarProducto(registrarProducto = mod)
        setModificar(modificar = "")
        setListar(listar = "")
        setListarProductos(listarProductos = "")
    }


    function capturarInfoRegistrar() {
        ///////////////////////////////////////
        /* TRABAJAR DESDE AQUI!!      */
        //////////////////////////////////////
        // Obtener el ultimo valor del arreglo para agregar el id
        let id = listProductos.length + 1;
        let nombre = document.getElementById("nombre").value;
        let descripcion = document.getElementById("descripcion").value;
        let precio = document.getElementById("precio").value;
        let stock = document.getElementById("stock").value;
        let producto = { "idProducto": Number(id), "nombre": String(nombre), "descripcion": String(descripcion), "precio": Number(precio), "stock": Number(stock) }
        listProductos.push(producto);
        let mod =
            <h1>{"Se ha registrado el producto con id: " + id}</h1>

        setRegistrarProducto(registrarProducto = mod)

    }


    // Funcion encargada de modificar un producto que se encuentra creado
    function modificacion() {
        let mod =
            <div className="divform">
                <label className="labelVentas" ><small><strong>MODIFICACIÓN DE PRODUCTOS</strong></small></label>
                <form className="rowform">
                    <label for="idProducto" class="form-label">ID DE PRODUCTO :</label>
                    <input type="number" className="formedit" id="idProducto" min="1" placeholder="identificador del producto.." required />
                    <label for="nombre" class="form-label">NOMBRE :</label>
                    <input type="text" className="formedit" id="nombre" placeholder="Nombre del producto.." />
                    <label for="imagen" class="form-label">RUTA IMAGEN :</label>
                    <input className="formedit" type="text" id="imagen" placeholder="Ingrese la ruta de la imagen.." />
                    <label for="descripcion" class="form-label">DESCRIPCIÓN :</label>
                    <input type="text" className="formedit" id="descripcion" placeholder="descripcion del producto.." />
                    <label for="precio" class="form-label">PRECIO :</label>
                    <input type="text" className="formedit" step="0.01" id="precio" placeholder="Precio del producto.." />
                    <label for="stock" class="form-label">UNIDADES DISPONIBLES :</label>
                    <input type="number" className="formedit" id="stock" placeholder="Cantidad disponible del producto.." />
                    <button className="butt" onClick={capturarInfo}> MODIFICAR  </button>
                </form>
            </div>

        setModificar(modificar = mod)
        setListar(listar = "")
        setRegistrarProducto(registrarProducto = "")
        setListarProductos(listarProductos = "")
    }



    // capturar informacion de formulario
    function capturarInfo() {
        // Capturar inforacion de formulario
        var idProducto = document.getElementById("idProducto").value;
        var nombre = document.getElementById("nombre").value;
        var descripcion = document.getElementById("descripcion").value;
        var precio = document.getElementById("precio").value;
        var stock = document.getElementById("stock").value;

        // buscar producto
        var result = listProductos.find(item => item.idProducto === Number(idProducto));
        let mod = <h1>No existe el id </h1>
        // validar si el producto con ese id existe
        if (result != null) {
            // Modificar informacion
            // Encontrar el indece del producto en la lista
            let objIndex = listProductos.findIndex((obj => obj.idProducto === Number(idProducto)));
            listProductos[objIndex].nombre = String(nombre);
            listProductos[objIndex].descripcion = String(descripcion);
            listProductos[objIndex].precio = Number(precio);
            listProductos[objIndex].stock = Number(stock);
            mod =
                <div>
                    <h1>{"Se ha modificado producto con id: " + result.idProducto}</h1>
                </div>
        }
        setModificar(modificar = mod)
    }



    // let ["nombre_estado", "metodo_permite_modificar_valores"] = useState("valor_inicial_variable")
    // estado barra inicial
    let [barra, setBarra] = useState(init)
    // estado listar ventas productos
    let [listar, setListar] = useState("")
    // estado de modificar productos
    let [modificar, setModificar] = useState("")
    // estado de listar productos
    let [listarProductos, setListarProductos] = useState("")
    // estado de registrar producto
    let [registrarProducto, setRegistrarProducto] = useState("")

    return (
        <div>
            {barra}
            {listar}
            {modificar}
            {listarProductos}
            {registrarProducto}
        </div>
    )

}

export default Admin