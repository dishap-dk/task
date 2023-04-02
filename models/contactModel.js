
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: '13.233.12.75',
  user:'esp',
  password:'Espsoft123#',
  database: 'contact',
  port: '3306',
});

const promisePool = pool.promise();

class contactModel{
    saveContactDetails=async (name,email) => {
        let sql = `INSERT INTO contactUs(name,email)VALUES('${name}','${email}')`;
        const [result, fields] = await promisePool.query(sql);
        return result;
      }
}

module.exports=new contactModel()

