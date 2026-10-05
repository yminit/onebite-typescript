// 타입스크립트의 클래스
const employee = {
    name: "이정환",
    age: 27,
    position: "developer",
    work() {
        console.log("일함");
    },
};
class Employee {
    name;
    age;
    position;
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    work() {
        console.log("일함");
    }
}
class ExecutiveOfficer extends Employee {
    officeNumber;
    constructor(name, age, position, officeNumber) {
        super(name, age, position);
        this.officeNumber = officeNumber;
    }
}
const employeeB = new Employee("이정환", 27, "개발자");
console.log(employeeB);
const employeeC = {
    name: "",
    age: 0,
    position: "",
    work() { },
};
export {};
