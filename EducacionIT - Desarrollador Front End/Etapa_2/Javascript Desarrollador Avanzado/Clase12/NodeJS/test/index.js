//const moment = require('moment')
import moment from 'moment'

console.log( moment().format('MMMM Do YYYY, h:mm:ss a') )

const operaciones = () => {
    var a = 15
    let b = 17
    const c = a + b

    return c
}

console.log(`El resultado de las operaciones da ${operaciones()}`)

