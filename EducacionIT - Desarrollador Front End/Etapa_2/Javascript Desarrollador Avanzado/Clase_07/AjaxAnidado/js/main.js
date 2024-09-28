console.warn( document.querySelector('title').innerText )

const url = 'https://jsonplaceholder.typicode.com/posts/'


// -----------------------------------------------------------
//  Petición asincrónica por Ajax (información desordenada)
// -----------------------------------------------------------
function getPostApiJSONPlaceHolder(id) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url + id)

    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            const respuesta = JSON.parse(xhr.response)
            console.log(respuesta)
        }
        else {
            console.error('Error status http:', xhr.status)
        }
    })
    xhr.addEventListener('error', e => {
        console.error('Error xhr:', e)
    })
    xhr.send()
}

function getPostsApiJSONPlaceHolder() {
    console.log('comienzo de las peticiones')
    getPostApiJSONPlaceHolder(1)
    getPostApiJSONPlaceHolder(2)
    getPostApiJSONPlaceHolder(3)
    getPostApiJSONPlaceHolder(4)
    getPostApiJSONPlaceHolder(5)
    console.log('fin de las peticiones')
}

//getPostsApiJSONPlaceHolder()


// ----------------------------------------------------------------------------------------
//  Petición asincrónica por Ajax utilizando callbacks para anidar (información ordenada)
// ----------------------------------------------------------------------------------------
function getPostApiJSONPlaceHolderCb(id, cb) {
    const xhr = new XMLHttpRequest()
    xhr.open('get', url + id)

    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            const respuesta = JSON.parse(xhr.response)
            //console.log(respuesta)
            if(typeof cb == 'function') cb(respuesta)
        }
        else {
            console.error('Error status http:', xhr.status)
        }
    })
    xhr.addEventListener('error', e => {
        console.error('Error xhr:', e)
    })
    xhr.send()
}

function getPostsApiJSONPlaceHolderCb() {
    console.log('comienzo de las peticiones')

    // Callback hell ó infierno de callbacks ó pirámide de la perdición
    getPostApiJSONPlaceHolderCb(1, respuesta => {
        console.log(respuesta)
        getPostApiJSONPlaceHolderCb(2, respuesta => {
            console.log(respuesta)
            getPostApiJSONPlaceHolderCb(3, respuesta => {
                console.log(respuesta)
                getPostApiJSONPlaceHolderCb(4, respuesta => {
                    console.log(respuesta)
                    getPostApiJSONPlaceHolderCb(5, respuesta => {
                        console.log(respuesta)
                        console.log('fin de las peticiones')
                    })
                })
            })
        })
    })
}

//getPostsApiJSONPlaceHolderCb()


// ----------------------------------------------------------------------------------------
//  Petición asincrónica por Ajax utilizando promesas para anidar (información ordenada)
// ----------------------------------------------------------------------------------------
function getPostApiJSONPlaceHolderPromise(id) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('get', url + id)
    
        xhr.addEventListener('load', () => {
            if(xhr.status == 200) {
                const respuesta = JSON.parse(xhr.response)
                //console.log(respuesta)
                resolve(respuesta)
            }
            else {
                //console.error('Error status http:', xhr.status)
                const error = {
                    razon: 'Error status http',
                    status: xhr.status,
                    id // es igual a -> id: id
                }
                reject(error)
            }
        })
        xhr.addEventListener('error', e => {
            console.error('Error xhr:', e)
            const error = {
                razon: 'Error xhr',
                event: e,
                id // es igual a -> id: id
            }
            reject(error)
        })
        xhr.send()
    })
}


// ----------------------------------------------------------------------------
//   Peticiones Ajax anidadas utilizando promesas (con sintaxis then/catch)
// ----------------------------------------------------------------------------
function getPostsApiJSONPlaceHolderPromiseTC() {
    console.log('comienzo de las peticiones')

    getPostApiJSONPlaceHolderPromise(1)
        .then(respuesta => {
            console.log(respuesta)
            return getPostApiJSONPlaceHolderPromise(2)
        })
        .then(respuesta => {
            console.log(respuesta)
            return getPostApiJSONPlaceHolderPromise(3)
        })
        .then(respuesta => {
            console.log(respuesta)
            return getPostApiJSONPlaceHolderPromise(4)
        })
        .then(respuesta => {
            console.log(respuesta)
            return getPostApiJSONPlaceHolderPromise(5)
        })
        .then(respuesta => {
            console.log(respuesta)
            console.log('fin de las peticiones')
        })
        .catch(error => console.error('Error en petición promise:',error))
}

//getPostsApiJSONPlaceHolderPromiseTC()


// ----------------------------------------------------------------------------
//   Peticiones Ajax anidadas utilizando promesas (con sintaxis async/await)
// ----------------------------------------------------------------------------
//async function getPostsApiJSONPlaceHolderPromiseAA() {
//const getPostsApiJSONPlaceHolderPromiseAA = async function() {
const getPostsApiJSONPlaceHolderPromiseAA = async () => {
    console.log('comienzo de las peticiones')

    try {
        for(let id=1; id<=5; id++) {
            let respuesta = await getPostApiJSONPlaceHolderPromise(id)
            console.log(respuesta)
        }

        /* let respuesta = await getPostApiJSONPlaceHolderPromise(1)
        console.log(respuesta)
        
        respuesta = await getPostApiJSONPlaceHolderPromise(2)
        console.log(respuesta)
        
        respuesta = await getPostApiJSONPlaceHolderPromise(3)
        console.log(respuesta)
        
        respuesta = await getPostApiJSONPlaceHolderPromise(4)
        console.log(respuesta)
        
        respuesta = await getPostApiJSONPlaceHolderPromise(5)
        console.log(respuesta) */

        console.log('fin de las peticiones')
    }
    catch(error) {
        console.error('Error en petición promise:', error)
    }
}

getPostsApiJSONPlaceHolderPromiseAA()


// -------------------------------------------------------------
console.log('Otras tareas...')
