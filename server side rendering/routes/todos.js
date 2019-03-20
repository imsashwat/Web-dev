const express = require('express')
const todoRoute = require('./routes/todos')

const srv = express();

srv.set('view engine', 'hbs') //set view engine lib to render files and uses hbs as view engine
srv.set('views', __dirname + "/views")  //explicitly isi directory k views folder ko point kr rha h

//body encoding techniques
srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

//middleware folder allocated to perform task
srv.use('/todos', todoRoute)

srv.listen(3456)
