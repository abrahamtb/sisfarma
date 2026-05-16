const params = new URLSearchParams(window.location.search);
const buscador = document.getElementById("buscador");
const botonesCategoria = document.querySelectorAll(".category-btn");
const tarjetasProducto = document.querySelectorAll("#productos-container > div");

if (buscador && tarjetasProducto.length) {
  const filtroInicial = params.get("buscar");
  let categoriaActual = "todos";

  if (filtroInicial) {
    buscador.value = filtroInicial;
  }

  const filtrarProductos = () => {
    const texto = buscador.value.toLowerCase().trim();

    tarjetasProducto.forEach((tarjeta) => {
      const producto = tarjeta.querySelector(".product-card");
      const nombre = producto.querySelector("h5").textContent.toLowerCase();
      const categorias = (tarjeta.dataset.category || "").split(" ");
      const coincideTexto = nombre.includes(texto);
      const coincideCategoria =
        categoriaActual === "todos" || categorias.includes(categoriaActual);

      tarjeta.style.display = coincideTexto && coincideCategoria ? "" : "none";
    });
  };

  buscador.addEventListener("input", filtrarProductos);

  botonesCategoria.forEach((boton) => {
    boton.addEventListener("click", () => {
      botonesCategoria.forEach((item) => item.classList.remove("active"));
      boton.classList.add("active");
      categoriaActual = boton.dataset.category || "todos";
      filtrarProductos();
    });
  });

  filtrarProductos();
}
