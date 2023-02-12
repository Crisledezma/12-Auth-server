const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Base de Datos en linea!!')
  } catch (error) {
    console.log(error);
    throw new Error('Error a la hora de inicializar la base de datos');
  }
}

module.exports = {
  dbConnection
}