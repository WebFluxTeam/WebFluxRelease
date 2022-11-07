import React, { useState } from "react";
import '../styles/styleAdminstrador.css'
import Inicio from "./inicio";

function Admin() {
    let init = 
    <div className="nav">
        <div className="blockAdmin">
            <button onClick={lista} className="buttonAdmin"> Lista de Productos </button>
            <button className="buttonAdmin"> Agregar </button>
            <button className="buttonAdmin"> Editar </button>
            <button className="buttonAdmin"> Eliminar </button>
            <button onClick={volver} className="buttonAdmin"> Volver </button>
        </div>
    </div>

    function volver() {
        setBarra(barra = <Inicio />)
    }

    let [barra, setBarra] = useState(init)
    return (<div> {barra} </div>)

    function lista() {
        let lista =
            <table>
                <thead>
                    <tr>
                        <th>Producto 1</th>
                        <th>Producto 2</th>
                        <th>Producto 3</th>
                        <th>Producto 4</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>$ 50</td>
                        <td>$ 60</td>
                        <td>$ 70</td>
                        <td>$ 80</td>
                    </tr>
                    <tr>
                        <td>Stock: 10</td>
                        <td>Stock: 20</td>
                        <td>Stock: 30</td>
                        <td>Stock: 40</td>
                    </tr>
                </tbody>
            </table>
    }
}

export default Admin