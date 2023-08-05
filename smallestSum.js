// Find the smallest integer that is evenly divisable by all the numbers up to 20
// Cycle through numbers in the 20 times table and check one by one if they are divisable by the other numbers

const smallestSum = (limit) => {
    let numberRange = []
    for (let i = 1; i <= limit; i ++) {
        numberRange.push(i)
    }
    for (let i = 0; i < numberRange.length; i ++) {
        numberRange = numberRange.filter((number) => number === numberRange[i] || numberRange[i] % number !== 0)
    }
    let currentValue = limit
    let correctValueFound = false
    while (!correctValueFound) {
        let isCorrect = true
        for (let i = 0; i < numberRange.length; i ++) {
            if (currentValue % numberRange[i] !== 0) {
                isCorrect = false
                break
            }
        }
        if (isCorrect) {
            correctValueFound = true
        } else {
            currentValue += limit
        }
    }
    return currentValue
}

console.log(smallestSum(10))
console.log(smallestSum(20))
