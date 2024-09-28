console.warn( document.querySelector('title').innerText )

/* https://jsonplaceholder.typicode.com/ */

const urlCORS = 'https://jsonplaceholder.typicode.com/posts'
const urlNoCORS = 'https://en.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=namespaces&format=json'

// ------------------------------------
// CORS: Cross Origin Resources Sharing
// JSONP: JSON Padding
// ------------------------------------

const url = urlNoCORS
const xhr = new XMLHttpRequest()
xhr.open('get', url)

xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
        const respuesta = JSON.parse(xhr.response)
        
        console.warn(typeof respuesta)
        console.log(respuesta)
    }
    else {
        console.error('Error status http:', xhr.status)
    }
})

// detección de otros errores de xhr (error url ó CORS)
xhr.addEventListener('error', e => {
    console.error('Error xhr:', e)

    // ---------------- JSONP desde Javascript --------------------
    const script = document.createElement('script')
    script.src = url + '&callback=micallback'
    document.body.appendChild(script)
})

xhr.send()

function micallback(res) {
    console.log(res)
}
