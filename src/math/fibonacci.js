export function createFibonacci(number, limit) {
    let serie = [number]; // Inicia la serie con el número dado
    let a = 0
    let b = number

    while (b <= limit) { // Se puede modificar el límite superior según se desee
        let next = a + b
        a = b
        b = next
        serie.push(next)
    }

    return serie
}