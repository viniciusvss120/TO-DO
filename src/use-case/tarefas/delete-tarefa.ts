import { Tarefa, TarefaRepository } from "@/repositories/tarefa-repository";

interface DeleteTarefaRequest {
  id: string
}

export class DeleteTarefasUseCase {
  constructor(
    private tarefaRepository: TarefaRepository
  ) {}

  async execute({
    id
  }: DeleteTarefaRequest): Promise<void> {

   await this.tarefaRepository.delete(id)

  }
}