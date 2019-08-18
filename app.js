const readLineSync = require('readline-sync');
const fs = require('fs')

let fileContent = fs.readFileSync('./data.json')
let students = JSON.parse(fileContent);
for (let student of students) {
    console.log(student.name, student.age)
}

function showOption() {
    const options = ["1.List all students", "2.Create a new student", "3.Save and Exit","4.Modification"];
    for (let option of options) {
        console.log(option)
    }
    const option = readLineSync.question('Which option? >  ');
    switch (option) {
        case "1":
            listAllStudents();
            showOption();
        case "2":
            createNewStudents();
            showOption();
        case "3":
            break;
        case "4":
            modification();
            showOption();
        default:
            console.log("Wrong Option, Plese select again ...");
            showOption();
    }
}

function listAllStudents() {
    for (let student of students) {
        console.log(student.name, student.age)
    }
}

function modification() {
    for (let i = 0; i <students.length; i++) {
        console.log(i,students[i].name)
    }
    const studentDelete = readLineSync.question("which user you want modify > ")
    const nameModi = readLineSync.question("Which name change > ");
    const ageModi = readLineSync.question("Which age change >")
    students[studentDelete].name = nameModi;
    students[studentDelete].age = ageModi;
    fs.writeFileSync("./data.json", JSON.stringify(students));
}

function createNewStudents() {
    let name = readLineSync.question("what is name of studnet > ");
    let age = readLineSync.question("what is the age of studnet > ");
    let newStudent = {
        name: name,
        age: age
    };
    students.push(newStudent);
    fs.writeFileSync("./data.json", JSON.stringify(students));
}



function main() {
    showOption();
}


main()