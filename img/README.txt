Carpeta de imágenes — El Jardín de Toribia
============================================

Aquí debes guardar tus fotografías reales cuando las tengas.

Mientras tanto, la página usa imágenes temporales de Unsplash
(fotos de flores libres de derechos) cargadas directamente desde
internet, así que puedes ver la página funcionando sin tener
ninguna imagen propia todavía.

Cuando tengas tus propias fotos:

1. Guarda cada imagen dentro de esta carpeta (img/).
   Ejemplos de nombres sugeridos:
   - hero-flores.jpg          (foto grande de portada)
   - ramo-rosas.jpg
   - bouquet-temporada.jpg
   - arreglo-floral.jpg
   - bouquet-especial.jpg
   - flores-regalo.jpg
   - arreglo-personalizado.jpg

2. Abre js/script.js y busca el arreglo "productos".
   Cambia el valor de la propiedad "imagen" de cada producto,
   por ejemplo:

     imagen: "img/ramo-rosas.jpg"

3. Para la imagen del Hero (la portada), abre index.html y busca
   la sección <section id="inicio" class="hero">. Ahí encontrarás
   un comentario indicando dónde reemplazar la URL de Unsplash por
   tu propia imagen local, por ejemplo:

     <img src="img/hero-flores.jpg" alt="...">

Recomendaciones:
- Usa fotos horizontales para el Hero (idealmente 1600x1000px o más).
- Usa fotos cuadradas o casi cuadradas para las tarjetas del catálogo
  (idealmente 800x800px).
- Comprime tus imágenes antes de subirlas (por ejemplo con
  https://squoosh.app) para que la página cargue rápido.
