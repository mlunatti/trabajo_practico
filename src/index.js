const logger = require('morgan')

const configuracionApi =(app) =>{
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    app.use(logger('dev'))
      return;
};