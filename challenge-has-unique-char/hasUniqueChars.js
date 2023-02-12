// Given a word, return 'true' if that word contains only unique characters. Return 'false' otherwise.

const uniqueChars = (word) => {
    const charsSet = new Set();
    
    for(let i = 0; i < word.length; i++) {
        charsSet.add(word[i])
    }
    
    console.log(charsSet.size === word.length) 
}

uniqueChars("moonday")
uniqueChars("monday")
