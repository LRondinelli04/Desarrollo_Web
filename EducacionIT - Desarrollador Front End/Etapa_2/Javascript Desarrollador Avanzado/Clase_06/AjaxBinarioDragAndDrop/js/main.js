console.warn( document.querySelector('title').textContent )

function cargarImagen(imagen) {
    const img = document.querySelector('img')
    const progress = document.querySelector('progress')
    const span = document.querySelector('span')

    let porcentaje = 0

    img.src = ''
    progress.value = 0
    span.innerText = porcentaje + '%'

    const xhr = new XMLHttpRequest()
    
    const urlSinCache = imagen + '?' + Date.now()
    //console.log(urlSinCache)
    xhr.open('get', urlSinCache)

    xhr.responseType = 'blob'
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            const imagenBlob = xhr.response
            //console.log(imagenBlob)

            const urlImg = URL.createObjectURL(imagenBlob)
            //console.log(urlImg)
            //p.innerHTML = imagen

            //const img = document.createElement('img')
            img.src = urlImg
            //document.body.appendChild(img)

            /* porcentaje = 100
            progress.value = porcentaje
            span.innerText = porcentaje + '%' */
        }
    })
    xhr.addEventListener('progress', e => {
        //console.log('progress', e)

        if(e.lengthComputable) {
            porcentaje = parseInt((e.loaded * 100) / e.total)
            //console.log(porcentaje + '%')
            progress.value = porcentaje
            span.innerText = porcentaje + '%'
        }
    })

    xhr.send()
}

/* Carga de la imágen a través de drag and drop */

// ----- Configuración de los eventos de D&D ----
const drop = document.getElementById('drop')

drop.addEventListener('dragenter', e => {
    e.preventDefault()
    console.log('Estoy dentro del drop')
})

drop.addEventListener('dragleave', e => {
    e.preventDefault()
    console.log('Estoy fuera del drop')
})

drop.addEventListener('dragover', e => {
    e.preventDefault()
    console.log('Estoy encima del drop')
})

drop.addEventListener('drop', e => {
    e.preventDefault()
    console.log('Suelto el recurso en la zona de drop', e)

    /* const imagen = e.dataTransfer.files[0]
    console.log(imagen) */

    const imagen = e.dataTransfer.files[0].name
    const type = e.dataTransfer.files[0].type

    if(type.includes('image')) {
        cargarImagen(imagen)
    }
    else {
        console.error('El archivo seleccionado debe ser una imágen')
    }
})

// Cancelamos el eventos autómatico de D&D sobre el documento web
document.addEventListener('dragenter', e => e.preventDefault())
document.addEventListener('dragleave', e => e.preventDefault())
document.addEventListener('dragover', e => e.preventDefault())
document.addEventListener('drop', e => e.preventDefault())


/* Carga de la imágen a través de un formulario */
/* const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    const input = form[0]

    const imagen = input.files[0].name
    const type = input.files[0].type

    if(type.includes('image')) {
        cargarImagen(imagen)
    }
    else {
        console.error('El archivo seleccionado debe ser una imágen')
    }
}) */
