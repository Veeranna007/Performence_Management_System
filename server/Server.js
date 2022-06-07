const express = require ('express')
const cors = require('cors')
const bodyParser=require('body-Parser');
require("dotenv").config() 
const app = express()

//connect DB
//const db = require('./config/Connection')


//middlewares
app.use (cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))


//routers
const userRouter = require('./routes/user')
const usersRouter = require('./routes/users')

  
// routes
app.use("/",userRouter)
app.use("/",usersRouter)


// app.get("/api/get",(req,res)=>{
//   const sqlSelect="SELECT emp_no,emp_code,email,emp_name,phone, roles.role_name,department.dept_name FROM ((employees INNER JOIN roles ON employees.role_id = roles.role_id) INNER JOIN department ON employees.dept_id = department.dept_id)";
//   db.query(sqlSelect,(err,result)=>{
//     if(err){
//       console.log(err);
//     }
//     res.send(result);
//   });                  
// });


// app.get("/api/info",(req,res)=>{
//   const sqlSelect="SELECT emp_name,email,emp_code,phone, roles.role_name,department.dept_name FROM ((employees INNER JOIN roles ON employees.role_id = roles.role_id) INNER JOIN department ON employees.dept_id = department.dept_id)where emp_code='A004'";
//   db.query(sqlSelect,(err,result)=>{
//     res.send(result)
//   })
// })

//server
app.listen (process.env.PORT, ()=>{
  console.log(`server listening on the port ${process.env.PORT}`)
})