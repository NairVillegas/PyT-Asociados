# Portafolio — Maestro de Obra

Sitio 100% frontend (HTML + CSS + JS puro, sin backend ni servidor local).
Pensado mobile-first, con diseño estilo "ficha técnica de obra".

## Estructura del proyecto

```
portafolio-padre/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── img/       ← aquí van las fotos
│   └── video/     ← aquí van los videos
└── README.md
```

## 1. Datos ya cargados

El sitio ya tiene los datos reales de la tarjeta de presentación:

- Empresa: **P&T Asociados S.R.L.**
- Responsable: **Ronald Villegas Vega** (conocido como &quot;Pika&quot;) — Gerente General
- Contacto: **971 404 853** (WhatsApp y llamada)
- Zona de trabajo: **Marcona, Nasca y Palpa**
- Servicios: obras civiles, electricidad, gasfitería, tarrajeos, pintura, cerámicas, porcelanatos, hormigón y losas industriales
- Venta de agregados: agua, piedra 1/2, piedra 3/4, arena gruesa, arena fina, agregado de relleno
- Alquiler de maquinaria: trompo, maderas (encofrado)
- Logo real de la empresa: recreado en `assets/img/logo-pt.svg` (vectorial) y
  `assets/img/logo-pt.png` (versión rasterizada, fondo transparente, 512×512 —
  útil para WhatsApp Business, redes sociales, etc.). Se usa en el encabezado,
  el pie de página y como ícono de pestaña (favicon) del sitio.

Si algo cambia (número, servicios, zona de trabajo), búscalo directamente en `index.html` y edítalo.

## 2. Fotos de la biografía (sección Experiencia)

La sección "Experiencia" (`#experiencia`) muestra dos fotos en efecto espejo (inclinadas
en direcciones opuestas, como reflejo una de la otra):

- `assets/img/papa-antigua.jpg` — foto antigua (aplica un tono sepia automáticamente)
- `assets/img/papa-actual.jpg` — foto actual (sin tono sepia)

Reemplaza esos dos archivos por las fotos reales; el estilo ya aplica el marco tipo
polaroid y la inclinación en espejo, así que una foto escaneada o fotografiada funciona
bien tal cual.

## 3. Agregar fotos y videos reales

1. Copia las fotos dentro de `assets/img/` y los videos dentro de `assets/video/`.
2. Nombres sugeridos ya usados en el HTML: `obra-01.jpg`, `obra-02.jpg`, etc. Puedes
   renombrar tus archivos así, o cambiar el `src="assets/img/..."` en el HTML por el
   nombre real de tu archivo.
3. Para fotos pesadas (celular suele generar fotos de 3-5 MB), comprímelas antes de
   subirlas — por ejemplo con [squoosh.app](https://squoosh.app) — para que la página
   cargue rápido en celular. Apunta a menos de 300-400 KB por foto.
4. Cada "ficha de obra" (`<article class="obra-card">`) tiene estos campos para editar:
   - Tipo de obra (`data-tipo` — controla el filtro; valores válidos: `cimientos`,
     `pared`, `techado`, `molino`, `losas`)
   - Etiqueta visible (`<span class="obra-tipo">`, ej. "Casa — Cimientos")
   - Título
   - Ubicación, año y materiales
5. La galería está subdividida en siete etapas, agrupadas en tres frentes:
   - **Casa**: Cimientos (`cimientos`), Levantamiento de pared (`pared`), Acabados (`acabados`
     — pintura, cerámica y acabados en una sola ficha), Techado (`techado`)
   - **Planta**: Base para molino (`molino`), Losas (`losas`)
   - **Materiales**: Venta de agregados (`agregados`), aparte de Casa y Planta
   Para agregar una obra nueva, copia un bloque `<article class="obra-card">...</article>`
   completo dentro de `<div class="obras-grid">`, ajusta `data-tipo` a la etapa que
   corresponda y cambia sus datos. Si agregas una etapa nueva que no existe todavía,
   añade también su botón de filtro correspondiente dentro de `<div class="filtros-grupos">`.
6. La sección **Materiales** (`#materiales`) tiene una galería aparte (`material-fotos`)
   para fotos sueltas de material: cargando el camión, piedrones, arena, grava y agua.
   Para agregar una foto ahí, copia un bloque `<figure class="material-foto">...</figure>`.

## 4. Ver el sitio en tu computadora antes de publicarlo

No necesitas instalar nada especial. Basta con abrir `index.html` directamente en el
navegador (doble clic), o si tienes VS Code, usar la extensión "Live Server".

## 5. Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `portafolio-papa`).
2. Sube todo el contenido de esta carpeta a ese repositorio (arrastra los archivos
   desde la web de GitHub, o usa `git`):

   ```
   git init
   git add .
   git commit -m "Primera versión del portafolio"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/portafolio-papa.git
   git push -u origin main
   ```

3. En el repositorio, ve a **Settings → Pages**.
4. En "Source", selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub te dará una URL del tipo:
   `https://TU-USUARIO.github.io/portafolio-papa/`
6. Los cambios que subas después (`git push`) se publican solos en 1-2 minutos.

## Notas de diseño

- Los colores, tipografía y "ficha de obra" están definidos como variables al inicio
  de `css/styles.css` (bloque `:root`) — cambiar un color ahí lo actualiza en todo el sitio.
- El sitio es mobile-first: revisado para verse bien desde ~320px de ancho hacia arriba.
- El video de la obra 5 usa una imagen "poster" (`obra-05-poster.jpg`) que se muestra
  antes de reproducir — agrégala o el navegador mostrará un cuadro negro.
# PyT-Asociados
