# Comandos de la Clase 02

## Como crear un template usando Perplexity

Paso 1: Crear el archivo del template
Abre tu editor de texto favorito.
Crea un nuevo archivo y guárdalo con el nombre que desees, por ejemplo, commit-template.txt.
En el archivo, escribe la estructura que quieres que tenga tu mensaje de commit. Puedes incluir secciones como:
Título (máximo 50 caracteres)
Descripción (opcional, máximo 72 caracteres por línea)
Tipo de cambio (feat, fix, docs, style, refactor, test, chore)
Referencia a un issue o pull request
Firma
Aquí te dejo un ejemplo de cómo podría verse el archivo:
text

# Título del commit (máximo 50 caracteres)

# Descripción del commit (opcional, máximo 72 caracteres por línea)

# Línea en blanco

# Tipo de cambio: feat, fix, docs, style, refactor, test, chore

# Línea en blanco

# Referencia a issue o pull request (opcional)

# Línea en blanco

# Firma

Guarda el archivo.
Paso 2: Configurar el template en Git
Abre una terminal o línea de comandos.
Navega hasta el directorio donde se encuentra tu proyecto Git.
Ejecuta el siguiente comando para configurar el template de commit a nivel de repositorio:
bash
git config commit.template /ruta/al/archivo/commit-template.txt

Reemplaza /ruta/al/archivo/commit-template.txt con la ruta absoluta al archivo que creaste en el paso 1.
Opcionalmente, puedes configurar el template a nivel global para que se aplique a todos tus proyectos Git:
bash
git config --global commit.template /ruta/al/archivo/commit-template.txt

Paso 3: Probar el template
Ejecuta el comando git commit en tu terminal.
Git abrirá tu editor de texto predeterminado con el template precargado.
Completa los campos necesarios y guarda el archivo.
Git creará el commit con el mensaje formateado según tu template.
