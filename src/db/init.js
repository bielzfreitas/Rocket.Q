//o init inicia a db
const Database = require('./config')

const initDb = {
  //async - await sempre juntos
  async init() {
    const db = await Database()

    //codigos sql para tabela
    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`)

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`)

    await db.close()
  }
}

//excutando
initDb.init()
