import { makeFactoryListTarefaUseCase } from "@/use-case/factory/tarefas/make-factory-list-tarefa";
import { FastifyReply, FastifyRequest } from "fastify";


export async function listTarefasController(req: FastifyRequest, res: FastifyReply) {
  try {
    const getUsers = makeFactoryListTarefaUseCase()

    const result = await getUsers.execute()

    return res.send(result)
  } catch (error) {
    console.log(error)
  }
}