const students = [];

document.getElementById("studentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const fecha = document.getElementById("fecha").value.trim();
    const grade = parseFloat(document.getElementById("grade").value);

    if (!name || !lastName || !fecha || isNaN(grade) || grade < 1 || grade > 7) {
        alert("Error de datos");
        return;
    }

    const student = { name, lastName, fecha, grade };
    students.push(student);

    // Calcular promedio general
    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total += students[i].grade;
    }
    const promedioGeneral = total / students.length;

    console.log("Estudiante agregado:", student);
    console.log("Promedio general de notas:", promedioGeneral.toFixed(2));

    addStudentToTable(student, promedioGeneral);
});

const tableBody = document.querySelector("#studentsTabla tbody");

function addStudentToTable(student, promedioGeneral) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.lastName}</td>
        <td>${student.fecha}</td>
        <td>${student.grade}</td>
        <td>${promedioGeneral.toFixed(2)}</td>
    `;
    tableBody.appendChild(row);
}