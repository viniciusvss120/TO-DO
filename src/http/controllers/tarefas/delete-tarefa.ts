
import { makeFactoryDeleteTarefaUseCase } from "@/use-case/factory/tarefas/make-factory-delete-tarefa";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteTarefaController(req: FastifyRequest, res: FastifyReply) {
  const tarefaSchema = z.object({
    id: z.string()
  })

  const {id} = tarefaSchema.parse(req.params)

  try {
    const deleteUseCase = await makeFactoryDeleteTarefaUseCase()

    await deleteUseCase.execute({ id })

    res.status(204).send('Usuário deletado com sucesso!')
  } catch (error) {
    res.status(401).send(error)
  }
}