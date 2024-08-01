# Comandos de la Clase 02

## Como crear un template usando Perplexity

## Creación del Template de Mensaje de Commit

### Paso 1: Crear el archivo del template

1. Abre tu terminal o línea de comandos.
2. Navega hasta el directorio de tu repositorio utilizando el comando cd.
3. Crea un archivo llamado .gitmessage en la raíz de tu repositorio. Puedes hacerlo con un editor de texto o utilizando el siguiente comando:
    - `touch .gitmessage`
4. Abre el archivo .gitmessage en tu editor de texto favorito y define la estructura de tu mensaje de commit. Un ejemplo de template podría ser:
    - Subject: <tipo>(<ámbito>): <descripción> (máx. 50 caracteres) 

    Body: 
    <inserta una descripción detallada de los cambios realizados en el commit> (ajustar a 72 caracteres)

    Footer: 
    <inserta cualquier información adicional, como referencias o números de issue>
Este formato ayuda a mantener la claridad y la consistencia en los mensajes de commit.

### Paso 2: Configurar Git para usar el template

1. Aún en la terminal, ejecuta el siguiente comando para establecer la ruta de tu template de mensaje de commit:
    - `git config --local commit.template .gitmessage` 
2. Verifica que la configuración se haya establecido correctamente ejecutando:
    - `git config --local --get-all commit.template`
Deberías ver la ruta de tu archivo .gitmessage en la salida.
    

### Uso de Template en Commits

Una vez que hayas configurado el template, cada vez que realices un commit, Git abrirá automáticamente tu template en el editor de texto predeterminado. Para usarlo:

1. Ejecuta el comando para crear un nuevo commit:   
    - `git commit`
2. Completa las secciones del template con la información relevante sobre los cambios realizados.
3. Guarda y cierra el archivo. Git creará el commit utilizando el mensaje que escribiste en el template.

### Beneficios de Usar un Template de Mensaje de Commit

- **Consistencia**: Ayuda a todos los miembros del equipo a seguir un formato uniforme.
- **Claridad**: Facilita la comprensión de los cambios realizados en cada commit.
- **Mejora en la colaboración**: Los mensajes claros y estructurados son esenciales para la revisión de código y la resolución de problemas en equipo.

Al implementar un template personalizado para tus mensajes de commit, no solo mejorarás la calidad de la documentación de tu código, sino que también facilitarás la colaboración con otros desarrolladores en tu proyecto.

## Ejemplos de Template

### Ejemplo 1: Template Básico

    Título: Resumen en modo imperativo, comienza con mayúscula, no termina con un punto
    (máx. 50 caracteres)

    Cuerpo: Explica *qué* y *por qué* (no *cómo*). Incluye el ID de la tarea (ej. Jira).
    Ajusta a 72 caracteres.
    
    Pie: 
    Incluye Co-authored-by para todos los colaboradores.
    Formato:
    Co-authored-by: nombre <usuario@ejemplo.com>

### Ejemplo 2: Template con Detalles Adicionales

Título: Resumen breve (50 caracteres máx)

Cuerpo:
- Descripción de los cambios realizados.
- Razones de los cambios.
- Referencias a tickets o issues relevantes.

Pie:
- Información adicional, como autores o notas sobre cambios importantes.
- Ejemplo:
Co-authored-by: Lucas Rondinelli <lucas@ejemplo.com>