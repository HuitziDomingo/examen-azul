export function Triangular(number) {
    let serie = []
    let sum = 0

    for (let i = 1; i <= number; i++) {
        sum += i
        serie.push(sum)
    }

    return serie
}