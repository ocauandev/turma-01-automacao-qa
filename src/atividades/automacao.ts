import PromptSync from "prompt-sync";

// array com 10 resultados com elementos "Automatizados" e "Não Automatizados"
const resultados = ["Automatizados", "Não Automatizados", "Automatizados", "Não Automatizados", "Automatizados", "Não Automatizados", "Automatizados", "Não Automatizados", "Automatizados", "Não Automatizados"];




const prompt = PromptSync();

let automatizaveis: number = 0;
let naoAutomatizaveis: number = 0;

for ( let i : number = 1; i <= 5; i++) {
  const cenario: string = prompt(`Digite o cenário ${i}°: `);
  const resposta: string = prompt(`Eh automatizável? (s/n): `);
  if (resposta === "sim") {
    console.log(`${cenario} -> Automatizar`)
    automatizaveis++;
  } else if( resposta == "não" || resposta === "nao"){

    console.log(`${cenario} -> Não-Automatizar`);
    naoAutomatizaveis++

  }

  else { 
    console.log("Ocorreu um erro!")
  }
}



console.log(`Cenarios Automarizaveis ${automatizaveis}`);
console.log(`Cenarios Não-Automatizaveis ${naoAutomatizaveis}`);
