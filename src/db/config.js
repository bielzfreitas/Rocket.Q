const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

//open abre o db toda vez
module.exports = () =>
  open({
    //driver db
    filename: './src/db/rocketq.sqlite',
    driver: sqlite3.Database
  })
