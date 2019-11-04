const repeatString = function(str, times) {
    let repeatedStr = "";
    if (times < 0) {
        return "ERROR"
    } else {
    
    for (let i = 1; i<=times;i++){
        repeatedStr += str;
    }
    return repeatedStr;
    }
}

module.exports = repeatString
