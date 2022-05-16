const mysql= require('mysql');


const ab= mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "bkbk1989",
    database: "askualla"
    
});
module.exports= ab;