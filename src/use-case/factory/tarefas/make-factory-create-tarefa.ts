import { PrismaTarefaRepository } from "@/repositories/prisma/prisma-tarefa-repository";
import { CreateTarefasUseCase } from "../../tarefas/create-tarefa";

export function makeFactoryCreateTarefaUseCase() {
  const prismaTarefaRepository = new PrismaTarefaRepository()

  const createTarefaUseCase = new CreateTarefasUseCase(prismaTarefaRepository)

  return createTarefaUseCase
}