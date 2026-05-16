let carrito = [];
let total = 0;

// AGREGAR PRODUCTO
function agregarCarrito(nombre, precio) {
  carrito.push({
    nombre,
    precio,
  });

  total += precio;

  actualizarCarrito();

  mostrarToast();
}

// ACTUALIZAR CARRITO
function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");

  const totalElemento = document.getElementById("total");

  const contador = document.getElementById("cart-count");

  lista.innerHTML = "";

  carrito.forEach((producto, index) => {
    const li = document.createElement("li");

    li.classList.add("list-group-item", "cart-item");

    li.innerHTML = `

            <div class="cart-info">

                <h6>
                    ${producto.nombre}
                </h6>

                <p>
                    S/ ${producto.precio.toFixed(2)}
                </p>

            </div>

            <button class="delete-btn"
                    onclick="eliminarProducto(${index})">

                <i class="fas fa-trash"></i>

            </button>

        `;

    lista.appendChild(li);
  });

  totalElemento.textContent = total.toFixed(2);

  contador.textContent = carrito.length;
}

// ELIMINAR PRODUCTO
function eliminarProducto(index) {
  total -= carrito[index].precio;

  carrito.splice(index, 1);

  actualizarCarrito();
}

// VACIAR CARRITO
function vaciarCarrito() {
  carrito = [];

  total = 0;

  actualizarCarrito();
}

// FINALIZAR COMPRA
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío");

    return;
  }

  let mensaje = "🛒 *PEDIDO SISFARMA* %0A%0A";

  carrito.forEach((producto) => {
    mensaje += `✅ ${producto.nombre} - S/ ${producto.precio.toFixed(2)}%0A`;
  });

  mensaje += `%0A💰 *TOTAL:* S/ ${total.toFixed(2)}`;

  mensaje += `%0A%0A📍 Delivery SisFarma`;

  const numero = "51987742986";

  const url = `https://wa.me/${numero}?text=${mensaje}`;

  window.open(url, "_blank");
}

// TOAST BONITO
function mostrarToast() {
  const toastElement = document.getElementById("toastCarrito");

  const toast = new bootstrap.Toast(toastElement);

  toast.show();
}
