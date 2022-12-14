import React, { useState } from "react";
import '../styles/styleAdminstrador.css'
import Inicio from "./inicio";
import listaVentas from '../historialVentas.json'
import listProductos from '../listaProductos.json'

function Admin () {
    let init = <div className="blockAdmin">
                    <button  onClick={listarProductosF} className="buttonAdmin"> Lista productos </button>
                    <button   onClick={registrarProductoF} className="buttonAdmin"> Registrar productos </button>
                    <button  onClick={modificacion}  className="buttonAdmin"> Modificar productos </button>
                    <button onClick={visualizacion} className="buttonAdmin"> Listar ventas </button>
                    <button onClick={volver} className="buttonAdmin"> Volver </button>
                </div>  
    

    // funcion para listar productos
    function listarProductosF(){
      let mod =
       <table class="center">
          <tr>
            <th>IdProducto</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
          {
                      listProductos.map(producto => (
                        <tr key={producto.idProducto}>
                        <td>{producto.idProducto}</td>
                        <td>{producto.descripcion}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.stock}</td>
                    </tr>
                      )) }
        </table>
         setListar(listar="")
         setModificar(modificar="")
         setRegistrarProducto(registrarProducto="")
         setListarProductos(listarProductos=mod)
    }


    function visualizacion(){
      let productoTotal = 0;

      // obtener sumatario el valor total de los productos
      for(let i=0; i<listaVentas.length; i++){
        productoTotal += listaVentas[i].valor;
      }
      
      let mod =
       <table class="center">
       <tr>
         <th>Fecha</th>
         <th>idVenta</th>
         <th>Valor</th>
       </tr>
       {
                   listaVentas.map(producto => (
                    <tr key={producto.idVenta}>
                    <td>{producto.fecha}</td>
                    <td>{producto.idVenta}</td>
                    <td>{"$" + producto.valor}</td>
                </tr>
                   )) }
        <tr>
          <th></th>
          <th>Total</th>
          <th>{"$" + productoTotal}</th>
        </tr>
     </table>
       
       setListar(listar=mod)
       setRegistrarProducto(registrarProducto="")
       setListarProductos(listarProductos="")
       setModificar(modificar="")
       
  
    }
  
    
    function volver () {
        setBarra(barra=<Inicio/>)
        setListar(listar="")
        setModificar(modificar="")
        setListarProductos (listarProductos="")
        setRegistrarProducto (registrarProducto="")
    }
   
    // Funcion encargada de crear un producto
    function registrarProductoF (){
      
      let mod = 
      <form>
          nombre: <input type="text" id="nombre"/> <br/>
          descripcion: <input type="text" id="descripcion"/> <br/>
          precio: <input type="text" step="0.01" id="precio"/> <br/>
          stock: <input type="number" id="stock"/> <br/>
          <button  onClick={capturarInfoRegistrar}> Registrar   </button>
      </form>
      
      setRegistrarProducto(registrarProducto=mod)
      setModificar (modificar ="")
      setListar(listar="")
      setListarProductos(listarProductos="")
    }


    function capturarInfoRegistrar(){
      ///////////////////////////////////////
      /* TRABAJAR DESDE AQUI!!      */
      //////////////////////////////////////
      // Obtener el ultimo valor del arreglo para agregar el id
      let id = listProductos.length+1;
      var nombre = document.getElementById("nombre").value;
      var descripcion = document.getElementById("descripcion").value;
      var precio = document.getElementById("precio").value;
      var stock = document.getElementById("stock").value;
      let producto = {"idProducto": Number(id), "nombre": String(nombre), "descripcion": String(descripcion), "precio":Number(precio), "stock":Number(stock)}
      listProductos.push(producto);
      let mod=
      <h1>{"Se ha registrado el producto con id: " + id}</h1>

      setRegistrarProducto(registrarProducto=mod)

    }
  







    // Funcion encargada de modificar un producto que se encuentra creado
    function modificacion () {
      let mod =
      <form>
          idProducto: <input type="number" id="idProducto" min="1" required/> <br/>
          nombre: <input type="text" id="nombre"/> <br/>
          descripcion: <input type="text" id="descripcion"/> <br/>
          precio: <input type="text" step="0.01" id="precio"/> <br/>
          stock: <input type="number" id="stock"/> <br/>
          <button  onClick={capturarInfo}> Modificar   </button>
      </form>
      //setListar(listar="")
      setModificar(modificar=mod)
      setListar(listar="")
      setRegistrarProducto(registrarProducto="")
      setListarProductos(listarProductos="")
  }
  


    // capturar informacion de formulario
    function capturarInfo(){
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
      if(result != null){
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
      <h1>{result.nombre}</h1>
      </div>
      }
      setModificar(modificar=mod)
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
    
    // Lista de ventas
    /*
    let listaVentas = [
      {"idProducto": 1, "fecha": "2022-10-05", "idVenta": 1,"valor": 123.32},
      {"idProducto": 2, "fecha": "2022-10-06", "idVenta": 2,"valor": 123.32},
      {"idProducto": 3, "fecha": "2022-10-06", "idVenta": 3,"valor": 11000},
      {"idProducto": 4, "fecha": "2022-10-06", "idVenta": 4, "valor": 4.5}
      ]
    */
    
    // Lista de productos
    /*
    let listProductos = [
      {"idProducto": 1, "nombre": "informatica1", "descripcion": "libro informatica1", "precio":12, "stock":2},
      {"idProducto": 2, "nombre": "informatica2", "descripcion": "libro informatica2", "precio":14, "stock":3}, 
      {"idProducto": 3, "nombre": "informatica3", "descripcion": "libro informatica3", "precio":16, "stock":4},
      {"idProducto": 4, "nombre": "informatica4", "descripcion": "libro informatica4", "precio":18, "stock":5},
      {"idProducto": 5, "nombre": "informatica6", "descripcion": "libro informatica6", "precio":20, "stock":6}
    ]
    */
    return(
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