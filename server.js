const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/hello', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Information Retriever app listening at http://localhost:${port}`))


// Connect to databases
const connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: //Redacted,
    password: //Redacted,
    database: //Redacted,
  });

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });


app.get('/h1b/:companyName', (req, results) => {


    // Make an H1B database
    // Merge data from previous 5 years
    

  /*
  if (Object.keys(req.body).length == 0) {
      // TODO: adapt this to work with url text
      let sql = "SELECT * FROM contact INNER JOIN user ON contact.user_id=user.id";
      let query = connection.query(sql, req.body.user_id, (err, res) => 
      {
          if (err) {
              results.sendStatus(500);
              throw err;
          }
          results.json(JSON.stringify(res));
      });
  }
  else
  {
    let sql = "SELECT * FROM contact INNER JOIN user ON (user.id=? AND contact.user_id=?)";
    console.log(req.body.user_id);
    let query = connection.query(sql, [req.body.user_id, req.body.user_id], (err, res) => 
    {
      if (err) {
          results.sendStatus(500);
          throw err;
      }
      console.log("dog");
      console.log(res);
      results.json(JSON.stringify(res));
    });
 }
 */
    //results.send(req.params.companyName);
    results.send("true");
});
