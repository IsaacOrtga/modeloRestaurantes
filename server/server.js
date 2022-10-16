/* Para crear el backend, se crea un archivo js y se pone esto de la documentacion de NODE oficial. */

/* npm -init: crea el node modules y los dos paquejes json.  */
/* Que es lo que se necitaremos instalar para seguir con el back */
const express = require("express");
const router = require("./routes/routes");
require("./database/mongo");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.static("build"));

app.use("/",router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}


const port = process.env.PORT || 5000

app.listen(port ,() =>  console.log(`Sevidor escuchando en puerto ${port}`));

/* DOC OFICIZSL DDE NODE */
/* const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
}); 

 server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
 });
*/