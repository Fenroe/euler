// What is the largest prime factor of 600851475143?

// Make a list for prime factors
// Copy the target number
// Find the smallest prime it's divisable by
// If it's prime already, add it to the list of prime factors and break out the loop
// Else, add the prime we found to the list and assign the target number to itself divided by the prime
// Keep doing this until the loop ends
// Return the last element as it is the largest

const largestPrimeFactor = (number) => {
    const primeFactors = []
    let divisableNumber = number
    let isFinished = false
    while (!isFinished) {
        for (let i = 2; i <= divisableNumber; i ++) {
            if (divisableNumber % i === 0) {
                let isPrime = true
                for (let j = 2; i < i; j ++) {
                    if (j !== i && i % j === 0) {
                        isPrime = false
                        break
                    }
                }
                if (isPrime) {
                    primeFactors.push(i)
                    if (i === divisableNumber) {
                        isFinished = true
                    } else {
                        divisableNumber /= i
                    }
                }
            }
        }
    }
    return primeFactors.pop()
}

console.log(largestPrimeFactor(600851475143))