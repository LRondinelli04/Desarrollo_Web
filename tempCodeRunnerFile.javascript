// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
  }
  
  // Función para restar dos números
  function restar(num1, num2) {
    return num1 - num2;
  }
  
  // Función para multiplicar dos números
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  // Función para dividir dos números
  function dividir(num1, num2) {
    // Verificar si el divisor es cero
    if (num2 === 0) {
      return "Error: No se puede dividir entre cero";
    }
    return num1 / num2;
  }

  console.log(sumar(5, 3)); // Output: 8
console.log(restar(10, 4)); // Output: 6
console.log(multiplicar(2, 6)); // Output: 12
console.log(dividir(10, 2)); // Output: 5
console.log(dividir(8, 0)); // Output: Error: No se puede dividir entre cero