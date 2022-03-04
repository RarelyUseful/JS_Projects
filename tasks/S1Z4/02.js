const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)



function reverseNum(num) {
	return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * Math.sign(num)
  )
}

console.log(reversedNum(-543.21))
console.log(reversedNum(23000000))
console.log(reversedNum(0.1234))
console.log(reversedNum(543.21))

