"use strict";

function Student (name, surname, yearOfBirth, grades = []) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.grades = grades;
    this.activity = [];
}

// present = true
Student.prototype.present = function (grades) {
    if (this.activity.length <= 25) {
        this.activity.push(true);
    }
        // Мария, надо было делать алерт/консоль для ошибки если больше 25? или в этот раз лишнее?
}
// absent = false
Student.prototype.absent = function (grades) {
    if (this.activity.length <= 25) {
        this.activity.push(false);
    }
}

Student.prototype.getAge = function () {
    const nowYear = 2025;
    const age = nowYear - this.yearOfBirth;
    return `вік: ${age}`;
}

Student.prototype.summary = function () {
    let resultOfGrades = this.grades.reduce((sum, number) => sum + number, 0) / this.grades.length;
    let resultOfVisits = this.activity.filter(num => num).length / this.activity.length;

    if (resultOfVisits > 0.9 && resultOfGrades > 90) {
        return `Молодець ${this.name}!`;
    }
    if (0.9 < resultOfVisits && resultOfGrades <= 90 || 0.9 >= resultOfVisits && resultOfGrades >= 90) {
        return `Добре, але можна краще ${this.name}`;
    }
    if (0.9 > resultOfVisits && resultOfGrades < 90) {
        return `Редиска ${this.name}!`;
    }
}

const student1 = new Student('Maria',  'M.', 1997, [99, 99, 99, 99, 99]);
const student2 = new Student('Slavik',  'Gemay', 1993, [80, 80, 80]);
const student3 = new Student('Vasya',  'Bad', 2000, [60, 60, 60]);

// student1.present().present().present().present().present() - хотел так шоб короче - не вышло

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.getAge();
student1.summary();
// console.log(student1.getAge());
console.log(student1.summary());

student2.present();
student2.present();
student2.present();
student2.present();
student2.summary();
student2.getAge();
// console.log(student2.getAge());
console.log(student2.summary());

student3.present();
student3.present();
student3.present();
student3.absent();
student3.summary();
student3.getAge();
// console.log(student3.getAge());
console.log(student3.summary());























