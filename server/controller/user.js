
const {db} = require("../config/Connection")

const getUsers=(req, res)=>{
      console.log("hello")
        const sqlSelect="SELECT emp_no,emp_code,email,emp_name,phone, roles.role_name,department.dept_name FROM ((employees INNER JOIN roles ON employees.role_id = roles.role_id) INNER JOIN department ON employees.dept_id = department.dept_id)";
        db.query(sqlSelect,(err,result)=>{
          if(err){
            console.log(err);
          }
          console.log(result)
          res.json({data:result});

        });                   
      };


const getUser=(req, res)=>{
        const sqlSelect="SELECT emp_name,email,emp_code,phone, roles.role_name,department.dept_name FROM ((employees INNER JOIN roles ON employees.role_id = roles.role_id) INNER JOIN department ON employees.dept_id = department.dept_id)where emp_code='A004'";
        db.query(sqlSelect,(err,result)=>{
          res.send(result);
        });
      };

module.exports={getUsers,getUser}