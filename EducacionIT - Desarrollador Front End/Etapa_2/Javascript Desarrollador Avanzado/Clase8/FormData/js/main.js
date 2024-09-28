console.warn( document.querySelector('title').textContent )


function repreContenidoFormData(data) {
    //console.log(data)

    const keys = data.keys()
    //console.log(keys)
    /* console.log(keys.next())
    console.log(keys.next())
    console.log(keys.next()) */


    const values = data.values()
    //console.log(values)
    /* console.log(values.next())
    console.log(values.next())
    console.log(values.next()) */

    do {
        let clave = keys.next()
        let valor = values.next()
        if(clave.done || valor.done) break
        console.log(clave.value, valor.value)
    }
    while(true)
}


/* ---------------------------------------------------------- */
/* Uso del FormData en formularios (modo automático de carga) */
/* ---------------------------------------------------------- */
const form0 = document.querySelectorAll('form')[0]

form0.addEventListener('submit', e => {
    e.preventDefault()

    const data = new FormData(form0)
    repreContenidoFormData(data)
    enviarFormDataAjax('http://localhost:8080/datos',data)
})

/* ----------------------------------------------------------------- */
/* Uso del FormData con carga manual de datos (modo manual de carga) */
/* ----------------------------------------------------------------- */
const form1 = document.querySelectorAll('form')[1]

form1.addEventListener('submit', e => {
    e.preventDefault()

    const input = form1[0]
    const archivo = input.files[0]
    //console.log(archivo)

    const data = new FormData()
    data.append('archivo', archivo)

    //repreContenidoFormData(data)
    enviarFormDataAjax('http://localhost:8080/upload',data)
})


/* --------------------------------------------------------- */
/*      Uso de XHR para enviar información al servidor       */
/* --------------------------------------------------------- */
function enviarFormDataAjax(url, data) {

    const xhr = new XMLHttpRequest()
    xhr.open('post', url)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            console.log(xhr.response)
        }
        else {
            console.error('Error al enviar los datos', xhr.status)
        }
    })
    xhr.addEventListener('error', e => {
        console.error('Error en la comunicación de envío de datos', e)
    })
    xhr.upload.addEventListener('progress', e => {
        if(e.lengthComputable) {
            let porcentaje = parseInt((e.loaded * 100) / e.total)
            console.log('Porcentaje de envío:', porcentaje+'%')
        }
    })
    xhr.setRequestHeader('firma','acb123')
    xhr.send(data)
}