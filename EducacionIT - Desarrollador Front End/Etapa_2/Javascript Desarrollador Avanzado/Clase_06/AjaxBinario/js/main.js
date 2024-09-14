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

/* Carga de la imágen a través de un formulario */
const form = document.querySelector('form')
//const input = document.querySelector('form input')

form.addEventListener('submit', e => {
    e.preventDefault()

    /* const imagen = input.value
    cargarImagen(imagen) */

    /* console.log(form)
    console.dir(form) */

    const input = form[0]
    /* console.log(input)
    console.dir(input)
    console.dir(input.files)
    console.dir(input.files[0]) */

    //const imagen = input.value
    const imagen = input.files[0].name
    const type = input.files[0].type
    /* console.log(imagen)
    console.log(type) */

    if(type.includes('image')) {
        cargarImagen(imagen)
    }
    else {
        console.error('El archivo seleccionado debe ser una imágen')
    }
})
