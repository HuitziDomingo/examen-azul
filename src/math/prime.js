export function isPrime(number) {
    if (number < 2) { // Los números menores a 2 no son primos
        return 'no es primo'
    }
    for (let i = 2; i < number; i++) {
        if (number % i === 0) { // Si el número es divisible por otro número distinto de 1 y sí mismo, no es primo
            return 'no es primo'
        }
    }
    return number // Si no se encontró un divisor distinto de 1 y sí mismo, el número es primo
}