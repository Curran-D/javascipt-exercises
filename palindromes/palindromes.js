const palindromes = function(word) {
    let wordArray = word.split("");
    let revArr = [];
    wordArray.repl
    for (let i = wordArray.length - 1; i>=0; i--){
        revArr.push(wordArray[i]);
    }
    return (word == revArr.join(""));
}

module.exports = palindromes
