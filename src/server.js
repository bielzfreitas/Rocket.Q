const express = require('express')
/* precisa importar o route para funcionar no navegador */
const route = require('./route')
//modulo
const path = require('path')

const server = express()

//engine
server.set('view engine', 'ejs')

/* procurando a pasta views; 
__dirname procura o nome do arquivo;
o __dirname se transforma no nome da pasta do arquivo 
path é o caminho
join junta o caminho com o dirname 

.../rocketq/src/views */
server.set('views', path.join(__dirname, 'views'))

//chamando a pasta public
server.use(express.static('public'))

//midware - decodifica e passa para o controller
server.use(express.urlencoded({ extended: true }))

//express usando o route
server.use(route)

server.listen(3000, () => console.log('RODANDO'))
