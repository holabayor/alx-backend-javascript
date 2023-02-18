interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Julien",
    lastName: "Barbier",
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
    const tableRow: HTMLTableRowElement = table.insertRow();
    const firstNametableCell: HTMLTableCellElement = tableRow.insertCell();
    const locationtableCell: HTMLTableCellElement = tableRow.insertCell();
    firstNametableCell.innerHTML = student.firstName;
    locationtableCell.innerHTML = student.location;
})