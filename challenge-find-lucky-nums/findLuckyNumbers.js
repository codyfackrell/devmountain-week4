// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// returns (3, 7)
// luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)


function luckyNumbers(num) {
  let possibleNums = [1,2,3,4,5,6,7,8,9,10]
  let numOutput = [];
  
    for(i = 1; i <= num; i++){
        let usedNum = Math.floor(Math.random() * possibleNums.length);
        numOutput.push(possibleNums[usedNum])
        possibleNums.splice(usedNum, 1)
    }
  
    console.log(numOutput)
  }
  
  luckyNumbers(6)