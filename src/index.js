const logger = require('morgan')
const express= require('express')

const globalconstants  = require('./const/globalconstants')

const configuracionApi =(app) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(logger('dev'))
      return;
};

const init = () =>{
    const app = express() // crea instancia de express
    configuracionApi(app) //configuracion de la api

    app.listen(globalconstants.PORT)
    console.log('La aplicación se está ejecutando en el puerto: ' + globalconstants.PORT)

}


init();