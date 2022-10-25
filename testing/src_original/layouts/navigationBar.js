import {Navbar, Nav, Container, NavDropdown} from  "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const NavigationBar = () => {
    return (
        <>
            <Navbar className="navBg" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to ="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}

/*import React, {useState} from "react";

function NavigationBar (propiedad) {
    let [mensaje, setMensaje] = useState("")
    let listaP = () => {
        setMensaje(mensaje= "Listado de Productos")               
    }
    let editar = () => {
        setMensaje(mensaje="Modificar Productos") 
    }
    let listaV = () => {
        setMensaje(mensaje="Lista de Ventas")
    }
    let carrito = () => {
        setMensaje(mensaje="Carrito")
    }
    return(
        <div>
            <div className="blockBarra">
                <button onClick={listaP}> {propiedad.menu1} </button>
                <button onClick ={editar}> {propiedad.menu2} </button>
                <button onClick={listaV}> {propiedad.menu3}  </button>
                <button onClick={carrito}> {propiedad.menu4} </button>
            </div>
            <div>
                <h1> {mensaje} </h1>
            </div>            
        </div> 
    )
}*/

export default NavigationBar