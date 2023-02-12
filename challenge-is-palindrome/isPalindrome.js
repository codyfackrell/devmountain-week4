// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter.

const isPalindrome = (word) => {
    let backward = word.split("").reverse().join("")
    
    console.log(word === backward)
  }
  
  isPalindrome("Racecar")
  isPalindrome("racecar")
  isPalindrome("noon")
  isPalindrome("hello")

