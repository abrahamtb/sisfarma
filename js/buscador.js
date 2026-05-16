 const buscador = document.getElementById("buscador");

    buscador.addEventListener("keyup", function(){

        let filtro = buscador.value.toLowerCase();

        let productos =
            document.querySelectorAll(".producto-item");

        productos.forEach(producto => {

            let texto =
                producto.innerText.toLowerCase();

            if(texto.includes(filtro)){

                producto.style.display = "";

            }else{

                producto.style.display = "none";

            }

        });

    });
