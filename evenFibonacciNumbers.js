// Find the sum of even Fibonacci numbers whose values does not exceed four million

// Generate an array of Fibonacci numbers ending at or before 4 million
// Filter this array for only even numbers
// Reduce the array to a single number

const evenFibonacciNumbers = () => {
    const fibonacciNumbers = [0, 1]
    let latestNumber = 1
    while (latestNumber <= 4000000) {
        const newNumber = fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]
        fibonacciNumbers.push(newNumber)
        latestNumber = newNumber
    }
    const evenNumbers = fibonacciNumbers.filter((number) => number % 2 === 0)
    return evenNumbers.reduce((total, currentValue) => total + currentValue, 0)
}

console.log(evenFibonacciNumbers())