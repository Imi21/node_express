const express = require("express");

const app = express();

const puerto = 8080;

app.get('/',(req,res)=>{
    res.send(`Que pasa Peopleeeee!!!`)
})

app.get('/products',(req,res)=>{
    res.send(`listado de productos`)
})

app.post('/products',(req,res)=>{
    res.send(`crear un producto`)
})

app.put('/products',(req,res)=>{
    res.send(`actualizar un producto`)
})

app.delete('/products',(req,res)=>{
    res.send(`borrar producto`)
})

app.get('/users',(req,res)=>{
    res.send(`listado de usuarios`)
})
app.post('/users',(req,res)=>{
    res.send(`crear un usuario`)
})

app.put('/users',(req,res)=>{
    res.send(`actualiza usuario`)
})

app.delete('/users',(req,res)=>{
    res.send(`borrar usuario`)
})







app.listen(puerto, () => {
console.log(`Servidor levantado en el puerto ${puerto}`);
});