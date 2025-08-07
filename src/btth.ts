const fullName: string = "Nguyễn Văn A";
const age: number = 20;
const isMarried: boolean = true;
const user: null = null;

// Khai báo hàm
const sum = (a: number, b: number): number => {
  return a + b;
};

const logger = (): void => {
  console.log("Logger");
};

// Khai báo kiểu enum
enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

interface Subject {
  subjectName: string;
  point: number;
  credit: number;
}

// Khai báo kiểu dữ liệu array, object
interface Student {
  id: number;
  name?: string;
  age?: number;
  scores?: Subject[];
  gender?: Gender;
}

const student: Student = {
  id: 1,
  name: "Nguyễn Văn A",
  age: 20,
};

const listStudent: Student[] = [
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