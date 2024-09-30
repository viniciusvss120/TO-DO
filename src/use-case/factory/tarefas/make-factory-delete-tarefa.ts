import { PrismaTarefaRepository } from "@/repositories/prisma/prisma-tarefa-repository";
import { DeleteTarefasUseCase } from "@/use-case/tarefas/delete-tarefa";


export async function makeFactoryDeleteTarefaUseCase() {
  const prismaTarefaRepository = new PrismaTarefaRepository()

  const deleteTarefaUseCase = new DeleteTarefasUseCase(prismaTarefaRepository)

  return deleteTarefaUseCase
}