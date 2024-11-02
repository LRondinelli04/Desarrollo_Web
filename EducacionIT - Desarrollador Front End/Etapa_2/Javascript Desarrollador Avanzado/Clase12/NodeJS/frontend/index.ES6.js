const sumar = (a,b) => a + b 

class Persona {
	constructor(nombre) {
    	this.nombre = nombre
    }
  
  	getNombre() {
    	return this.nombre
    }
}

let n1 = 20, n2 = 25

console.log(`La suma de ${n1} más ${n2} es ${sumar(n1,n2)}`)

const persona1 = new Persona('Juan')
const persona2 = new Persona('Ana')

console.log(persona1.getNombre())
console.log(persona2.getNombre())