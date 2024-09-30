import { PrismaTarefaRepository } from "@/repositories/prisma/prisma-tarefa-repository";
import { EditTarefasUseCase } from "@/use-case/tarefas/edit-tarefa";


export async function makeFactoryEditTarefaUseCase() {
  const prismaTarefaRepository = new PrismaTarefaRepository()

  const editTarefaUseCase = new EditTarefasUseCase(prismaTarefaRepository)

  return editTarefaUseCase
}