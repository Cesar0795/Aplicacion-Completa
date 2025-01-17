var rutas = require("express").Router();

var {mostrarUsuarios,nuevoUsuario,borrarUsuario,modificarUsuario,buscarPorID}=require("../bd/usuariosBD");

var {mostrarProductos,nuevoProducto,borrarProducto,buscarPorIDP,modificarProducto}=require("../bd/productosBD");

var {mostrarVentas,nuevaVenta,cancelarVenta,buscarPorIDV,modificarVenta}=require("../bd/ventaBD");

rutas.get("/", async(req,res)=>{
    var usuariosValidos= await mostrarUsuarios();
    //console.log(usuariosValidos);
    res.json(usuariosValidos);
});

rutas.get("/buscarUsuario/:id",async(req,res)=>{
    var usuarioValido = await buscarPorID(req.params.id);
    res.json(usuarioValido);
});

rutas.delete("/borrarUsuario/:id",async(req,res)=>{
    var usuarioBorrado = await borrarUsuario(req.params.id);
    res.json(usuarioBorrado);
});

rutas.post("/nuevoUsuario",async(req,res)=>{
    var usuarioValido = await nuevoUsuario(req.body);
    res.json(usuarioValido);
});

rutas.post("/modificarUsuario/:id",async(req,res)=>{
    var usuarioModificado = await modificarUsuario(req.body);
    res.json(usuarioModificado);
});

rutas.get("/productos", async(req,res)=>{
    var productosValidos= await mostrarProductos();
    //console.log(usuariosValidos);
    res.json(productosValidos);
});

rutas.get("/buscarProducto/:id",async(req,res)=>{
    var productoValido = await buscarPorIDP(req.params.id);
    res.json(productoValido);
});

rutas.delete("/borrarProducto/:id",async(req,res)=>{
    var productoBorrado = await borrarProducto(req.params.id);
    res.json(productoBorrado);
});

rutas.post("/nuevoProducto",async(req,res)=>{
    var productoValido = await nuevoProducto(req.body);
    res.json(productoValido);
});

rutas.post("/modificarProducto/:id",async(req,res)=>{
    var productoModificado = await modificarProducto(req.body);
    res.json(productoModificado);
});

rutas.get("/ventas", async(req,res)=>{
    var ventasValidos= await mostrarVentas();
    //console.log(usuariosValidos);
    res.json(ventasValidos);
});

rutas.get("/buscarVenta/:id",async(req,res)=>{
    var ventaValido = await buscarPorIDV(req.params.id);
    res.json(ventaValido);
});

rutas.post("/cancelarVenta/:id",async(req,res)=>{
    var ventaCancelada = await cancelarVenta(req.params.id);
    res.json(ventaCancelada);
});

rutas.post("/nuevaVenta",async(req,res)=>{
    var ventaValido = await nuevaVenta(req.body);
    res.json(ventaValido);
});

rutas.post("/modificarVenta/:id",async(req,res)=>{
    var ventaModificado = await modificarVenta(req.body);
    res.json(ventaModificado);
});


module.exports=rutas;