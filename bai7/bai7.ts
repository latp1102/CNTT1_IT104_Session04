const processInput = (input: string | number | boolean): void => {
    if(typeof input === 'string'){
        if(/^\d+$/.test(input)){
            const num = Number(input);
        } else {
            const letterCount = input.replace(/[^a-zA-Z]/g, '').length;
            console.log(`${letterCount} ký tự chữ cái`);
        }
    } else if (typeof input === 'number') {
        if (isPrime(input)) {
            console.log("số nguyên tố");
        } else {
            console.log("ko pải số nguyên tố");
        }
    } else if (typeof input === 'boolean') {
        if (input) {
            console.log("giá trị là true - tiến hành xử lý");
        } else {
            console.log("giá trị là false - dừng xử lý");
        }
    }
}

const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

processInput("abc123");
processInput("123");
processInput(123);
processInput(true);
processInput(false);