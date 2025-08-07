// let b: boolean = true;
// b = false;
// console.log(b);

const numbers: number[] = [1,2,3,45];
const characters = ['a','b','c'];

interface User {
    id: number;
    name: string;
    age: number;
}

interface Employee extends User {
    salary: number;
}


type Student = {
    id: number;
    name: string;
    age: number;
};

const user: {name: string } = {
    name: "Nguyen Van A",

}
console.log(user);
// const point: {x: number; y: number} = {

// }