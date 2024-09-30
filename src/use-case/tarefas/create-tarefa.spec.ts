import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryTarefas } from '../../repositories/in-memory/in-memory-tarefas'
import { CreateTarefasUseCase } from './create-tarefa'

let inMemoryTarefas: InMemoryTarefas
let sut: CreateTarefasUseCase
describe('Create tarefa', () => {
  beforeEach(() => {
    inMemoryTarefas = new InMemoryTarefas()
    sut = new CreateTarefasUseCase(inMemoryTarefas)
  })
  it('should be abble to create a user', async () => {
    const tarefa = {
      title: 'Estudar Node.js',
      description: 'Ver uma video-aula e praticar',
      userId: 'user-1'
    }

    await sut.execute(tarefa)

    expect(inMemoryTarefas.items).toHaveLength(1)
    expect(inMemoryTarefas.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Estudar Node.js',
        })
      ])
    )
  })
})