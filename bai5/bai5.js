var printStaffInfo = function (staff) {
    console.log("nh\u00E2n vi\u00EAn: ".concat(staff.name, " ").concat(staff.age, ", m\u00E3 nh\u00E2n vi\u00EAn: ").concat(staff.employee, " - ph\u00F2ng ").concat(staff.department, " k\u1EBF to\u00E1n"));
};
var staff = {
    name: "Nguyễn Văn A",
    age: 28,
    employee: "EMP001",
    department: "kế toán",
};
printStaffInfo(staff);
