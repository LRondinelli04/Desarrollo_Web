var clave = 'qwerty1234'

export function getClaveEncriptada() {
    return clave.split('').reverse().join('')
}

export function firmarTexto(texto) {
    return texto + '.' + parseInt(Math.random() * 10000)
}
