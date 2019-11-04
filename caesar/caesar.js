const caesar = function(string, shift) {
    let strArray = string.split("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let encryptedArray = [];

    strArray.forEach(element => {
        if (element.toLowerCase() !== element.toUpperCase()){//letter check
            lowerLetter = element.toLowerCase(); // lowercase element to match with alphabet array
            alphaIndex = alphabet.findIndex(letter => letter==lowerLetter); //lookup index of element in alphabet
            shiftedIndex = alphaIndex+shift; //cipher shift
            if (shiftedIndex >= 26){//takes +ve shiftedIndex and adjusts by wrapping alphabet forward
                while (shiftedIndex>=26){
                    shiftedIndex -= 26;
                }
            } else if (shiftedIndex < 0) {//takes -ve shiftedIndex and adjusts by wrapping alphabet backward
                while (shiftedIndex<0){
                    shiftedIndex += 26;
                }
            }
            shiftedLetter = alphabet[shiftedIndex] // takes shifted value from alphabet
            if (element == element.toUpperCase()){ //to match case with original string
                encryptedArray.push(shiftedLetter.toUpperCase());
            } else {
                encryptedArray.push(shiftedLetter);
            }

        } else {
            encryptedArray.push(element); //pushed element if not a letter - maintains punctuation
        }
    
    });
    return encryptedArray.join(""); //turns encrypted array into string
}

module.exports = caesar
