import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryTarefas } from '../../repositories/in-memory/in-memory-tarefas'
import { DeleteTarefasUseCase } from './delete-tarefa'

let inMemoryTarefas: InMemoryTarefas
let sut: DeleteTarefasUseCase
describe('Delete tarefa', () => {
  beforeEach(() => {
    inMemoryTarefas = new InMemoryTarefas()
    sut = new DeleteTarefasUseCase(inMemoryTarefas)
  })
  it('should be abble to delete a user', async () => {
    await inMemoryTarefas.create({
      id: 'user-admin',
      title: 'Estudar Node.js',
      description: 'Ver uma video-aula e praticar',
      userId: 'user-1'
    })
  
    await sut.execute({id: 'user-admin'})
    expect(inMemoryTarefas.items).toHaveLength(0)
  })
})