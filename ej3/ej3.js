
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
const productos = [
    {id: 1,
    nombre: 'Taza de Harry Potter',
    precio: 300},
    {id: 2,
    nombre: 'FIFA 22 PS5', 
    precio: 1000
    },
    {id: 3,
    nombre: 'Figura Goku Super Saiyan', 
    precio: 100 
    },
    {id: 4,
    nombre: 'Zelda Breath of the Wild', 
    precio: 200},
    {id: 5,
    nombre: 'Skin Valorant', 
    precio: 120},
    {id: 6,
    nombre: 'Taza de Star Wars', 
    precio: 220}
]

app.get('/', (req, res) => {
  res.send('yeeepa primo!')
});

app.get("/products",(req,res)=> {
    res.send(productos)
});

app.post('/products',(req,res)=>{
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
      };

        if (!req.body.nombre || !req.body.precio) {
        res.status(400).send("Rellena los campos cabezón");
        } 
        else {
            productos.push(nuevoProducto);
            const devuelve = { nuevoProducto, productos }
            res.status(201).send(devuelve);
      }
    });

app.put('/:id',(req,res)=>{
    
  const encuentra = productos.some(item => item.id === +req.params.id)
      if(encuentra){
          productos.forEach(item =>{
              if(+req.params.id === item.id){
                  item.nombre = req.body.nombre ? req.body.nombre : item.nombre
                  item.precio = req.body.precio ? req.body.precio : item.precio
                  res.send(item)
              }
          })
      }else{
          res.status(404).send(`El producto  ${req.params.id} me da a mi que no está`)
      }
  })   

  app.delete('/:id',(req,res)=>{
    const encuentra = productos.some(item => item.id === +req.params.id)

    if(encuentra){
        const productsFilter = productos.filter(item => item.id !== +req.params.id)
        res.send({msg:`El producto ${req.params.id}, au nano`,membersFiltered})
    }else{
        res.status(404).send(`Member with id ${req.params.id} not found`)
    }
})



app.get("/:precio",(req,res)=> {
  const encuentra = productos.some(item => item.precio === +req.params.precio);
  if (encuentra) {
    res.send(items.filter((item) => item.precio === +req.params.precio));
} else {
    res.status(404).send(`No tenemos productos de ${req.params.precio}`);
}
});


app.get("/:id", (req, res) => {

  const encuentra = productos.some(item => item.id === +req.params.id);

  if (encuentra) {
      res.send(items.filter((item) => item.id === +req.params.id));
  } else {
      res.status(404).send(` id ${req.params.id} no está `);
  }
});



app.get("/:nombre", (req, res) => {

  const encuentra = productos.some(item => item.nombre === req.params.nombre);

  if (encuentra) {
      res.send(productos.filter(item => item.nombre === req.params.nombre));
  } else {
      res.status(404).send(`nombre ${req.params.nombre} not found`);
  }
});
  
  
  



















app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

