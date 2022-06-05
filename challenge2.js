function findDigits(n) { // 1234
    // Write your code here
    var result = 0;
    var str_n = n.toString();
    for(let i = 0; i<str_n.length;i++){
        var char = str_n[i];
        var num = parseInt(char);
        if(n % num == 0 && num !==0){result++}
    }
    return result;
}

console.log(findDigits(1111));