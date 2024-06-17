const campoNombre = document.querySelector("[data-campo-nombre]");
const campoPrecio = document.querySelector("[data-campo-precio]");
const campoImg = document.querySelector("[data-campo-img]");

function tomarDatos(event) {

    event.preventDefault()

    return {
        nombre: campoNombre.value,
        precio: campoPrecio.value,
        imagen: campoImg.value
    }
}

function limpiarDatos() {

    campoNombre.value=""
    campoPrecio.value=""
    campoImg.value=""
}

export const enviarDatos =  {
    tomarDatos,
    limpiarDatos
}