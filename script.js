const students=[];
document.getElementById("studentForm").addEventListener("submit",function (e){
    e.preventDefault();
    const name=document.getElementById("name").ariaValueMax.trim();
    const lastName=document.getElementById("lastName").ariaValueMax.trim();
    const grade=parseFloat(document.getElementById("grade").value);

    if(!name || !lastName || isNaN(grade)|| grade<1 || grade>7){
        alert("Error de datos")
        return
    }
    // guardar los datos en array



    const student={name,lastName,grade}

    students.push(student)






});
