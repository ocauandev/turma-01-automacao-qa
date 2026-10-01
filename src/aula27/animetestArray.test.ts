import { describe, it, expect } from 'vitest';

// ---------------------------------------------------------------------------
// 1. Tipos e massa de dados
// ---------------------------------------------------------------------------
export interface AnimeTestExecution {
  id: number;
  animeTitle: string;
  testSuiteName: string;
  status: 'passed' | 'failed' | 'skipped';
  durationMs: number;
}

export const animeTestExecutions: AnimeTestExecution[] = [
  {
    id: 1,
    animeTitle: 'Naruto Shippuden',
    testSuiteName: 'Validação de Rasengan API',
    status: 'passed',
    durationMs: 140,
  },
  {
    id: 2,
    animeTitle: 'Attack on Titan',
    testSuiteName: 'Muralha Rose Defense Check',
    status: 'failed',
    durationMs: 520,
  },
  {
    id: 3,
    animeTitle: 'One Piece',
    testSuiteName: 'Busca pelo Tesouro do Luffytaro',
    status: 'passed',
    durationMs: 230,
  },
  {
    id: 4,
    animeTitle: 'Jujutsu Kaisen',
    testSuiteName: 'Expansão de Domínio Async Flow',
    status: 'passed',
    durationMs: 190,
  },
  {
    id: 5,
    animeTitle: 'Demon Slayer',
    testSuiteName: 'Respiração da Água - Forma 1',
    status: 'skipped',
    durationMs: 0,
  },
];

// ---------------------------------------------------------------------------
// 2. Operações com Array (map, filter, reduce)
// ---------------------------------------------------------------------------

// MAP: Formata resumos das suítes de teste
export const testSuiteSummaries: string[] = animeTestExecutions.map(
  (test) => `[${test.animeTitle}] - ${test.testSuiteName}`
);

// FILTER: Seleciona apenas as execuções com sucesso
export const passedAnimeTests: AnimeTestExecution[] = animeTestExecutions.filter(
  (test) => test.status === 'passed'
);

// REDUCE: Calcula a duração total em milissegundos
export const totalAnimeTestDurationMs: number = animeTestExecutions.reduce(
  (total, test) => total + test.durationMs,
  0
);

// ---------------------------------------------------------------------------
// 3. Função Async
// ---------------------------------------------------------------------------
export async function getAnimeTestExecutionById(id: number): Promise<AnimeTestExecution> {
  // Simula latência de rede (100ms)
  await new Promise((resolve) => setTimeout(resolve, 100));

  const execution = animeTestExecutions.find((test) => test.id === id);

  if (!execution) {
    throw new Error(`Execução de teste com ID ${id} não encontrada no clã!`);
  }

  return execution;
}

// ---------------------------------------------------------------------------
// 4. Suíte de Testes no Vitest
// ---------------------------------------------------------------------------
describe('Suíte de Testes de Animes (Arquivo Único)', () => {
  describe('Operações de Array (map, filter, reduce)', () => {
    it('deve formatar resumos das suítes com map', () => {
      expect(testSuiteSummaries).toHaveLength(5);
      expect(testSuiteSummaries[0]).toBe('[Naruto Shippuden] - Validação de Rasengan API');
    });

    it('deve filtrar apenas os testes com status passed', () => {
      expect(passedAnimeTests).toHaveLength(3);
      expect(passedAnimeTests.every((test) => test.status === 'passed')).toBe(true);
    });

    it('deve somar a duração total dos testes com reduce', () => {
      expect(totalAnimeTestDurationMs).toBe(1080);
    });
  });

  describe('getAnimeTestExecutionById (Async)', () => {
    it('caminho de sucesso: deve retornar a execução quando o ID existir', async () => {
      const result = await getAnimeTestExecutionById(3);

      expect(result).toEqual({
        id: 3,
        animeTitle: 'One Piece',
        testSuiteName: 'Busca pelo Tesouro do Luffytaro',
        status: 'passed',
        durationMs: 230,
      });
    });

    it('caminho de erro: deve lançar exceção quando o ID não existir', async () => {
      const invalidId = 99;

      await expect(getAnimeTestExecutionById(invalidId)).rejects.toThrow(
        `Execução de teste com ID ${invalidId} não encontrada no clã!`
      );
    });
  });
});