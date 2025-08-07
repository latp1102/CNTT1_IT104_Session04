interface Person {
    name: string;
    age: number;
}

interface Employee {
    employee: string;
    department: string;
}

type StaffMember = Person & Employee;
const printStaffInfo = (staff: StaffMember): void => {
    console.log(`nhân viên: ${staff.name} ${staff.age}, mã nhân viên: ${staff.employee} - phòng ${staff.department} kế toán`)
}
const staff = {
    name: "Nguyễn Văn A",
    age: 28,
    employee: "EMP001",
    department: "kế toán",
}
printStaffInfo(staff);