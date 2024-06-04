// Tipos de datos en TypeScript
/*
! String
* Comillas dobles:
* const str1: string = "Hola mundo";
*
* Comillas simples:
* const str2: string = 'Hola mundo';
*
* Template literals (backticks):
* const nombre: string = 'Juan';
* const edad: number = 30;
*
* const str3: string = `Mi nombre es ${nombre} y tengo ${edad} años`;
*
! NUMEROS (Number)
* Numeros enteros
* const num1: number = 10;
*
* Notacion exponencial
* const num2: number = 2.5e3; // 2.5 * 10^3 = 2500
*
* Notacion exponencial negativa
* const num3: number = 2.5e-3; // 2.5 * 10^-3 = 0.0025
*
* Hexadecimales (base 16)
* const num4: number = 0xA; // valor decimal: 10
*
* Binarios (base 2)
* const num5: number = 0b1010; // valor decimal: 10
*
* Octales (base 8)
* const num6: number = 0o12; // valor decimal: 10
*
! BOOLEANOS (Boolean)
*
* Valor booleano true:
* const bool1: boolean = true;
*
* Valor booleano false:
* const bool2: boolean = false;
*
! UNDEFINED
* Declaracion de una variable con valor undefined
* let variableUndefined: undefined;
*
* Asignacion de valor undefined
* variableUndefined = undefined;
*
! NULL
* Declaracion de una variable con valor null
* let variableNull: null;
*
* Asignacion de valor null
* variableNull = null;
*
! OBJETO
* Declaracion de un objeto
* const programador = {
*  nombre: 'Juan',
* edad: 30,
* lenguajes: ['JavaScript', 'TypeScript', 'Python']
* }
*
! ARRAY
* Arreglo de numeros:
* const numeros: number[] = [1, 2, 3, 4, 5];
*
* Arreglo de cadenas de texto:
* const frutas: string[] = ['manzana', 'pera', 'uva', 'fresa'];
*
* Arreglo de booleanos:
* const booleanos: boolean[] = [true, false, true, true];
*
* Arreglo de objetos:
*   const programadores: {nombre: string, edad: number}[] = [
*       {nombre: 'Juan', edad: 30},
*       {nombre: 'Maria', edad: 25},
*       {nombre: 'Pedro', edad: 35}
*   ];
*
! ENUMERADOS (ENUM)
* Definicion de un enum para dias de la semana
*   enum DiasSemana {
*       Lunes,
*       Martes,
*       Miercoles,
*       Jueves,
*       Viernes,
*       Sabado,
*       Domingo
*   }
*
* Enum con valores de cadena (String Enums): // Esto sirve para que los valores sean mas descriptivos
*   enum Colores {
*      Rojo = 'Rojo',
*      Verde = 'Verde',
*      Azul = 'Azul'
*   }
*
! FUNCIONES
* Declaracion de una funcion con tipado explicito:
*   function sumar(a: number, b: number): number {
*      return a + b;
*  }
*
* Funciones flecha con retorno implicito (inferido por TypeScript):
*  const restar = (a: number, b: number) => a - b;
*  const dividir = (a: number, b: number) => a / b;
*
* Funciones con parametros opcionales:
* function saludar(nombre: string, mensaje?: string): string {
*  if (mensaje) {
*     return `Hola ${nombre}, ${mensaje}`;
* } else {
*    return `Hola ${nombre}`;
* }
*
* Funciones con parametros por defecto:
* function saludar(nombre: string, mensaje: string = 'buen dia'): string {
* return `Hola ${nombre}, ${mensaje}`;
* }
*
! CLASES
* Declaracion de una clase:
* class Persona {
*   nombre: string;
*   edad: number;
*
*   constructor(nombre: string, edad: number) {
*       this.nombre = nombre;
*       this.edad = edad;
*   }
*
*   saludar() {
*       return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
*   }
* }
*
! INTERFACES
* Interface basica:
*   interface Persona {
*       nombre: string;
*       edad: number;
*   }
*
* Interface con propiedades opcionales:
*  interface Producto {
*     nombre: string;
*     precio: number;
*     descripcion?: string;
*   }
*
* Interface para funciones:
*  interface Comprador {
*    (a:number, b:number): boolean;
*   }
*
* Interface para clases (class interfaces):
*   interface Persona {
*       nombre: string;
*       edad: number;
*       saludar(): void;
*   }
*
! TYPES
* Type basico:
*  type Numero = number;
*
* Type basico Objeto literal:
*   type Persona1 = {
*       nombre: string;
*       edad: number;
*   }
*
* Type con union de types:
*  type Nombre = String | null;
*
* Type con propiedades opcionales:
*   type Producto = {
*       nombre: string;
*       precio: number;
*       descripcion?: string;
*   }
*
* Type para funciones:
*  type Comprador1 = {
*       (a:number, b:number): boolean;
*  };
*
* Type para clases (class types):
*  type Persona2 = {
*       nombre: string;
*       edad: number;
*       saludar(): void;
*   }
*
*
*
*
*
*
*
*
*
*/
