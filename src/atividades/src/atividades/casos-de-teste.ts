// 1. Definição do type CasoDeTeste
export type CasoDeTeste = {
  id: number;
  titulo: string;
  descricao: string;
  automatizado: boolean;
};

// 2. Função para criar um Caso de Teste
export function criarCasoDeTeste(
  id: number,
  titulo: string,
  descricao: string,
  automatizado: boolean = false
): CasoDeTeste {
  return {
    id,
    titulo,
    descricao,
    automatizado,
  };
}

// 3. Função para descrever um Caso de Teste
export function descrever(caso: CasoDeTeste): string {
  return `Id: ${caso.id} - Título: ${caso.titulo} - Descrição: ${caso.descricao} - Automatizado: ${caso.automatizado ? 'Sim' : 'Não'}`;
}

// 4. Função para marcar como automatizado
export function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
  return {
    ...caso,
    automatizado: true,
  };
}

// --- Uso e Execução das Funções ---

// Criando o primeiro caso de teste
const primeiroCasoDeTeste = criarCasoDeTeste(
  1,
  'Login com sucesso',
  'Valida se o usuário consegue realizar login com credenciais válidas',
  false
);

// Exibindo a descrição inicial
console.log(descrever(primeiroCasoDeTeste));

// Marcando como automatizado
const casoAutomatizado = marcarAutomatizado(primeiroCasoDeTeste);

// Exibindo a descrição atualizada
console.log(descrever(casoAutomatizado));

const casoComErro = criarCasoDeTeste("1", "Caso com Erro de Tipo", "Teste provocando erro no compilador", false);
