import { Tarefa, TarefaRepository } from "@/repositories/tarefa-repository";


interface RegisterTarefaRequest {
  title: string
  description: string
  userId: string
}

interface RegisterTarefaResponse {
  tarefa: Tarefa
}
export class CreateTarefasUseCase {
  constructor(
    private tarefaRepository: TarefaRepository
  ) {}

  async execute({
    title,
    description,
    userId
  }: RegisterTarefaRequest): Promise<RegisterTarefaResponse> {
    
    console.log(title,description,userId)
    const tarefa = await this.tarefaRepository.create({
      title,
      description,
      userId,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    
    return {
      tarefa
    }
  }
}