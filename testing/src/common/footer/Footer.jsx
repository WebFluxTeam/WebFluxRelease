import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer className="container Foot1">
        <div className='container grid2'>
          <div className='box'>
            <h1>Footer</h1>
            <p>Iconos de redes</p>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>*</li>
              <li>*</li>
              <li>*</li>
              <li>*</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer</h2>
            <ul>
              <li>* </li>
              <li>* </li>
              <li>* </li>
              <li>* </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Adress </li>
              <li>Email </li>
              <li>Phone</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
