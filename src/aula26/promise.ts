import { resolve } from "node:dns";


// function buscarNome(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Juan");
//         }, 4000);
//     });
// }


// async function executar() {
//     console.log("Iniciando a execução...");
//     const nome = await buscarNome();
//     console.log(`Nome encontrado: ${nome}`);
//     console.log("Execução finalizada.");
// }

// executar();



function delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function buscarUsuario(id: number): Promise<string>{
    await delay(5000);
    return `Usuário #${id}`;
}

console.log("Iniciando a busca do usuário...");
const nome = await buscarUsuario(42);
console.log(nome);
