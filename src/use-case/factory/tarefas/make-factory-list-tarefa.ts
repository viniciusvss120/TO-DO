import { PrismaTarefaRepository } from "@/repositories/prisma/prisma-tarefa-repository"
import { FatchTarefasUseCase } from "@/use-case/tarefas/fatch-tarefas"


export function makeFactoryListTarefaUseCase() {
  const prismaTarefaRepository = new PrismaTarefaRepository()

  const listTarefaUseCase = new FatchTarefasUseCase(prismaTarefaRepository)

  return listTarefaUseCase
}