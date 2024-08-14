let numeros =[];

for (let i=0; i<15; i++){
    numeros.push(prompt("ingrese 15 numeros"));
}
numeros.sort((a,b)=>a-b);
document.write(numeros.join(' '));