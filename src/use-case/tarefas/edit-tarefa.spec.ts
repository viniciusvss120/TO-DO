import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryTarefas } from '../../repositories/in-memory/in-memory-tarefas'
import { EditTarefasUseCase } from './edit-tarefa'

let inMemoryTarefas: InMemoryTarefas
let sut: EditTarefasUseCase
describe('Edit tarefa', () => {
  beforeEach(() => {
    inMemoryTarefas = new InMemoryTarefas()
    sut = new EditTarefasUseCase(inMemoryTarefas)
  })
  it('should be abble to edit a user', async () => {
    await inMemoryTarefas.create({
      id: 'user-admin',
      title: 'Estudar Node.js',
      description: 'Ver uma video-aula e praticar',
      isCompleted: false,
      userId: 'user-1',
      createdAt: new Date(),
      updatedAt: new Date()
    })
    const tarefa = {
      id: 'user-admin',
      title: 'Estudar Node.js',
      description: 'Ver uma video-aula e praticar',
      isCompleted: true,
      userId: 'user-1'
    }

    const result = await sut.execute(tarefa)
    console.log('edt',result)
    // expect(result.tarefa).toHaveLength(1)
    expect(result.tarefa).toEqual(
      expect.objectContaining({
        isCompleted: true,
      })
    )
  })
})