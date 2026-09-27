/* ==========================================================================
   EL JARDÍN DE TORIBIA — script.js
   ==========================================================================
   Carrusel:
   - En dispositivos con cursor (laptop/desktop): el cambio de imágenes
     ocurre al pasar el cursor sobre la imagen, cada 2 segundos, y se
     detiene al retirar el cursor (se queda en la imagen actual).
   - En dispositivos táctiles (celular/tablet), donde no existe un cursor
     real: el carrusel avanza automáticamente cada 2 segundos, sin
     necesidad de tocar ni deslizar nada.
   ========================================================================== */


/* ==========================================================================
   1. CONFIGURACIÓN GENERAL
   ========================================================================== */

const CONFIG = {
  whatsapp: "525612051739",
  horario: "Lunes a sábado, 9:00 AM - 6:00 PM",
  zonaEntrega: "Ciudad de México y zonas cercanas"
};

const NUMERO_WHATSAPP = CONFIG.whatsapp;


/* ==========================================================================
   2. CATÁLOGO DE PRODUCTOS
   ========================================================================== */

const productos = [
  {
    nombre: "Ramo de Rosas",
    descripcion: "Disponible en diferentes colores y cantidades, ideal para cada ocasión.",
    precio: "$380 - $1,100 MXN",

    imagenes: [
      "img/rosas-1.jpeg",
      "img/rosas-2.jpeg",
      "img/rosas-3.jpeg"
    ]
  },

  {
    nombre: "Rubor",
    descripcion: "Ramo floral disponible en dos tamaños, elaborado con una hermosa combinación de rosas, claveles y mini rosas.",
    precio: "$450 - $700 MXN",

    imagenes: [
      "img/rubor-1.jpeg",
      "img/rubor-2.jpeg"
    ]
  },

  {
    nombre: "Cariño",
    descripcion: "Arreglo floral con crisantemos y lirios en diferentes colores, complementado con delicados detalles de pintura que le dan un toque único y especial.",
    precio: "$550 MXN",

    imagenes: [
      "img/cariño-1.jpeg"
    ]
  },
  {
    nombre: "Gerberitas",
    descripcion: "Disponible en dos tamaños y diferentes colores, perfecto para regalar una sonrisa y llenar cualquier ocasión de alegría.",
    precio: "$440 - $800 MXN",

    imagenes: [
      "img/gerberas-1.jpeg",
      "img/gerberas-2.jpeg"
    ]
  },
   {
    nombre: "Ramo Estrella",
    descripcion: "Una combinación de rosas, lirios, astromelias y margaritas, diseñada para llenar de color y alegría cualquier ocasión. Disponible en dos tamaños para elegir el detalle perfecto.",
    precio: "$550 - $630 MXN",

    imagenes: [
      "img/estrella-1.jpeg",
      "img/estrella-2.jpeg"
    ]
  },
  {
    nombre: "Bibble",
    descripcion: "Inspirado en el encanto de Bibble. Combina hortensias, claveles, margaritas y mini crisantemos.",
    precio: "$590 MXN",

    imagenes: [
      "img/bibble-1.jpeg",
      "img/especial-2.jpeg"
    ]
  },

  

  {
    nombre: "Gatitos",
    descripcion: "Un detalle lleno de ternura con 6 crisantemos personalizados con adorables gatitos. Perfecto para los amantes de los michis.",
    precio: "$450 MXN",

    imagenes: [
      "img/personalizado-1.jpeg",
      "img/personalizado-2.jpeg",
      "img/personalizado-3.jpeg"
    ]
  },
 {
    nombre: "Especial-Personalizado",
    descripcion: "Una composición floral preparada especialmente para sorprender.",
    precio: "Cotizalo",

    imagenes: [
      "img/especial-1.jpeg",
      "img/regalo-2.jpeg",
    ]
  },
];


/* ==========================================================================
   3. WHATSAPP
   ========================================================================== */

/**
 * Construye el enlace de WhatsApp.
 */

function construirLinkWhatsApp(mensaje) {

  const mensajeCodificado =
    encodeURIComponent(mensaje);

  return `https://wa.me/${NUMERO_WHATSAPP}?text=${mensajeCodificado}`;
}


/**
 * Mensaje general.
 */

function mensajeGeneral() {

  return "Hola, El Jardín de Toribia. Me gustaría hacer un pedido. ¿Podrían ayudarme?";

}


/**
 * Mensaje específico para un producto.
 */

function mensajeProducto(nombreProducto) {

  return `Hola, El Jardín de Toribia. Me interesa el ${nombreProducto}. ¿Podrían darme más información?`;

}


/**
 * Configura los botones generales de WhatsApp.
 */

function configurarBotonesGenerales() {

  const idsBotonesGenerales = [
    "nav-whatsapp-btn",
    "hero-whatsapp-btn",
    "contacto-whatsapp-btn",
    "whatsapp-float-btn"
  ];

  const link =
    construirLinkWhatsApp(
      mensajeGeneral()
    );


  idsBotonesGenerales.forEach((id) => {

    const boton =
      document.getElementById(id);


    if (!boton) {
      return;
    }


    boton.setAttribute(
      "href",
      link
    );

    boton.setAttribute(
      "target",
      "_blank"
    );

    boton.setAttribute(
      "rel",
      "noopener"
    );

  });

}


/* ==========================================================================
   4. CREAR CARRUSEL DE IMÁGENES
   ========================================================================== */

/**
 * Crea el contenedor del carrusel.
 *
 * Todas las imágenes quedan una encima de otra.
 * El CSS se encarga de moverlas horizontalmente.
 */

function crearCarruselImagenes(
  imagenes,
  nombreProducto
) {

  const carrusel =
    document.createElement("div");

  carrusel.className =
    "producto-carrusel";


  /*
   * Creamos una imagen por cada fotografía.
   */

  imagenes.forEach(
    (ruta, indice) => {

      const imagen =
        document.createElement("img");


      imagen.src = ruta;


      imagen.alt =
        `${nombreProducto} - imagen ${indice + 1}`;


      /*
       * La primera imagen es visible.
       */

      if (indice === 0) {

        imagen.classList.add(
          "imagen-activa"
        );

      }


      carrusel.appendChild(
        imagen
      );

    }
  );


  /*
   * Creamos los indicadores:
   *
   * ● ○ ○
   */

  if (imagenes.length > 1) {

    const indicadores =
      document.createElement("div");

    indicadores.className =
      "carrusel-indicadores";


    imagenes.forEach(
      (_, indice) => {

        const indicador =
          document.createElement("span");


        indicador.className =
          "carrusel-indicador";


        if (indice === 0) {

          indicador.classList.add(
            "activo"
          );

        }


        indicadores.appendChild(
          indicador
        );

      }
    );


    carrusel.appendChild(
      indicadores
    );

  }


  return carrusel;
}


/* ==========================================================================
   5. CARRUSEL: HOVER EN ESCRITORIO, AUTOPLAY EN TÁCTIL
   ========================================================================== */

/**
 * En dispositivos con cursor real (laptop/desktop):
 * - El carrusel comienza únicamente cuando el usuario coloca
 *   el cursor sobre la imagen.
 * - Cada cambio ocurre cada 2 segundos.
 * - Al retirar el cursor, se detiene y se mantiene la imagen actual.
 * - Al volver a colocar el cursor, continúa desde esa imagen.
 *
 * En dispositivos táctiles (celular/tablet), donde "hover" no existe
 * de forma confiable:
 * - El carrusel avanza solo, automáticamente, cada 2 segundos,
 *   sin necesidad de tocar ni deslizar nada.
 *
 * --- CORRECCIÓN ---
 * Antes, el carrusel dependía solo de "mouseenter"/"mouseleave", que en
 * pantallas táctiles casi nunca se disparan de forma confiable. Por eso
 * en celular las imágenes se quedaban congeladas. Ahora detectamos el
 * tipo de dispositivo con matchMedia('(hover: hover)') y, si no hay
 * cursor real, arrancamos el carrusel de una vez en modo automático.
 */

function configurarCarruselHover(
  carrusel,
  cantidadImagenes
) {

  /*
   * Si solamente hay una fotografía,
   * no necesitamos carrusel.
   */

  if (cantidadImagenes <= 1) {
    return;
  }


  const imagenes =
    carrusel.querySelectorAll(
      ":scope > img"
    );


  const indicadores =
    carrusel.querySelectorAll(
      ".carrusel-indicador"
    );


  /*
   * Índice de la fotografía actual.
   */

  let indiceActual = 0;


  /*
   * Guardaremos aquí el intervalo.
   */

  let intervalo = null;


  /*
   * Cambia a la siguiente fotografía.
   */

  function cambiarImagen() {

    /*
     * Guardamos la imagen actualmente visible.
     */

    const imagenAnterior =
      imagenes[indiceActual];


    /*
     * Calculamos la siguiente imagen.
     */

    indiceActual =
      (indiceActual + 1) %
      cantidadImagenes;


    const imagenNueva =
      imagenes[indiceActual];


    /*
     * Activamos la nueva imagen.
     *
     * El CSS se encarga de hacer
     * el movimiento horizontal.
     */

    imagenNueva.classList.add(
      "imagen-activa"
    );


    /*
     * Desactivamos la anterior.
     */

    imagenAnterior.classList.remove(
      "imagen-activa"
    );


    /*
     * Actualizamos los indicadores.
     */

    indicadores.forEach(
      (indicador, indice) => {

        indicador.classList.toggle(
          "activo",
          indice === indiceActual
        );

      }
    );

  }


  /*
   * Comienza el carrusel.
   */

  function iniciar() {

    /*
     * Si ya está funcionando,
     * no creamos otro intervalo.
     */

    if (intervalo !== null) {
      return;
    }


    /*
     * 2000 = 2 segundos.
     *
     * El primer cambio ocurre
     * después de 2 segundos.
     */

    intervalo =
      setInterval(
        cambiarImagen,
        2000
      );

  }


  /*
   * Detiene el carrusel.
   */

  function detener() {

    if (intervalo !== null) {

      clearInterval(
        intervalo
      );

      intervalo = null;

    }

  }


  /*
   * --- CORRECCIÓN ---
   * ¿Este dispositivo tiene un cursor real (mouse/trackpad)?
   * En celulares y tablets esto da "false", porque el dedo
   * no puede "pasar por encima" como lo hace un cursor.
   */

  const tieneCursorReal =
    window.matchMedia(
      "(hover: hover)"
    ).matches;


  if (!tieneCursorReal) {

    /*
     * Dispositivo táctil: arrancamos el carrusel
     * de una vez, en modo automático, sin esperar
     * ningún gesto del usuario.
     */

    iniciar();

    return;

  }


  /*
   * Dispositivo con cursor (laptop/desktop):
   * comportamiento original basado en hover.
   */

  carrusel.addEventListener(
    "mouseenter",
    iniciar
  );


  carrusel.addEventListener(
    "mouseleave",
    () => {

      detener();

    }
  );

}


/* ==========================================================================
   6. CREAR TARJETA DE PRODUCTO
   ========================================================================== */

function crearTarjetaProducto(
  producto
) {

  const tarjeta =
    document.createElement("article");


  tarjeta.className =
    "producto-card reveal";


  /*
   * Creamos el enlace personalizado
   * de WhatsApp.
   */

  const linkWhatsApp =
    construirLinkWhatsApp(
      mensajeProducto(
        producto.nombre
      )
    );


  /*
   * Creamos el carrusel.
   */

  const carrusel =
    crearCarruselImagenes(
      producto.imagenes,
      producto.nombre
    );


  /*
   * Contenedor de la fotografía.
   */

  const contenedorImagen =
    document.createElement("div");


  contenedorImagen.className =
    "producto-imagen";


  contenedorImagen.appendChild(
    carrusel
  );


  /*
   * Información del producto.
   */

  const informacion =
    document.createElement("div");


  informacion.className =
    "producto-info";


  informacion.innerHTML = `
    <h3>${producto.nombre}</h3>

    <p>${producto.descripcion}</p>

    <span class="producto-precio">
      ${producto.precio}
    </span>

    <a
      href="${linkWhatsApp}"
      class="btn btn-whatsapp"
      target="_blank"
      rel="noopener"
    >
      Consultar por WhatsApp
    </a>
  `;


  /*
   * Agregamos todo a la tarjeta.
   */

  tarjeta.appendChild(
    contenedorImagen
  );


  tarjeta.appendChild(
    informacion
  );


  /*
   * Activamos el carrusel.
   */

  configurarCarruselHover(
    carrusel,
    producto.imagenes.length
  );


  return tarjeta;
}


/* ==========================================================================
   7. RENDERIZAR CATÁLOGO
   ========================================================================== */

function renderizarCatalogo() {

  const contenedor =
    document.getElementById(
      "catalogo-grid"
    );


  if (!contenedor) {
    return;
  }


  /*
   * Creamos cada producto.

   */

  productos.forEach(
    (producto) => {

      const tarjeta =
        crearTarjetaProducto(
          producto
        );


      contenedor.appendChild(
        tarjeta
      );

    }
  );

}


/* ==========================================================================
   8. DATOS DE CONTACTO
   ========================================================================== */

function renderizarDatosContacto() {

  const lista =
    document.getElementById(
      "contacto-datos"
    );


  if (!lista) {
    return;
  }


  lista.innerHTML = `
    <li>
      <strong>Horario de atención:</strong>
      ${CONFIG.horario}
    </li>

    <li>
      <strong>Zona de entrega:</strong>
      ${CONFIG.zonaEntrega}
    </li>
  `;

}


/* ==========================================================================
   9. MENÚ MÓVIL
   ========================================================================== */

function configurarMenuMovil() {

  const botonMenu =
    document.getElementById(
      "menu-toggle"
    );


  const nav =
    document.getElementById(
      "main-nav"
    );


  if (!botonMenu || !nav) {
    return;
  }


  const cerrarMenu = () => {

    nav.classList.remove(
      "abierto"
    );


    botonMenu.classList.remove(
      "abierto"
    );


    botonMenu.setAttribute(
      "aria-expanded",
      "false"
    );


    botonMenu.setAttribute(
      "aria-label",
      "Abrir menú"
    );

  };


  const abrirMenu = () => {

    nav.classList.add(
      "abierto"
    );


    botonMenu.classList.add(
      "abierto"
    );


    botonMenu.setAttribute(
      "aria-expanded",
      "true"
    );


    botonMenu.setAttribute(
      "aria-label",
      "Cerrar menú"
    );

  };


  botonMenu.addEventListener(
    "click",
    () => {

      const estaAbierto =
        nav.classList.contains(
          "abierto"
        );


      if (estaAbierto) {

        cerrarMenu();

      } else {

        abrirMenu();

      }

    }
  );


  /*
   * Cierra el menú al seleccionar
   * una sección.
   */

  nav.querySelectorAll(
    ".nav-link"
  ).forEach(
    (enlace) => {

      enlace.addEventListener(
        "click",
        cerrarMenu
      );

    }
  );

}


/* ==========================================================================
   10. ANIMACIONES AL HACER SCROLL
   ========================================================================== */

function configurarAnimacionesDeAparicion() {

  const elementos =
    document.querySelectorAll(
      ".reveal"
    );


  if (
    !("IntersectionObserver" in window) ||
    elementos.length === 0
  ) {

    elementos.forEach(
      (elemento) => {

        elemento.classList.add(
          "visible"
        );

      }
    );

    return;
  }


  const observador =
    new IntersectionObserver(
      (entradas) => {

        entradas.forEach(
          (entrada) => {

            if (
              entrada.isIntersecting
            ) {

              entrada.target.classList.add(
                "visible"
              );


              observador.unobserve(
                entrada.target
              );

            }

          }
        );

      },
      {
        threshold: 0.15
      }
    );


  elementos.forEach(
    (elemento) => {

      observador.observe(
        elemento
      );

    }
  );

}


/**
 * Marca las secciones existentes
 * para las animaciones de aparición.
 */

function marcarSeccionesParaAnimar() {

  const selectores = [
    ".hero-content",
    ".nosotros-imagen",
    ".nosotros-texto",
    ".paso",
    ".contacto-texto",
    ".contacto-card"
  ];


  selectores.forEach(
    (selector) => {

      document
        .querySelectorAll(selector)
        .forEach(
          (elemento) => {

            elemento.classList.add(
              "reveal"
            );

          }
        );

    }
  );

}


/* ==========================================================================
   11. INICIALIZACIÓN
   ========================================================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderizarCatalogo();

    renderizarDatosContacto();

    configurarBotonesGenerales();

    configurarMenuMovil();

    marcarSeccionesParaAnimar();

    configurarAnimacionesDeAparicion();

  }
);