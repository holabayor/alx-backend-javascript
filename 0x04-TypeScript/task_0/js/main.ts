interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Julien Barbier",
    lastName: "Guillaume",
    age: 25,
    location: "Paris"
}

const student2: Student = {
    firstName: "Woli",
    lastName: "Arole",
    age: 35,
    location: "Lagos"
}

const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement("table");
document.body.appendChild(table);

studentsList.forEach(student => {
    const tableRow = table.insertRow();
    tableRow.insertCell().textContent = student.firstName;
    tableRow.insertCell().textContent = student.location;
})