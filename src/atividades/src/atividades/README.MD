# Atividade: Automação QA - Gerenciamento de Casos de Teste
---

## 📌 O que foi feito

### 1. Modelagem de Dados
Criação do type `CasoDeTeste` com as propriedades:
- `id`: `number`
- `titulo`: `string`
- `descricao`: `string`
- `automatizado`: `boolean`

### 2. Desenvolvimento de Funções
- `criarCasoDeTeste`: Recebe os parâmetros necessários e retorna uma nova instância do tipo `CasoDeTeste`.
- `descrever`: Retorna uma string formatada no padrão:  
  `Id: {id} - Título: {titulo} - Descrição: {descricao} - Automatizado: {Sim/Não}`
- `marcarAutomatizado`: Recebe um `CasoDeTeste`, altera o atributo `automatizado` para `true` e retorna a versão atualizada do objeto.

### 3. Invocação e Uso
- Declaração da constante `primeiroCasoDeTeste` chamando a função de criação.
- Chamada da função `marcarAutomatizado` atualizando a estrutura original do caso de teste.

### 4. Simulação de Erro de Tipo
- Provocação intencional de erro estático do TypeScript ao enviar uma `string` no argumento onde se esperava um valor do tipo `number`.

### 5. Configuração de Versionamento
- Criação do arquivo `.gitignore` na raiz da pasta `automacao-qa` ignorando a pasta `node_modules/`.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- **Node.js** instalado na sua máquina (v16+)
- **TypeScript** e **ts-node** instalados globalmente ou nas dependências do projeto.

### Passos para Execução:

1. **Instale as dependências (caso necessário):**
   ```bash
   npm install
   ```

2. **Execute o arquivo diretamente via TypeScript:**
   ```bash
   npx ts-node src/atividades/casos-de-teste.ts
   ```

3. **Ou verifique os erros de compilação:**
   ```bash
   npx tsc --noEmit
   ```

---

## ❌ Erro de Tipo Provocado

### Onde e como ocorreu:
No arquivo `src/atividades/casos-de-teste.ts`, realizamos a seguinte chamada passando a string `"1"` no lugar do parâmetro `id` (que aceita apenas `number`):

```typescript
const casoComErro = criarCasoDeTeste("1", "Caso com Erro de Tipo", "Teste provocando erro no compilador", false);
```

### Mensagem de Erro exibida pelo Compilador:

```text
src/atividades/casos-de-teste.ts:46:38 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

46 const casoComErro = criarCasoDeTeste("1", "Caso com Erro de Tipo", "Teste provocando erro no compilador", false);
                                         ~~~
```

### Representação em tela (VS Code / IDE):
> 🔴 **TS2345**: Argument of type `'string'` is not assignable to parameter of type `'number'`.

---

## 💻 Código Fonte (`src/atividades/casos-de-teste.ts`)

```typescript
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

// --- Provocação Intencional de Erro de Tipagem ---
const casoComErro = criarCasoDeTeste("1", "Caso com Erro de Tipo", "Teste provocando erro no compilador", false);
```
