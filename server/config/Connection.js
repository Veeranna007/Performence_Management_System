const mysql= require('mysql')


const db = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'pms',
    port:3306
  })
  module.exports = db
 