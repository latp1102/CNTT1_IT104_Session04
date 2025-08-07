"use strict";
const fullName = "Nguyễn Văn A";
const age = 20;
const isMarried = true;
const user = null;
// Khai báo hàm
const sum = (a, b) => {
    return a + b;
};
const logger = () => {
    console.log("Logger");
};
// Khai báo kiểu enum
var Gender;
(function (Gender) {
    Gender["MALE"] = "MALE";
    Gender["FEMALE"] = "FEMALE";
    Gender["OTHER"] = "OTHER";
})(Gender || (Gender = {}));
const student = {
    id: 1,
    name: "Nguyễn Văn A",
    age: 20,
};
const listStudent = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        age: 20,
        scores: [
            {
                subjectName: "Lập trình Frontend với React",
                point: 10,
                credit: 5,
            },
        ],
        gender: Gender.MALE,
    },
    {
        id: 2,
        name: "Nguyễn Văn B",
        age: 30,
    },
    {
        id: 3,
    },
];
console.log("FullName: ", fullName);
