const fibonacci = function(n) {
    let arr = [1,1];
    let num = Number(n);
    if (num <= 0){
        return "OOPS";
    }
    for (i = 2; i <= num; i++){
        arr.push((arr[i-1]+arr[i-2]));
    }
    return arr[num-1];
}

module.exports = fibonacci
