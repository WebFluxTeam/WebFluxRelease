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




  //***********************************************************************
  // ***************** VISUALIZAR PRODUCTOS  *****************
  // obtene datos
  const obtenerDatos = async () => {
    const resultado = await axios.get("http://localhost:4000/producto/");
    return resultado.data
  }

  // funcion para listar productos
  async function listarProductosF() {
    let resultado2 = await obtenerDatos()
    let mod =
      <div className="container3">
        <label className="labelVentas" ><small><strong>LISTADO DE PRODUCTOS</strong></small></label>
        <table class="center">
          <tr>
            <th>ID DE PRODUCTO</th>
            <th>IMAGEN</th>
            <th>NOMBRE</th>
            <th>DESCRIPCION</th>
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

  //***********************************************************************
  /* ***************** LISTAR VENTAS ******************* */
  const obtenerVentas = async () => {
    const resultado = await axios.get("http://localhost:4000/venta/");
    return resultado.data
  }


  async function visualizacion() {
    let listaVentas1 = await obtenerVentas()
    let productoTotal = 0;

    // obtener sumatario el valor total de los productos
    for (let i = 0; i < listaVentas1.length; i++) {
      productoTotal += listaVentas1[i].precio;
    }

    let mod =
      <>

        <label className="labelVentas" ><small><strong>HISTORICO DE VENTAS</strong></small></label>

        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="BUSQUEDA POR ID"
            />
            <button type="submit" class="searchButton">
              <img class="imgS" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"></img>
            </button>
          </div>
        </div>
        <div className="container3">

          <div className="popup2">

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
              listaVentas1.map(producto => (
                <tr key={producto.idVenta}>
                  <td>{producto.fecha}</td>
                  <td>{producto.idVenta}</td>
                  <td>{"$" + producto.precio}</td>
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

        <div className="divform">
            <div className="heading"></div>
            <div aling='center' className="producto">
              <div className="producto">
                <h2> 'ID' </h2>
                <a> </a>
                <p> Descripción </p>
                <p>  </p>
                <p>  </p>
              </div>

            </div>
          </div>
      </>

    setListar(listar = mod)
    setRegistrarProducto(registrarProducto = "")
    setListarProductos(listarProductos = "")
    setModificar(modificar = "")


  }

  //***********************************************************************

  function volver() {
    setBarra(barra = <Inicio />)
    setListar(listar = "")
    setModificar(modificar = "")
    setListarProductos(listarProductos = "")
    setRegistrarProducto(registrarProducto = "")
  }
  //***********************************************************************
  // ***************** REGISTRAR PRODUCTOS  *****************
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

  /*
    // obtene datos
  const obtenerDatos = async () => {
    const resultado =  await axios.get("http://localhost:4000/producto/");
     return resultado.data
  }

  // funcion para listar productos
  async function  listarProductosF()  {
    let resultado2 = await obtenerDatos()
  */
  const registrarDatos = async (producto) => {
    const resultado = await axios.post("http://localhost:4000/producto/crear", producto);
    return resultado.data
  }

  async function capturarInfoRegistrar() {
    ///////////////////////////////////////
    /* TRABAJAR DESDE AQUI!!      */
    //////////////////////////////////////
    // Obtener el ultimo valor del arreglo para agregar el id
    //let id = listProductos.length + 1;
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let stock = document.getElementById("stock").value;
    const producto = { "nombre": String(nombre), "descripcion": String(descripcion), "precio": Number(precio), "stock": Number(stock) }
    registrarDatos(producto)
    let mod =
      <h1>{"Se ha registrado un producto: " + nombre}</h1>

    setRegistrarProducto(registrarProducto = mod)


  }

  //***********************************************************************


  // Funcion encargada de modificar un producto que se encuentra creado
  async function modificacion() {
    let resultado2 = await obtenerDatos()
    console.log("resultado", resultado2)



    let mod =
      <>
        <div id="padre">
          <div className="divform">
            <label className="labelVentas" ><small><strong>MODIFICACIÓN DE PRODUCTOS</strong></small></label>
            <form className="rowform">
              <label for="idProducto" class="form-label">ID DE PRODUCTO :</label>
              <select type="number" className="formedit" id="idProducto" min="1" placeholder="identificador del producto.."  onChange={() => actualizarCampos(resultado2)} required>
                {
                resultado2.map(producto => (
                  <option key={producto.idProducto}>
                  {producto.idProducto}
                  </option>
              ))}
              </select>
              <label for="nombre" class="form-label">NOMBRE :</label>
              <input type="text" className="formedit" id="nombre" placeholder="Nombre del producto.." defaultValue=""/> 
              <label for="imagen" class="form-label">RUTA IMAGEN :</label>
              <input className="formedit" type="text" id="imagen" placeholder="Ingrese la ruta de la imagen.." />
              <label for="descripcion" class="form-label">DESCRIPCIÓN :</label>
              <input type="text" className="formedit" id="descripcion" placeholder="descripcion del producto.." />
              <label for="precio" class="form-label">PRECIO :</label>
              <input type="text" className="formedit" step="0.01" id="precio" placeholder="Precio del producto.." />
              <label for="stock" class="form-label">UNIDADES DISPONIBLES :</label>
              <input type="number" className="formedit" id="stock" placeholder="Cantidad disponible del producto.." />
              <button className="butt" onClick={capturarInfo}> MODIFICAR  </button>
              <button className="butt"> ELIMINAR  </button>
            </form>
          </div>
          <div className="divform">
            <div className="heading"></div>
            <div aling='center' className="producto">
              <div className="producto">
                <h2> Nombre Producto </h2>
                <a> <img id="imagen2" ></img> </a>
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

  // Actualizar campos
  function actualizarCampos(resultado2){
    var e = document.getElementById("idProducto");
    //let objetoAuxiliar = {... resultado2}
    // obtener posicion del producto
    let objIndex = resultado2.findIndex((obj => obj.idProducto === String(e.value)));
    // capturar valores
    let nombre = resultado2[objIndex].nombre
    let imagen = resultado2[objIndex].imagen
    let descripcion = resultado2[objIndex].descripcion
    let precio = resultado2[objIndex].precio
    let stock = resultado2[objIndex].stock
    // setiar valores
    document.getElementById("nombre").value = nombre
    document.getElementById("imagen").value = imagen
    //document.getElementById("imagenp2").value = imagen
    document.getElementById("descripcion").value = descripcion
    document.getElementById("precio").value = precio
    document.getElementById("stock").value = stock
    //nombre.target.setAttribute("value",nombre);
    document.getElementById("imagen2").src=imagen;

  }


  // Actualizar producto
  const actualizarDatos = async (producto) => {
    const resultado = await axios.post("http://localhost:4000/producto/actualizar/", producto);
    return resultado.data
  }

  // capturar informacion de formulario
  async function capturarInfo() {
    // Capturar inforacion de formulario
    //let resultado = await actualizarDatos()
    var idProducto = document.getElementById("idProducto").value;
    var nombre = document.getElementById("nombre").value;
    var descripcion = document.getElementById("descripcion").value;
    var imagen = document.getElementById("descripcion").imagen;
    var precio = document.getElementById("precio").value;
    var stock = document.getElementById("stock").value;
    let objeto = {"idProducto": idProducto, "nombre": nombre, "descripcion": descripcion,  "imagen": imagen, "precio": precio, "stock": stock}
    let resultado = await actualizarDatos(objeto)
    // buscar producto
    console.log(resultado)
    let mod = <h1>{"Se ha modificado producto con id: " }</h1>
    // validar si el producto con ese id existe
    
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