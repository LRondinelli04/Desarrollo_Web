# Comandos del Modulo 4

## Git Clone
- `git clone <url>` 
    - Este comando crea un directorio con el mismo nombre del repositorio del cliente.
    - Inicializa un directorio *.git* dentro de el. 
    - Trae toda la informacion de ese repositorio.

- `git clone <url> <nombre_del_directorio_nuevo>`
    - De esta forma se puede elegir el nombre del directorio que se desea crear.

## Fork

- El fork de un proyecto se realiza cuando se desea colaborar en él pero no se tienen permisos de escritura (push access).


## Git Fetch

- `git fetch <alias_remoto>`
    - Se utiliza para descargar los cambios y actualizaciones del repositorio remoto especificado a tu repositorio local.
    - No fusiona automaticamente estos cambios en tu rama actual, simplemente actualiza las referencia remotas, permitiendo revisa los cambios antes de integrarlos.
    - **Por ejemplo:**
        - `git fetch origin` descarga las actualizaciones del repositorio remoto llamado **origin** y actualiza las referencias remotas en tu repositorio local.

## Git Pull

- `git pull`
    - Sirve para actualizar la rama local con los cambios del repositorio remoto.
    - Combina 2 acciones en una: *git fetch* y *git merge*.
        - Primero, descarga los cambios y actualizaciones del repositorio remoto (git fetch)
        - Segundo, fusiona esos cambios en tu rama actual. 
    - **Por ejemplo:**
        - `git pull origin main` descarga las actualizaciones del repositorio remoto llamado **origin** y fusiona los cambios en la rama **main** de tu repositorio local.