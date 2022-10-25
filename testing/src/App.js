import "./App.css"
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import Header from "./common/header/Header"
import Home from "./components/MainPage/Home"
import Footer from "./common/footer/Footer"


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
        </Routes>
        <Home/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
