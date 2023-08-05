// find the sum of all multiples of 3 or 5 below 1000

// create an array to house multiples
// loop starting from 1 to 1000
// if i % 3 === 0 push it to the array
// if not, check if i % 5 === 0 and push it to the array
// finally, reduce the array to a single digit and return it

const threesAndFives = () => {
    const multiples = []
    for (let i = 1; i < 1000; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i)
        }
    }
    return multiples.reduce((total, currentValue) => total + currentValue, 0)
}

console.log(threesAndFives())