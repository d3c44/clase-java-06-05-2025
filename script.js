const students=[];
document.getElementById("studentForm").addEventListener("submit",function (e){
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const lastName=document.getElementById("lastName").value.trim();
    const fecha=document.getElementById("fecha").value.trim();
    const grade=parseFloat(document.getElementById("grade").value);

    if(!name || !lastName ||!fecha || isNaN(grade)|| grade<1 || grade>7){
        alert("Error de datos")
        return
    }
    // guardar los datos en array



    const student={name,lastName,fecha,grade}

    students.push(student)

    console.log(student)
    // console.log(students)
    addStudentToTable(student)

ñ






});
const tableBody=document.querySelector("#studentsTabla tbody");
function addStudentToTable(student){
    const row=document.createElement("tr")
    row.innerHTML= 
    `<td>${student.name}</td>
    <td>${student.lastName}</td>
     <td>${student.fecha}</td>
    <td>${student.grade}</td>`
tableBody.appendChild(row);

}
