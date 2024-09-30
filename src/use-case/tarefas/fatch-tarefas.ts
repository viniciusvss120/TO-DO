import { TarefaRepository } from "@/repositories/tarefa-repository";


export class FatchTarefasUseCase {
  constructor(
    private tarefaRepository: TarefaRepository
  ) {}

  async execute() {
    try {
      const tarefas = await this.tarefaRepository.findAll()

      return {
        tarefas
      }
    } catch (error) {
      console.log(error)
    }
  }
}