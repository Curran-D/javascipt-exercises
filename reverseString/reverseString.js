const reverseString = function(str) {
    let arr = str.split("")
    let revArr = [];
    for (let i = arr.length - 1; i >=0; i--){
        revArr.push(arr[i])
    }
    return revArr.join("");
}

module.exports = reverseString
