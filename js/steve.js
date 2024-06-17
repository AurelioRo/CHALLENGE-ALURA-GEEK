
import {exportar} from "./productos.js"
import {enviarDatos} from "./formulario.js"

//productos

async function getServer() { 
    const conexion = await fetch("http://localhost:3000/productos");
    const datos = await conexion.json();
    return datos
};

getServer().then(resultado => {
    resultado.forEach(item => exportar.productos(item.id, item.nombre, item.precio, item.imagen))
})

async function eliminar(id) {
    const conexion = await fetch(`http://localhost:3000/productos/${id}`, {method:"DELETE"});
    const datos = await conexion.json();
    return datos
};

exportar.listaProductos.addEventListener("click", (event) => {
    
    if(event.target.nodeName === "IMG" && event.target.dataset.id) {
        eliminar(event.target.dataset.id)
        getServer().then(resultado => {
            resultado.forEach(item => exportar.productos(item.id, item.nombre, item.precio, item.imagen))
        });
    }
    
});

//formulario

const botonEnviar = document.querySelector(".formulario");
const botonLimpiar = document.querySelector(".boton-limpiar");

botonLimpiar.addEventListener("click", () => enviarDatos.limpiarDatos());

botonEnviar.addEventListener("submit", (event) => 
    {agregarProduct(enviarDatos.tomarDatos(event))
        getServer().then(resultado => {
            resultado.forEach(item => exportar.productos(item.id, item.nombre, item.precio, item.imagen))
        });
    }
);

async function agregarProduct(producto) {
    const conexion = await fetch("http://localhost:3000/productos",{
        method:"POST", 
        headers:{"content-type":"application/json"}, 
        body:JSON.stringify(producto)
    });

    const datos = await conexion.json();

    return datos
};