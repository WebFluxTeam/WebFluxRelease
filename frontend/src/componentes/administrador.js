import React, { useState } from "react";
import '../styles/styleAdminstrador.css'
import Inicio from "./inicio";
import listaVentas from '../historialVentas.json'
import listProductos from '../listaProductos.json'
import axios from 'axios';
import Cliente from "./cliente";



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
              id = "idVenta"
              type="text"
              class="searchTerm"
              placeholder="BUSQUEDA POR ID"
            />
            <button type="submit" class="searchButton" onClick={buscarId}>
              <img class="imgS" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"></img>
            </button>
          </div>
        </div>
        <div className="container3">

        <div className="popup2">

          <label class="labelpopup" for="start">Fecha inicial:</label>

          <input id="startDateV" className="inputpopup" class="btn btn-info" type="date" name="trip-start"
            min="2018-01-01" max="2030-12-31">
          </input>

          <label class="labelpopup" for="end">Fecha Final:</label>
          <input id="endDateV" className="inputpopup" class="btn btn-info" type="date" name="trip-end"
            min="2018-01-01" max="2030-12-31">
          </input>
          <button className="butt" onClick={buscarVentas}> Bucar  </button>
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





  var dataFind;
  async function buscarId(){
    let idVenta = document.getElementById("idVenta").value;
    let respuesta = await traerVenta(idVenta);
    const productdetail = "";
    for(let k=0; k <= respuesta.producto.length-1; k++){
        let prod = respuesta.producto[k];
        productdetail = productdetail + "\n nombre: "+prod.nombre +
        "\n producto: "+prod.producto.precio +
        "\n stock: "+prod.producto.stock +
        "\n **************************************************** "
    }
    alert(`fecha: ${respuesta.fecha}\nprecio: ${respuesta.precio}\nproducto: ${productdetail}\n`)
     dataFind = {"fecha": respuesta.fecha, "precio": respuesta.precio, "producto": respuesta.producto[0].nombre, "id": respuesta.idProducto}
  }

  // traer venta
  const traerVenta = async (idVenta) => {
    let url = "http://localhost:4000/venta/" +idVenta
    //alert(url);
    const resultado = await axios.get(url);
    return resultado.data
  }



  // REVISAR 
  function buscarVentas(){
    let fechaInicial = document.getElementById("startDateV").value;
    let fechaFinal = document.getElementById("endDateV").value;
    console.log("fecha inicial: " + fechaInicial)
    console.log("fecha final: " + fechaFinal)
    const ventas = traerVentas(fechaInicial, fechaFinal)
    //const bodymsj = JSON.parse(ventas)
    //console.log(`bodymsj::: ${ventas}`)

    const printAddress = async () => {
      const a = await ventas;
      console.log(a);
    };

    const cast = Promise.resolve(ventas);
        cast.then((value) => {
          let all ="";
            for(let j=0; j <= value.length-1 ; j++){
              let tmp =  "";
              for(let k=0; k <= value.length-1; k++){
                if(value[j].producto.length > 0){
                  tmp = tmp + "\n nombre: "+value[j].producto.nombre +
                  "\n producto: "+value[j].producto.precio +
                  "\n stock: "+value[j].producto.stock +
                  "\n **************************************************** "
                  
                }
              }
              console.log(`Venta No. ${j} `);
              console.log(`idVenta: ${value[j].idVenta}\nFecha: ${value[j].fecha}\nprecio: ${value[j].precio}\nproducto: ${value[j].producto[0]}`)
              console.log(`---------------------------------------------------------`);

              all = all + " Venta No. "+ j +" \n"+
              "idVenta:"+ value[j].idVenta +"\nFecha: "+value[j].fecha + "\nprecio: "+value[j].precio+"\nproducto: "+ tmp +
              "\n --------------------------------------------------------- \n"
            }
            alert(`✔️ ${all}`)
      });
   //alert(`✔️ ${datosVentas}`)
    console.log(ventas)
    /*alert(✔️ Resumen de ventas en el periodo elegido:\n
    fecha: {ventas.fecha}\nprecio: {ventas.precio}\nproducto: {ventas.producto[0].nombre}
    )*/
  }


  // Actualizar producto
  const traerVentas = async (fechaInicial, fechaFinal) => {
    let url = "http://localhost:4000/venta/" +fechaInicial +"/"+fechaFinal
    const resultado = await axios.get(url);
    return resultado.data
  }
  // REVISAR...........







  //***********************************************************************

  function volver() {
    setBarra(barra = <Cliente/>)
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
          <label for="nombreR" class="form-label">NOMBRE :</label>
          <input className="formedit" type="text" id="nombreR" placeholder="Nombre del producto.." />
          <label for="imagenR" class="form-label">RUTA IMAGEN :</label>
          <input className="formedit" type="text" id="imagenR" placeholder="Ingrese la ruta de la imagen.." />
          <label for="descripcionR" class="form-label">DESCRIPCIÓN :</label>
          <input className="formedit" type="text" id="descripcionR" placeholder="Descripción del producto.." />
          <label for="precioR" class="form-label">PRECIO :</label>
          <input className="formedit" type="number" step="0.01" id="precioR" placeholder="Costo del producto.." />
          <label for="stockR" class="form-label">UNIDADES DISPONIBLES :</label>
          <input className="formedit" type="number" id="stockR" placeholder="Cantidad disponible.." />
          <button className="butt" onClick={capturarInfoRegistrar}> REGISTRAR </button>
        </form>
      </div>

    setRegistrarProducto(registrarProducto = mod)
    setModificar(modificar = "")
    setListar(listar = "")
    setListarProductos(listarProductos = "")
  }

  const registrarDatos = async (producto) => {
    const resultado = await axios.post("http://localhost:4000/producto/crear", producto);
    return resultado.data
  }

  async function capturarInfoRegistrar() {
    let nombreR = document.getElementById("nombreR").value;
    let imagenR = document.getElementById("imagenR").value;
    let descripcionR = document.getElementById("descripcionR").value;
    let precioR = document.getElementById("precioR").value;
    let stockR = document.getElementById("stockR").value;
    const producto = {"nombre": String(nombreR), "imagen": String(imagenR), "descripcion": String(descripcionR), "precio": Number(precioR), "stock": Number(stockR) }
    registrarDatos(producto)
    console.log("✔️ Producto "+nombreR+" registrado exitosamente ")  
    console.log(producto)
    let mod =
      <h1>{"Se ha registrado un producto: " + nombreR}</h1>

    setRegistrarProducto(registrarProducto = mod)
  }


  // Funcion encargada de modificar un producto que se encuentra creado
  async function modificacion() {
    let resultado2 = await obtenerDatos()

    let mod =
      <>
        <div id="padre">
          <div className="divform">
            <label className="labelVentas" ><small><strong>MODIFICACIÓN DE PRODUCTOS</strong></small></label>
            <form className="rowform">
              <label for="idProducto" class="form-label" >ID DE PRODUCTO :</label>
              <select type="number" className="formedit" id="idProducto" min="1" placeholder="identificador del producto.."  onChange={() => actualizarCampos(resultado2)} required>
              <option key="default">Seleccione una opción...</option>
                {
                  resultado2.map(producto => (
                  <option key={producto.idProducto} >
                  {producto.idProducto}
                  </option>
              ))}
              </select>
              <label for="nombreP" class="form-label">NOMBRE :</label>
              <input type="text" className="formedit" id="nombreP" placeholder="Nombre del producto.." defaultValue=""/> 
              <label for="imagenP" class="form-label">RUTA IMAGEN :</label>
              <input className="formedit" type="text" id="imagenP" placeholder="Ingrese la ruta de la imagen.." />
              <label for="descripcionP" class="form-label">DESCRIPCIÓN :</label>
              <input type="text" className="formedit" id="descripcionP" placeholder="descripcion del producto.." />
              <label for="precioP" class="form-label">PRECIO :</label>
              <input type="text" className="formedit" step="0.01" id="precioP" placeholder="Precio del producto.." />
              <label for="stockP" class="form-label">UNIDADES DISPONIBLES :</label>
              <input type="number" className="formedit" id="stockP" placeholder="Cantidad disponible del producto.." />
              <button className="butt" onClick={capturarInfo}> MODIFICAR  </button>
              <button className="butt" onClick={eliminarInfo}> ELIMINAR  </button>
            </form>
          </div>
          <div className="divform">
            <div className="heading"></div>
            <div aling='center' className="producto">
              <div id="muestra" className="producto">
                <input class="formeditTemp" id="nameMuestra"type="text" placeholder="Nombre" disabled/>
                <a> <img id="imagen2" ></img> </a>
              </div>
              <input class="formeditTemp" id="descripcionMuestra" type="text" placeholder="Descripción"  disabled/>
              <input class="formeditTemp" id="precioMuestra" type="text" placeholder="Precio"  disabled />
              <input class="formeditTemp" id="stockMuestra" type="text" placeholder="Stock"  disabled />
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
    // obtener posicion del producto
    let objIndex = resultado2.findIndex((obj => obj.idProducto === String(e.value)));
    // capturar valores
      let nombre = ""
      let imagen = ""
      let descripcion = ""
      let precio = ""
      let stock = ""
      console.log(objIndex )
    if(objIndex >= 0){
       nombre = resultado2[objIndex].nombre
        imagen = resultado2[objIndex].imagen
        descripcion = resultado2[objIndex].descripcion
        precio = resultado2[objIndex].precio
        stock = resultado2[objIndex].stock
    
  }

    // setiar valores
    document.getElementById("nombreP").value = nombre
    document.getElementById("imagenP").value = imagen
    document.getElementById("descripcionP").value = descripcion
    document.getElementById("precioP").value = precio
    document.getElementById("stockP").value = stock
    document.getElementById("imagen2").src=imagen;

    document.getElementById("nameMuestra").value = nombre;
    document.getElementById("descripcionMuestra").value = descripcion;
    document.getElementById("precioMuestra").value = precio;
    document.getElementById("stockMuestra").value = stock;

  }


  // Actualizar producto
  const actualizarDatos = async (producto) => {
    
    let url = "http://localhost:4000/producto/actualizar/" + producto.idProducto
    const resultado = await axios.put(url, producto);
    return resultado.data
  }

  // capturar informacion de formulario
  async function capturarInfo() {
    let idProducto = document.getElementById("idProducto").value;
    let nombre = document.getElementById("nombreP").value;
    let descripcion = document.getElementById("descripcionP").value;
    let imagen = document.getElementById("imagenP").value;
    let precio = document.getElementById("precioP").value;
    let stock = document.getElementById("stockP").value;
    let objeto = {"idProducto": idProducto, "nombre": nombre, "descripcion": descripcion,  "imagen": imagen, "precio": precio, "stock": stock}
    var resultado = await actualizarDatos(objeto)
    // buscar producto
    console.log(resultado)
    //let mod = <h1>{"Se ha modificado producto exitosamente "}</h1>
    alert("se ha modificado exitosamente")
    // validar si el producto con ese id existe
    setModificar(modificar = <h1>se ha eliminado el producto</h1>)
   
  }

  // Eliminar producto
  const eliminarDatos = async (id) => {
    const url = "http://localhost:4000/producto/eliminar/" + id
    const resultado = await axios.delete(url);
    return resultado.data
  }

  async function eliminarInfo(){
    var idProducto = document.getElementById("idProducto").value;
    eliminarDatos(idProducto)
    alert("✔️Producto eliminado exitosamente "+idProducto)

    setModificar(modificar = <h1>Producto eliminado exitosamente</h1>)
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