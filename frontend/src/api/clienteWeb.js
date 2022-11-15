import axios from 'axios';

// configuracion inicial
const clientWeb = axios.create({
    baseURL: 'http://localhost:4000'
})

// Configurar interceptores

// Exportar 
export default clientWeb