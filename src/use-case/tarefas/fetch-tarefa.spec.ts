import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryTarefas } from '../../repositories/in-memory/in-memory-tarefas'
import { FatchTarefasUseCase } from './fatch-tarefas'

let inMemoryTarefas: InMemoryTarefas
let sut: FatchTarefasUseCase
describe('Fetch tarefa', () => {
  beforeEach(() => {
    inMemoryTarefas = new InMemoryTarefas()
    sut = new FatchTarefasUseCase(inMemoryTarefas)
  })
  it('should be abble to fetch a user', async () => {
    Promise.all([
      await inMemoryTarefas.create({
        id: 'user-admin',
        title: 'Estudar Node.js',
        description: 'Ver uma video-aula e praticar',
        userId: 'user-1'
      }),
      await inMemoryTarefas.create({
        id: 'user-admin',
        title: 'Estudar React.js',
        description: 'Ver uma video-aula e praticar',
        userId: 'user-1'
      })
    ])
  

    const result = await sut.execute()

    expect(inMemoryTarefas.items).toHaveLength(2)
    expect(result?.tarefas).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Estudar Node.js',
        }),
        expect.objectContaining({
          title: 'Estudar React.js',
        })
      ])
     
    )
  })
})