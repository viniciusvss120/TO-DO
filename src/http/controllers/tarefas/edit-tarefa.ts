
import { makeFactoryEditTarefaUseCase } from "@/use-case/factory/tarefas/make-factory-edit-tarefa";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function editTarefaController(req: FastifyRequest, res: FastifyReply) {
  const tarefaSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    isCompleted: z.boolean(),
    userId: z.string()
  })

  const {id, title, description,isCompleted, userId} = tarefaSchema.parse(req.body)


  try {
    const editUseCase = await makeFactoryEditTarefaUseCase()

    const tarefa = await editUseCase.execute({
      id,
      title,
      description,
      isCompleted,
      userId,

    })

    res.status(201).send(tarefa)
  } catch (error) {
    console.log(error)
    res.status(401).send(error)
  }
}