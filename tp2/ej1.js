let estudiantes=[];

for (let i=0; i<10; i++){
    estudiantes.push(prompt("ingrese el nombre del estudiante"));
}
estudiantes.sort();
document.write(estudiantes.join(' '));