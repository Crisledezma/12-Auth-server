// Importar express
const express = require('express');
// Importar Cors
const cors = require('cors');
const path = require('path');
// Importar Base de Datos
const { dbConnection } = require('./db/config');
const { default: mongoose } = require('mongoose');
mongoose.set('strictQuery', false);
// Importar dotenv
require('dotenv').config();

// Crear servidor/aplicacion express
const app = express();

// Base de Datos
dbConnection();

// Directorio Publico
app.use(express.static('public'));

// Cors
app.use(cors());

// Lectura y Parseo de body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));

// Manejas las demás rutas
app.get('*', (req, res) => {
  res.sendFile( path.resolve(__dirname, 'public/index.html') )
})

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})