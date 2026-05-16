let carrito = [];
let total = 0;

function agregarCarrito(nombre, precio){

    carrito.push({
        nombre,
        precio
    });

    total += precio;

    actualizarCarrito();
}

function actualizarCarrito(){

    const lista = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");
    const contador = document.getElementById("cart-count");

    lista.innerHTML = "";

    carrito.forEach((producto, index) => {

        const li = document.createElement("li");

        li.classList.add(
            "list-group-item",
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );

        li.innerHTML = `

            <div>
                <strong>${producto.nombre}</strong>
                <br>
                S/ ${producto.precio}
            </div>

            <button class="btn btn-sm btn-danger"
                    onclick="eliminarProducto(${index})">

                <i class="fas fa-trash"></i>

            </button>

        `;

        lista.appendChild(li);

    });

    totalElemento.textContent = total.toFixed(2);

    contador.textContent = carrito.length;
}

function eliminarProducto(index){

    total -= carrito[index].precio;

    carrito.splice(index, 1);

    actualizarCarrito();
}

function vaciarCarrito(){

    carrito = [];

    total = 0;

    actualizarCarrito();
}
function finalizarCompra(){

    if(carrito.length === 0){

        alert("Tu carrito está vacío");

        return;
    }

    let mensaje = "🛒 *PEDIDO SISFARMA* %0A%0A";

    carrito.forEach(producto => {

        mensaje += `✅ ${producto.nombre} - S/ ${producto.precio}%0A`;

    });

    mensaje += `%0A💰 Total: S/ ${total.toFixed(2)}`;

    const numero = "51987742986";

    const url = `https://wa.me/${numero}?text=${mensaje}`;

    window.open(url, "_blank");

}