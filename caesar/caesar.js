const caesar = function(string, shift) {
    let strArray = string.split("");
    let encryptedArray = strArray.map(char => shiftChar(char, shift));
    return encryptedArray.join("");
}

function shiftChar(char, shift){
    let code = char.charCodeAt(0);
    let shiftedCode = shiftCode(code, shift);
    return String.fromCharCode(shiftedCode);
}

function shiftCode(code, shift) {
    let shiftedCode = code + shift;
    if (code <=90 && code >= 65) {
        return wrap(shiftedCode, "upper");
    } else if (code >= 97 && code <= 122){
        return wrap(shiftedCode, "lower");
    } else {
        return code;
    }
}

function wrap(shiftedCode, charCase) {
    if (charCase == "upper"){
        if (shiftedCode < 65){
            while (shiftedCode<65){
                shiftedCode += 26;
            }
        } else if (shiftedCode > 90){
            while (shiftedCode>90){
                shiftedCode -= 26;
            }
        }
    } else if (charCase == "lower"){
        if (shiftedCode < 97){
            while (shiftedCode<97){
                shiftedCode += 26;
            }
        } else if (shiftedCode > 122){
            while (shiftedCode>122){
                shiftedCode -= 26;
            }
        }
    }
    return shiftedCode;
}

module.exports = caesar
