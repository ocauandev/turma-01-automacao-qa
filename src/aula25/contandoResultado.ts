const resultados = ["Passou", "Falhou", "Passou","Passou", "Falhou"];

let aprovados = 0;
let reprovados = 0;


for(let i = 0; i < resultados.length; i++)
{
    if(resultados[i] === "Passou"){
        aprovados = aprovados + 1;
    }
    else{
        reprovados = aprovados + 1;
    }
}

console.log(`Aprovados: ${aprovados},Reprovados: ${reprovados}`);