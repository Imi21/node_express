const express = require("express");

const app = express();

const puerto = 8080;

app.listen(puerto, () => {
console.log(`Servidor levantado en el puerto ${puerto}`);

});