const palindromes = function(word) {
    
    let processedWord = word.toLowerCase().replace(/[\W]/g,"");
    let reversedWord = processedWord.split("").reverse().join("");

    return (processedWord == reversedWord);
    
}

module.exports = palindromes
