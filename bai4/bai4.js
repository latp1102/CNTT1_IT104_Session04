var handleUnionType = function (input) {
    if (typeof input === 'string') {
        console.log("".concat(input.length, " k\u00FD t\u1EF1"));
    }
    else if (typeof input === 'number') {
        if (input % 2 === 0) {
            console.log('là số chẵn');
        }
        else {
            console.log('là số lẻ');
        }
    }
};
handleUnionType("demo123");
handleUnionType(10);
handleUnionType(9);
