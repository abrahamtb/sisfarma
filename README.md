# SisFarma 💊

Sitio web frontend para una farmacia, desarrollado como proyecto de práctica y portafolio. Incluye presentación institucional, catálogo de productos y servicios, componentes reutilizables y una experiencia adaptable a distintos tamaños de pantalla.

## Tecnologías

- **HTML5** y **CSS3**
- **JavaScript** (sin framework)
- **Bootstrap 5** para el diseño responsivo y componentes de interfaz
- **Font Awesome** para iconografía y **AOS** para animaciones de desplazamiento

## Funcionalidades implementadas

- Página de inicio con información institucional, productos y promociones.
- Catálogo de productos con búsqueda por nombre y filtros por categoría.
- Carrito demostrativo en el navegador para agregar o retirar productos y calcular el total.
- Secciones de servicios y «Nosotros».
- Barra de navegación y pie de página cargados como componentes HTML reutilizables.
- Adaptación visual a dispositivos móviles.

> **Alcance:** este repositorio contiene una interfaz frontend. El carrito es una demostración del lado del cliente; no incluye un backend de ventas, procesamiento de pagos ni persistencia de pedidos.

## Estructura principal

```text
sisfarma/
├── components/       # Navbar y footer reutilizables
├── css/              # Estilos por página
├── img/              # Recursos gráficos
├── js/               # Interacciones, búsqueda y carrito
├── video/            # Recursos audiovisuales
├── index.html        # Inicio
├── nosotros.html     # Información institucional
├── productos.html    # Catálogo
└── servicios.html    # Servicios
```

## Ejecución local

Los componentes comunes se cargan mediante `fetch()`; por eso es recomendable utilizar un servidor HTTP local en lugar de abrir los archivos directamente con `file://`.

1. Clona el repositorio: `git clone https://github.com/abrahamtb/sisfarma.git`
2. Ingresa al directorio: `cd sisfarma`
3. Inicia un servidor local, por ejemplo con Python: `python -m http.server 8000`
4. Abre `http://localhost:8000` en el navegador.

También puedes utilizar la extensión **Live Server** de VS Code.

## Próximas mejoras

- Separar los datos del catálogo en una fuente estructurada.
- Agregar pruebas de interfaz y accesibilidad.
- Incorporar persistencia y un backend si se decide convertir la demostración en una aplicación transaccional.

---

**Autor:** [Abraham Tintaya Barreda](https://github.com/abrahamtb) · [LinkedIn](https://www.linkedin.com/in/abrahamtb/)
