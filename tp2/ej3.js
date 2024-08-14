let arregloAzar=[]

for(let i=0;i<10;i++){
    arregloAzar[i]=Math.floor(Math.random()*10)
}
arregloAzar.sort((a,b)=>a-b);

document.write(arregloAzar.join(' '));
