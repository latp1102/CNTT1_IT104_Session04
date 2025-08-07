var processInput = function (input) {
    if (typeof input === 'string') {
        if (/^\d+$/.test(input)) {
            var num = Number(input);
            console.log(num * num);
        }
        else {
            var letterCount = input.replace(/[^a-zA-Z]/g, '').length;
            console.log("".concat(letterCount, " k\u00FD t\u1EF1 ch\u1EEF c\u00E1i"));
        }
    }
    else if (typeof input === 'number') {
        if (isPrime(input)) {
            console.log("số nguyên tố");
        }
        else {
            console.log("ko pải số nguyên tố");
        }
    }
    else if (typeof input === 'boolean') {
        if (input) {
            console.log("giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("giá trị là false - dừng xử lý");
        }
    }
};
var isPrime = function (num) {
    if (num <= 1)
        return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
processInput("abc123");
processInput("123");
processInput(123);
processInput(true);
processInput(false);
