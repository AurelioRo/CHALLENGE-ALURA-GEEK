const listaProductos = document.querySelector("[data-lista-productos]");

const productos = function(id, nombre, precio, imagen) {
    const item = document.createElement("li");

    item.className= "lista-items"
    item.innerHTML=`
    <img src=${imagen} class="lista-img">
    <p class="lista-p">${nombre}</p>
    <div class="img-delete">
         <p>$ ${precio},00</p>
         <button class="lista-botones"><img data-id=${id} src="../items/delete.png"></button>
    </div>
    `

    listaProductos.appendChild(item);
}

export const exportar = {
    productos,
    listaProductos
}