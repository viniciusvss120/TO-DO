import { makeFactoryCreateTarefaUseCase } from "@/use-case/factory/tarefas/make-factory-create-tarefa";
import { CreateTarefasUseCase } from "@/use-case/tarefas/create-tarefa";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createTarefasController(req: FastifyRequest, res: FastifyReply) {
  const tarefaSchema = z.object({
    title: z.string(),
    description: z.string(),
    userId: z.string()
  })

  const {title, description, userId} = tarefaSchema.parse(req.body)
  try {
    const tarefaCreate = await makeFactoryCreateTarefaUseCase()

    const response = await tarefaCreate.execute({
      title,
      description,
      userId
    })
    console.log(response.tarefa)
  
    res.status(201).send(response)
    return response
  } catch (error) {
    console.log(error)
  }


}