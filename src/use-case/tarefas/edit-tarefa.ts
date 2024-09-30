import { Tarefa, TarefaRepository } from "@/repositories/tarefa-repository";


interface EditTarefaRequest {
  id: string
  title: string
  description: string
  isCompleted: boolean
  userId: string
}

interface EditTarefaResponse {
  tarefa: Tarefa
}
export class EditTarefasUseCase {
  constructor(
    private tarefaRepository: TarefaRepository,
  ) {}

  async execute({
    id,
    title,
    description,
    isCompleted,
    userId
  }: EditTarefaRequest): Promise<EditTarefaResponse> {
   
    const tarefa = await this.tarefaRepository.save(id, {
      title,
      description,
      isCompleted,
      userId,
      updatedAt: new Date()
    })

    return {
      tarefa
    }
  }
}