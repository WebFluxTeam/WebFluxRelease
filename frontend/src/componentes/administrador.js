import React, { useState } from "react";
import '../styles/styleAdminstrador.css'
import Inicio from "./inicio";
import listaVentas from '../historialVentas.json'
import listProductos from '../listaProductos.json'
import axios from 'axios';



function Admin() {
  let init = <div className="blockAdmin">
    <label className="labelAdmin" ><small>ADMIN VIEW</small></label>
    <button onClick={listarProductosF} className="buttonheader"> LISTA DE PRODUCTOS </button>
    <button onClick={registrarProductoF} className="buttonheader"> REGISTRAR PRODUCTOS </button>
    <button onClick={modificacion} className="buttonheader"> MODIFICAR PRODUCTOS </button>
    <button onClick={visualizacion} className="buttonheader"> LISTA DE VENTAS </button>
    <button onClick={volver} className="buttonheader"> VOLVER </button>
  </div>


  // obtene datos
  const obtenerDatos = async () => {

    const resultado =  await axios.get("http://localhost:4000/producto/");
     return resultado.data
  }



  // funcion para listar productos
  async function  listarProductosF()  {
    let resultado2 = await obtenerDatos()
    let mod =
      <div className="container3">
        <label className="labelVentas" ><small><strong>LISTADO DE PRODUCTOS</strong></small></label>
        <table class="center">
          <tr>
            <th>ID DE PRODUCTO</th>
            <th>IMAGEN</th>
            <th>NOMBRE</th>
            <th>PRECIO</th>
            <th>UNIDADES DISPONIBLES</th>
          </tr>
          {
            resultado2.map(producto => (
              <tr key={producto.idProducto}>
                <td>{producto.idProducto}</td>
                <td><img className="picture" src={producto.imagen}></img></td>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.precio}</td>
                <td>{producto.stock}</td>
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
      <div className="container3">
        <label className="labelVentas" ><small><strong>HISTORICO DE VENTAS</strong></small></label>
        <div className="popup">
          
          <label class="labelpopup" for="start">Fecha inicial:</label>

          <input id="startDate" className="inputpopup" class="btn btn-info" type="date" id="start" name="trip-start"
              value="2022-11-12"
              min="2018-01-01" max="2030-12-31">
          </input>

          <label class="labelpopup" for="end">Fecha Final:</label>
          <input id="endDate" className="inputpopup" class="btn btn-info" type="date" id="start" name="trip-start"
              value="2022-11-12"
              min="2018-01-01" max="2030-12-31">
          </input>
        </div>

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
      <div className="divform">
        <label className="labelVentas" ><small><strong>REGISTRO DE PRODUCTOS</strong></small></label>
        <form className="rowform">
          <label for="nombre" class="form-label">NOMBRE :</label>
          <input className="formedit" type="text" id="nombre" placeholder="Nombre del producto.." />
          <label for="imagen" class="form-label">RUTA IMAGEN :</label>
          <input className="formedit" type="text" id="imagen" placeholder="Ingrese la ruta de la imagen.." />
          <label for="descripcion" class="form-label">DESCRIPCIÓN :</label>
          <input className="formedit" type="text" id="descripcion" placeholder="Descripción del producto.." />
          <label for="precio" class="form-label">PRECIO :</label>
          <input className="formedit" type="text" step="0.01" id="precio" placeholder="Costo del producto.." />
          <label for="stock" class="form-label">UNIDADES DISPONIBLES :</label>
          <input className="formedit" type="number" id="stock" placeholder="Cantidad disponible.." />
          <button className="butt" onClick={capturarInfoRegistrar}> REGISTRAR </button>
        </form>
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
      <>
        <div id="padre">
          <div className="divform">
            <label className="labelVentas" ><small><strong>MODIFICACIÓN DE PRODUCTOS</strong></small></label>
            <form className="rowform">
              <label for="idProducto" class="form-label">ID DE PRODUCTO :</label>
              <select type="number" className="formedit" id="idProducto" min="1" placeholder="identificador del producto.." required >
                <option value="default">Seleccione una opción..</option>
              </select>
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
          <div className="divform">
            <div className="heading"></div>
            <div aling='center' className="producto">
              <div className="producto">
                <h2> Nombre Producto </h2>
                <a> <img className="imagenp2" src='https://images.cdn2.buscalibre.com/fit-in/360x360/7a/12/7a120449c126a978d58f03bc56027fef.jpg'></img> </a>
                <p> Descripción </p>
                <p> Precio </p>
                <p> Stock </p>
              </div>

            </div>
          </div>
        </div>
      </>

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