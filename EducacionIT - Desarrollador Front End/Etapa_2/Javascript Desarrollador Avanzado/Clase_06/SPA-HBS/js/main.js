function ajax(url, metodo='get') {
    const xhr = new XMLHttpRequest()
    xhr.open(metodo, url)
    xhr.send()

    return xhr
}

function marcarLink(id) {
    const links = document.querySelectorAll('a')
    links.forEach(link  => {
        if(link.id == id) link.classList.add('active')
        else link.classList.remove('active')
    })
}

function getNombreArchivo(id) {
    return 'plantillas/' + (id || 'home') + '.hbs'      // con short circuit operator
}

const datos = { 
    perfil: { nombre: 'Juan', apellido: 'Perez', edad: 23, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-256.png' },
    home: { mensaje: 'Hola!!! Bienvenidos a mi página Web SPA' },
    usuarios: { lista: ['Juan','Ana','José','Fede','María'] },
    configuraciones: { lista: [
        { nombre: 'Config. Nro 1', nivel: 'estándar' },
        { nombre: 'Config. Nro 2', nivel: 'medio' },
        { nombre: 'Config. Nro 3', nivel: 'crítico' },
    ]},
}


/* ------------------------------------------------------------------------------------------------------ */
/*  Carga de una plantilla en un elemento destino con indicación de fin de carga a través de un callback  */
/* ------------------------------------------------------------------------------------------------------ */
function getPlantilla(nombre, dest, cb) {
    const dst = document.querySelector(dest)

    const archivo = getNombreArchivo(nombre)
    const xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            const plantilla = xhr.response

            const template = Handlebars.compile(plantilla);
            // execute the compiled template and print the output to the console
            dst.innerHTML = template(datos[nombre] || {})
            marcarLink(nombre)

            if(cb) cb()
        }
    })
}

/* --------------------------------------------------------------------------------- */
/*  Petición de plantillas registrando las navegaciones en el history del navegador  */
/* --------------------------------------------------------------------------------- */
function getPlantillasConHistoryHash() {
    /* ---------------------------------------------- */
    /*         Carga de la página de inicio           */ 
    /* ---------------------------------------------- */
    const id = location.hash.slice(1)
    getPlantilla(id,'main')

    /* ---------------------------------------------- */
    /*   Carga dinámica de las vistas de navegación   */ 
    /* ---------------------------------------------- */
    const links = document.querySelectorAll('a')
    links.forEach( link => {

        link.addEventListener('click', e => {
            e.preventDefault()

            const id = link.id
            location.hash = id
        })
    })

    window.addEventListener('hashchange', () => {
        const id = location.hash.slice(1)
        getPlantilla(id,'main')
    })
}

function start() {
    /* ---------------------------------------------- */
    /*         Carga de la barra de navegación        */ 
    /* ---------------------------------------------- */
    getPlantilla('navbar','header', () => getPlantillasConHistoryHash())
}

start()