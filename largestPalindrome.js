// Find the largest palindrome that is the product of two three digit numbers

// Start from 999 and end at 100
// Multiply 999 by each number going down to 100
// In the next loop, lower it to 998 and keep going
// checking if result is palindrome
// convert the product into a string
// split the string into an array
// reverse and rejoin the array into a string
// compare the original product with the reversed product

const largestPalindrome = () => {
    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; i--) {
            let product = `${i * j}`
            let splitProduct = product.split("")
            splitProduct.reverse()
            let reversedProduct = splitProduct.join("")
            if (product === reversedProduct) {
                return +product
            }
        }
    }
}

console.log(largestPalindrome())