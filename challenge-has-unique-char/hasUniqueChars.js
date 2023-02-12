const uniqueChars = (word) => {
    const charsSet = new Set();
    
    for(let i = 0; i < word.length; i++) {
        charsSet.add(word[i])
    }
    
    if(charsSet.size === word.length) {
        console.log(true)
    } else {
        console.log(false)
    }
}

uniqueChars("moonday")