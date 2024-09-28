console.warn( document.querySelector('title').innerText )

const url = 'https://jsonplaceholder.typicode.com/posts/'


async function opcionesPeticionAjax(id) {
    /* ------------------------ */
    /* OPCIÓN 1: XMLHttpRequest */
    /* ------------------------ */
    const xhr = new XMLHttpRequest()
    xhr.open('get', url+id)
    xhr.addEventListener('load', () => {
        if(xhr.status == 200) {
            const respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest (xhr)', respuesta)
        }
        else {
            console.error('Error XMLHttpRequest (xhr) status http:', xhr.status)
        }
    })
    xhr.addEventListener('error', e => {
        console.error('Error XMLHttpRequest (xhr):', e)
    })
    xhr.send()

    /* ------------------------ */
    /*      OPCIÓN 2: fetch     */
    /* ------------------------ */
    // a) then/catch
    fetch(url+id)
        .then(response => {
            //console.log(response)
            if(!response.ok) throw 'Error en status: ' + response.status
            return response.json()
        })
        .then(respuesta => console.log('fetch (then/catch)', respuesta))
        .catch(error => console.error('Error fetch (then/catch):', error))

    // b) async/await
    try {
        const response = await fetch(url+id)
        //console.log(response)
        if(!response.ok) throw 'Error en status: ' + response.status
        const respuesta = await response.json()
        console.log('fetch (async/await)', respuesta)
    }
    catch(error) {
        console.error('Error fetch (async/await):', error)
    }

    /* ------------------------ */
    /*      OPCIÓN 3: axios     */
    /* ------------------------ */
    //https://axios-http.com/es/
    //https://axios-http.com/es/docs/intro
}


//opcionesPeticionAjax(7)


/* ---------------------------------------------------------- */
/*     Peticiones asincrónicas anidadas utilizando fetch      */
/* ---------------------------------------------------------- */
function getPostApiJSONPlaceHolderFetch(id) {
    return fetch(url+id).then(response => {
        //console.log(response)
        if(!response.ok) throw 'Error en status: ' + response.status
        return response.json()
    })
}

/* ---- fetch anidado con interface then/catch --- */
function getPostsApiJSONPlaceHolderFetchTC() {
    
    getPostApiJSONPlaceHolderFetch(1)
        .then( respuesta => {
            console.log(respuesta)
            return getPostApiJSONPlaceHolderFetch(2)
        })
        .then( respuesta => {
            console.log(respuesta)
            return getPostApiJSONPlaceHolderFetch(3)
        })
        .then( respuesta => {
            console.log(respuesta)
            return getPostApiJSONPlaceHolderFetch(4)
        })
        .then( respuesta => {
            console.log(respuesta)
            return getPostApiJSONPlaceHolderFetch(5)
        })
        .then( respuesta => {
            console.log(respuesta)
        })
        .catch(error => console.error('Error en fetch anidado T/C', error))
}

//getPostsApiJSONPlaceHolderFetchTC()


/* ---- fetch anidado con interface async/await --- */
async function getPostsApiJSONPlaceHolderFetchAA() {

    try {
        let respuesta = await getPostApiJSONPlaceHolderFetch(1)
        console.log(respuesta)

        respuesta = await getPostApiJSONPlaceHolderFetch(2)
        console.log(respuesta)

        respuesta = await getPostApiJSONPlaceHolderFetch(3)
        console.log(respuesta)

        respuesta = await getPostApiJSONPlaceHolderFetch(4)
        console.log(respuesta)

        respuesta = await getPostApiJSONPlaceHolderFetch(5)
        console.log(respuesta)
    }
    catch(error) {
        console.error('Error en fetch anidado A/A', error)
    }
}

getPostsApiJSONPlaceHolderFetchAA()

