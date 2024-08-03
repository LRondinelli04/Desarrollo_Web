# Explicaciones de la clase utiles

El atributo **defer** en la etiqueta <script> indica al navegador que debe descargar el script en segundo plano y ejecutarlo una vez que el documento HTML haya sido completamente analizado y construido (es decir, cuando el DOM esté listo). Esto es útil para mejorar el rendimiento de la página y evitar bloqueos durante la carga del contenido.

Detalles del funcionamiento:
- Descarga en segundo plano: El script se descarga mientras el navegador continúa procesando el HTML.
- Ejecución después del análisis del DOM: El script se ejecuta solo después de que el navegador haya terminado de construir el DOM.
- Ejemplo:
    ```html
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Ejemplo de defer</title>
        <script defer src="js/index.js"></script>
    </head>
    <body>
        <h1>Hola, mundo!</h1>
    </body>
    </html>
    ```

En este ejemplo, el navegador descargará js/index.js en segundo plano y lo ejecutará después de que el DOM esté completamente construido. Esto asegura que el contenido de la página se cargue y se muestre al usuario sin demoras causadas por la ejecución del script.

------------------------------------------------------
La utilizacion de \n en un console.log se utiliza para un salto de linea.

- Ejemeplo: 
    - console.log("\n/* ES6 - Template literals */");