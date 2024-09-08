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
    //return 'plantillas/' + (id? id : 'home') + '.html'      // con operador ternario
    return 'plantillas/' + (id || 'home') + '.html'      // con short circuit operator
}

/* --------------------------------------------------- */
/*  Petición de plantillas sin registro de navegación  */
/* --------------------------------------------------- */
function getPlantillasSinHistory() {
    const main = document.querySelector('main')

    /* ---------------------------------------------- */
    /*         Carga de la página de inicio           */ 
    /* ---------------------------------------------- */
    const archivo = getNombreArchivo('home')
    const xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            const plantilla = xhr.response
            main.innerHTML = plantilla
        }
    })

    /* ---------------------------------------------- */
    /*   Carga dinámica de las vistas de navegación   */ 
    /* ---------------------------------------------- */
    const links = document.querySelectorAll('a')
    //console.log(links)

    links.forEach( link => {
        //console.log(link)

        link.addEventListener('click', e => {
            e.preventDefault()

            const id = link.id
            //console.log('Click!', id)

            const archivo = getNombreArchivo(id)
            //console.warn(archivo)

            const xhr = ajax(archivo)
            xhr.addEventListener('load', () => {
                if(xhr.status == 200) {
                    const plantilla = xhr.response
                    //console.log(plantilla)
                    main.innerHTML = plantilla
                }
            })

        })
    })
}

/* --------------------------------------------------------------------------------- */
/*  Petición de plantillas registrando las navegaciones en el history del navegador  */
/* --------------------------------------------------------------------------------- */
function getPlantillasConHistoryHash() {
    const main = document.querySelector('main')

    /* ---------------------------------------------- */
    /*         Carga de la página de inicio           */ 
    /* ---------------------------------------------- */
    const id = location.hash.slice(1)
    marcarLink(id)

    const archivo = getNombreArchivo(id)
    const xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            const plantilla = xhr.response
            main.innerHTML = plantilla
        }
    })

    /* ---------------------------------------------- */
    /*   Carga dinámica de las vistas de navegación   */ 
    /* ---------------------------------------------- */
    const links = document.querySelectorAll('a')
    //console.log(links)

    links.forEach( link => {
        //console.log(link)

        link.addEventListener('click', e => {
            e.preventDefault()

            const id = link.id
            location.hash = id
            //console.log('Click!', id)
        })
    })

    window.addEventListener('hashchange', () => {
        //console.warn('Cambió el hash(#) en la url')

        const id = location.hash.slice(1)
        marcarLink(id)
        //console.log(id)

        const archivo = getNombreArchivo(id)
        //console.warn(archivo)
        const xhr = ajax(archivo)
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                const plantilla = xhr.response
                //console.log(plantilla)
                main.innerHTML = plantilla
            }
        })
    })
}

function start() {
    /* ---------------------------------------------- */
    /*         Carga de la barra de navegación        */ 
    /* ---------------------------------------------- */
    const header = document.querySelector('header')

    const archivo = getNombreArchivo('navbar')
    const xhr = ajax(archivo)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            const plantilla = xhr.response
            header.innerHTML = plantilla

            //getPlantillasSinHistory()
            getPlantillasConHistoryHash()
        }
    })
}

start()