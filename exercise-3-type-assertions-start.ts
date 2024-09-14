function getPopulation(): number {
    return 69_950_850;  // Devuelve un número
}

// No necesitamos una aserción de tipo ya que la función ahora devuelve 'number'
const population = getPopulation();

// Remover la línea incorrecta, ya que 'toUpperCase' no es aplicable a números
// console.log(population.toUpperCase()); // Removido

// Esto es correcto, porque estamos multiplicando un número
console.log(population * 2);

// ----

export {};
