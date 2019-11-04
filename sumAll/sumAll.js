const sumAll = function(n1,n2) {
    var total = 0;
    if (n1<0 || n2<0 || typeof n1 !=="number" || typeof n2 !== "number") {
        return "ERROR";
    } else if (n1 > n2) {
        return total = (n1*(n1+1))/2;
    } else {
        return total = (n2*(n2+1))/2;
    }

    
}

module.exports = sumAll
