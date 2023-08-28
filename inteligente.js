const carrito = document.getElementById('carrito');
const elementos1 = document.getElementsById('lista.1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciaCarritoBtn = document.getElementById('vaciar-carrito');

cargaEventListeners();

function cargaEventListeners() {

    elementos1.addEvemtListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciaCarritoBtn.addEventListener('click',vaciaCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar.carrito')) {
        const elemento = e.target.parentElement.paranElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento ={
        imgen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(EinfoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 />
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a herf="#" class="borrar"  data-id="${elemento.id}">X </a>
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')) {
        e.target.paranElement.parentElement.remove();
        elemento = e.target.paranElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id')
    }
}

function vaciaCarrito() {
    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}