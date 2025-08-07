interface Student {
    name: string;
    age: number;
    email: string;
}

const listStudent = (student: Student):void => {
    console.log(`Tôi tên la ${student.name}, tôi ${student.age} tuổi và email ${student.email}`);   
}

const studentList = {
    name: "P",
    age: 19,
    email: "p@gmail.com"
}

listStudent(studentList);